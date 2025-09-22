/**
 * @file Layout component for the portfolio gallery application.
 */
import './globals.css';
import Footer from '@/components/Footer';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Gallery</title>
        <meta name="description" content="mignonwhale's Portfolio Gallery" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
