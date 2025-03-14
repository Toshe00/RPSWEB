import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Shrikhand } from "next/font/google";
import { AlephiumWalletProvider } from '@alephium/web3-react';

const shrikhand = Shrikhand({ weight: "400", subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AlephiumWalletProvider network="mainnet" theme="retro">
        <body
          className={shrikhand.className}
        >
          {children}
        </body>
      </AlephiumWalletProvider>
    </html>
  );
}
