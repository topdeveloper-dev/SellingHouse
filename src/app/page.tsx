import About from './component/About';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import Process from './component/Process';
import Services from './component/Services';
import Step from './component/Step';
import Head from 'next/head';

function Home() {
  return (
    <div className="bg-white p-0">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Step />
      <About />
      <Services />
      <Process />
      <Footer />

      <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
            />
          </svg>
        </i>
      </a>
    </div>
  );
}

export default Home;
