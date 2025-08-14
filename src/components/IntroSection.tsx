import type { HomeData } from "../../api/types";

export const IntroSection = (props: HomeData) => {
  return (
    <section className="flex flex-col gap-y-6 px-4 py-12 text-start">
      <h2 className="text-2xl font-bold">{props.name}</h2>
      <p>{props.tagline}👨‍💻🥁</p>
      <p>{props.intro}</p>
      <ul>
        {props.links.map((link: { name: string; url: string }) => (
          <li key={link.name}>
            <a className="btn" href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
