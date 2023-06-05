import { Link } from 'wouter'
import { header, headerLogo, headerTitle } from '../styles/Header.css'

export default function Header() {
  return (
    <header className={header}>
      <Link href="/">
        <img src="/logo.svg" alt="Hacker News logo" className={headerLogo} />
      </Link>
      <h1 className={headerTitle}>Hacker News</h1>
    </header>
  )
}
