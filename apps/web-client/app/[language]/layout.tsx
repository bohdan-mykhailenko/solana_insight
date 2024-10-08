import type { Metadata } from "next";
import { Zen_Dots } from "next/font/google";
import { dir } from "i18next";

import {
  ConnectionProvider,
  WalletModalProvider,
  WalletProvider,
} from "@repo/ui/providers";
import { applicationLanguages } from "@repo/i18n";

export async function generateStaticParams() {
  return applicationLanguages.map((language) => ({ language }));
}

export const metadata: Metadata = {
  title: "Solana dApp",
  description: "Created with Next.js & Anchor",

  //   const metaTitle = "Solana Clicker";
  // const metaDescription =
  //   "Solana Clicker is an open-source game being developed to learn and demonstrate techniques for integrating with Solana programs and Solana NFTs.";
  // const metaAbsoluteUrl = "https://solana-clicker.netlify.app/";
  // const metaImageUrl = "https://solana-clicker.netlify.app/home.png";
  // <Head>
  //   <title>{metaTitle}</title>
  //   <meta name="title" content={metaTitle} />
  //   <meta name="description" content={metaDescription} />

  //   <meta property="og:type" content="website" />
  //   <meta property="og:title" content={metaTitle} />
  //   <meta property="og:url" content={metaAbsoluteUrl} />
  //   <meta property="og:image" content={metaImageUrl} />
  //   <meta property="og:description" content={metaDescription} />

  //   <meta name="twitter:card" content="summary" />
  //   <meta name="twitter:title" content={metaTitle} />
  //   <meta name="twitter:description" content={metaDescription} />
  //   <meta name="twitter:image" content={metaImageUrl} />
  // </Head>
};

const zenDots = Zen_Dots({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params: { language },
}: Readonly<{
  children: React.ReactNode;
  params: { language: string };
}>) {
  return (
    <html lang={language} dir={dir(language)}>
      <body className={zenDots.className}>
        <ConnectionProvider>
          <WalletProvider>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
