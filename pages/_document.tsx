import { Head, Html, Main, NextScript } from 'next/document';
import favicon from '../src/app/favicon.ico';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Jost:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />

        <script async src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script async src="lib/wow/wow.min.js"></script>
        <script async src="lib/easing/easing.min.js"></script>
        <script async src="lib/waypoints/waypoints.min.js"></script>
        <script async src="lib/counterup/counterup.min.js"></script>
        <script async src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script async src="lib/isotope/isotope.pkgd.min.js"></script>
        <script async src="lib/lightbox/js/lightbox.min.js"></script>
        <link rel="icon" href="../src/app/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
