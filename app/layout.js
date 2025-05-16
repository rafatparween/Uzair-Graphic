// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
// import { Inter } from "next/font/google";
// import "./globals.css";
// // import JivoChat from "./Jivochat";


// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "uzairgraphicsprinting",
//   description: "uzairgraphicsprinting",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       {/* <JivoChat/> */}
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ✅ Import Next.js Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "uzairgraphicsprinting",
  description: "uzairgraphicsprinting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        {/* ✅ Google Ads gtag.js Script with Console Logs */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17048592382"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments); console.log('gtag called with:', arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17048592382');
              console.log('gtag initialized for AW-17048592382');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}





