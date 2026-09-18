import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">

      <div>
        <div className="footer-brand">
          LUTEGUARD-B™
        </div>

        <div className="footer-small">
          BOTANICAL SCIENCE FOR BRIGHTER TOMORROWS
        </div>
      </div>

      <div className="footer-links">
        <Link href="/archive">ARCHIVE</Link>
        <Link href="/our-story">OUR STORY</Link>
        <Link href="/luteguard-b">LUTEGUARD-B™</Link>
        <Link href="/shop">SHOP</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      <div className="footer-small footer-right">
        Ganghwa · Gyodong Island · Korea
        <br />
        © 2026 LUTEGUARD-B™
      </div>

    </footer>
  );
}
