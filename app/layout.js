import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "LUTEGUARD-B™",
  description: "Warmth × Science. Botanical skincare and the Blue Light Archive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
