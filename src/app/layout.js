import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/store/providers";
import CartInitializer from "@/components/CartInitializer";
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
  title: "Elmanahry Tools",
  description: "Elmanahry Tools, Coming Soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="canonical" href="https://www.elmanahrytools.com/" />

        {/* Favicon */}
        <link rel="icon" href="/elmanahry.ico" type="image/x-icon" />
      </head>
      <body
        className={`${poppins.variable} flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Providers>
          <CartInitializer>
            <main className="min-h-full justify-center">{children}</main>
          </CartInitializer>
        </Providers>
      </body>
    </html>
  );
}
