import { Open_Sans, Ubuntu_Mono } from "next/font/google";
import "../index.scss";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu-mono",
});

export const metadata = {
  title: "Shashwat Rathod",
  description:
    "Shashwat Rathod is a software development enthusiast who is currently pursuing MS in Computer Science from Northeastern University in Boston, USA.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "Shashwat Rathod",
    description:
      "Shashwat Rathod is a software development enthusiast who is currently pursuing MS in Computer Science from Northeastern University in Boston, USA.",
    type: "profile",
    url: "/",
    images: [
      {
        url: "/sc.png",
        alt: "Shashwat Rathod",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shashwat Rathod",
    description:
      "Shashwat Rathod is a software development enthusiast who is currently pursuing MS in Computer Science from Northeastern University in Boston, USA.",
    images: ["/sc.png"],
  },
};

export const viewport = {
  themeColor: "#d4ede9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${ubuntuMono.variable}`}>
      <body className={openSans.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
