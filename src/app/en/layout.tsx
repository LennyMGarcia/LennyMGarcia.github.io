import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/Theme";
import Header from "@/components/Header";
import { CssBaseline } from "@mui/material";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
  locale: never;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Lenny Garcia's Portfolio",
};

export default function RootLayout({
  children,
  locale,
}: RootLayoutProps) {
  const navItems = ["home",  "about", "skills", "portfolio", "certificates", "contact", ];

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
          <Header  navItems={navItems}/>
            {children}
          <Footer message={"Thanks for watching"}/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
