import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ricky Richard Takahindangen | Personal Portfolio",
  description: "IT Student at President University specializing in Cyber Security and Full-Stack Development. Welcome to my personal portfolio displaying my projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${pixelify.variable} scroll-smooth dark`}>
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
