import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fira = Fira_Code({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-fira", display: "swap" });

export const metadata: Metadata = {
  title: "Anupama Abeyrathna | Software Engineer",
  description: "Anupama Abeyrathna is a software engineer in Colombo, Sri Lanka, working across backend, web, mobile and cloud.",
};
export const viewport: Viewport = { themeColor: "#0b0c0d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fira.variable}`}>
      <body>{children}</body>
    </html>
  );
}
