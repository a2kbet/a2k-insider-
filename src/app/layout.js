import "./styles/globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Script from "next/script";

export const metadata = {
  title: "India’s #1 Online Casino & Sports Betting Platform | A2k.fun",
  description:
    "Join India’s #1 Online Casino & Sports Betting platform. Enjoy exciting games, real rewards, and fast payouts. Rule the table with trusted gameplay today!",
  verification: {
    google: "441qDOCfT_C0eAjK5KiDutC7fkAefZzgOmSVjmtEfTo",
  },
  alternates: {
    canonical: "https://a2k.fun/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/CROPLOGO.png" />
        {/* Canonical Tag */}
        {/* <link rel="canonical" href="https://a2k.fun/" /> */}

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="441qDOCfT_C0eAjK5KiDutC7fkAefZzgOmSVjmtEfTo"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JNYZSTL44Y"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JNYZSTL44Y');
            `,
          }}
        />

        {/*Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MBX9TJKD');`,
          }}
        />
      </head>

      <body className="bg-black text-white">
        {/* ✅ GTM <noscript> fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBX9TJKD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main className="pt-20 md:pt-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
