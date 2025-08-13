import { useEffect } from "react";
import { useState } from "react";
import { IntroSection } from "../src/components/IntroSection";


export type HomeData = {
  pageTitle: string;
  name: string;
  intro: string;
  tagline: string;
  links: {
    name: string;
    url: string;
  }[];
}


const Home = () => {


const [result, setResult] = useState<HomeData | null>(null)

    useEffect(() => {
        const getData = async () => {
          const data = await fetch('http://localhost:5007/api/public/home', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const result = await data.json();
          console.log(result)
          setResult(result);
        };
        getData();
    }, []);

  return (
    <>
    {result && (
      <IntroSection pageTitle={result.pageTitle} name={result.name} intro={result.intro} tagline={result.tagline} links={result.links} />
    )}
      </>
  )
}

export default Home