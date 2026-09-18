import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-mark">
        <span className="brand-name">LUTEGUARD-B™</span>
        <span className="brand-tagline">
          BOTANICAL SCIENCE FOR BRIGHTER TOMORROWS
        </span>
      </Link>

      <nav className="top-nav" aria-label="Primary">
        <Link href="/archive">ARCHIVE</Link>
        <Link href="/our-story">OUR STORY</Link>
        <Link href="/luteguard-b">LUTEGUARD-B™</Link>
        <Link href="/shop">SHOP</Link>
      </nav>
    </header>
  );
}
