import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import MuiRegistry from "@/lib/mui-registry";
import MuiThemeProvider from "@/lib/MuiThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bharat Dangi | Senior Software Engineer",
  description:
    "Dynamic Senior Software Engineer with 3.5+ years in full-stack development, specializing in scalable, high-performance solutions. Expert in Node.js, React.js, TypeScript, and cloud technologies.",
  keywords: [
    "Bharat Dangi",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Node.js",
    "React.js",
    "TypeScript",
    "Sydney",
    "Australia",
  ],
  authors: [{ name: "Bharat Dangi" }],
  metadataBase: new URL("https://bharatdangi.com.np"),
  openGraph: {
    title: "Bharat Dangi | Senior Software Engineer",
    description:
      "Dynamic Senior Software Engineer with 3.5+ years in full-stack development, specializing in scalable, high-performance solutions.",
    url: "https://bharatdangi.com.np",
    siteName: "Bharat Dangi Portfolio",
    images: [{ url: "/images/profile.png", width: 800, height: 800, alt: "Bharat Dangi" }],
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dangibharat11",
    title: "Bharat Dangi | Senior Software Engineer",
    description: "Dynamic Senior Software Engineer specializing in scalable, high-performance solutions.",
    images: ["/images/profile.png"],
  },
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MuiRegistry>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </MuiRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
