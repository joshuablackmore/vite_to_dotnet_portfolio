
import type { HomeData } from '../../pages/Home'

export const IntroSection = ({name, intro, tagline, links}: HomeData) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{intro}</p>
      <p>{tagline}</p>
      <ul>
        {links.map((link: { name: string; url: string }) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
