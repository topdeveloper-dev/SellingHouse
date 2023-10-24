import Footer from '../component/Layout/Footer';
import Header from '../component/Layout/Header';

function AboutUs() {
  return (
    <div className="bg-white p-0">
      <Header />
      <div className="bg-white p-0">
        <div className="py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                  <p className="section-title text-secondary justify-content-center">
                    <span></span>About Us<span></span>
                  </p>
                  <h1 className="text-center mb-5 text-[25px]">
                    Top House Buyer in Tennessee Learn More About Our Company
                  </h1>
                </div>
                <p className="text-center justify-content-center text-[18px] text-neutral-600">
                  We pride ourselves in providing a unique and creative solution to buying houses. It’s our goal to help
                  as many people as possible by being able to buy houses for more option than any other “house buying”
                  company in our area. As real estate investors we have committed ourselves to learning as much as we
                  possible can about properly handling each and every situation we come across. When you sell to us you
                  can be sure that we are completely capable of handling any situation you are facing. It doesn’t matter
                  if you are going through a divorce, facing foreclosure, behind on payments, inherited the house, or
                  simply just want to sell your unwanted house. We have and can handle it all. Every home owner we help
                  becomes part of our family. We make sure to treat everyone fairly and honestly. Our job is to provide
                  a quick and easy solution, so that you can sell your home without any hassle and put more option in
                  your pockets. You can be sure that we never cheat our community and will always give a fair offer to
                  everyone. We hope to talk with you soon about selling your house and that you become a great addition
                  to our local family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default AboutUs;
