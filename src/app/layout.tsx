import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Archivist",
  description: "Archivist Into the Artverse™",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ===================== */}
        {/* Google Analytics GA4 */}
        {/* ===================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SNW5Y4BJD5"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SNW5Y4BJD5', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ===================== */}
        {/* Microsoft Clarity */}
        {/* ===================== */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v6z6bj7zkp");
          `}
        </Script>
      </head>

      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
