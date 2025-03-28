import Header from "@/components/common/Header";
import "./globals.css";

export const metadata = {
  title: "Hustlin",
  description: "Hustlin Hardos set to launch the most anticipated NFT project of 2022",
  openGraph: {
    title: "Hustlin",
    description: "Hustlin Hardos set to launch the most anticipated NFT project of 2022",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
