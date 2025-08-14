import { useEffect, useState } from "react";
import { IntroSection } from "../src/components/IntroSection";
import { getHomeData } from "../api";
import type { HomeData } from "../api/types";
import HeroImg from "../src/components/HeroImg";

const Home = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getHomeData();
        console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching home data:", error);
        setIsLoading(true);
        setError("Failed to fetch home data");
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data && (
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <HeroImg />
            <IntroSection
              pageTitle={data.pageTitle}
              name={data.name}
              intro={data.intro}
              tagline={data.tagline}
              links={data.links}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
