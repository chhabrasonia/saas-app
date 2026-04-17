import { Google_Sans } from "next/font/google";
import "./globals.css";
import { fetchSiteSettings } from "./api/footer";
import Footer from "./_components/ui/Footer";
import Header from "./_components/ui/Header";
import { fetchMenu } from "./api/menu-items";

const GoogleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saas test",
  description: "Saas test project",
};

export default async function RootLayout({ children }) {
  const navigations   = await fetchMenu();
  const siteSettings  = await fetchSiteSettings();
  const siteLogo      = siteSettings.data.settings.logo;

  return (
    <html
      lang="en"
      className={`${GoogleSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Header data={{
            logo: siteLogo,
            navigation: navigations?.header ?? null,
          }} />
          {children}
          <Footer sitedata={siteSettings} menu = {navigations?.footer ?? null} />
        </body>
    </html>
  );
}

