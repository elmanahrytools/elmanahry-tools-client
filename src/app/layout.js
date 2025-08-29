import localFont from "next/font/local";
import "./globals.css";

// Load Poppins font locally with multiple weights
const poppins = localFont({
  src: [
    {
      path: "./fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/poppins/Poppins-BoldItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Alex Progress Trading",
  description:
    "Established in 1974, ALEXANDRIA PROGESS TRADING CO. is the leading tools & Equipment trading company in Egypt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.alexprogress.com/" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="z6Nn1U2V_Y2NyxV3hNscu4Lurfr473fLRmzN-xL2F_k"
        />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T6BRLJR072"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T6BRLJR072');
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} flex flex-col min-h-screen overflow-x-hidden`}
      >
        <main className="min-h-full justify-center">{children}</main>
      </body>
    </html>
  );
}
