
import type { HomeData } from '../../api/types'

export const IntroSection = (props: HomeData) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
      <p>{props.tagline}</p>
      <ul>
        {props.links.map((link: { name: string; url: string }) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
  