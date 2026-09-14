import { profile } from '../data/content'
import './Impressum.css'

export default function Impressum() {
  return (
    <div className="impressum">
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>{profile.name}</p>
        <p>Pheasant Dr</p>
        <p>Cambridge CB3 1AQ</p>
        <p>Vereinigtes Königreich</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </section>

    </div>
  )
}
