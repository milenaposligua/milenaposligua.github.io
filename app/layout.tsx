import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SoundProvider } from "@/utils/useSound";
import { TranslationProvider } from "@/utils/useTranslations";
import { ThemeProvider } from "@/utils/useTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milena's Portfolio",
  description: "Milena Posligua Pilligua Portfolio",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
            <SoundProvider>
            <TranslationProvider>
            <ThemeProvider>
              {children}
              </ThemeProvider>
              </TranslationProvider>
            </SoundProvider>
      </body>
    </html>
  );
}

export default RootLayout