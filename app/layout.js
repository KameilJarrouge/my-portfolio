// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "Kamil Victor Jarrouj – Backend & Full-Stack Engineer",
  description:
    "Portfolio of Kamil Victor Jarrouj, backend and full-stack engineer (TypeScript, Node.js) in Essen, Germany. Experience in healthcare, retail and iGaming.",
  metadataBase: new URL(
    "https://portfolio-kameiljarrouges-projects.vercel.app/",
  ),
  openGraph: {
    title: "Kamil Victor Jarrouj – Backend & Full-Stack Engineer",
    description:
      "Backend and full-stack engineer (TypeScript, Node.js) in Essen, Germany.",
    url: "/",
    type: "website",
    images: ["/me.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100	`}
      >
        {children}
      </body>
    </html>
  );
}
