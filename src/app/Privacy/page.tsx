import Footer from '../component/Layout/Footer';
import Header from '../component/Layout/Header';

function Privacy() {
  return (
    <div className="bg-white p-0">
      <Header />
      <div className="py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary text-[25px] justify-content-center mb-8">
                  <span></span>Privacy Policy<span></span>
                </p>
              </div>
              <p className="text-[16px] text-neutral-600">
                At Brotherly Housing Solutions, your privacy is essential. We are committed to protecting the privacy
                and security of the personal information we collect from you across our website, [Your URL], and other
                sites that we own and operate.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                We gather personal information solely when it is necessary to provide a service to you. Such information
                includes your name, email address, phone number, and any other relevant details you may provide us. We
                ensure that your data is collected fairly, with your knowledge and consent.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                We only retain collected information for as long as necessary to provide you with your requested
                service. What data we store, we’ll protect within commercially acceptable means to prevent loss and
                theft, as well as unauthorised access, disclosure, copying, use or modification.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                To facilitate property transactions: We collect information pertinent to process property transactions,
                including assessments and necessary documentation.
              </p>
              <p className="text-[16px] text-neutral-600">
                To improve our services: Your information helps us enhance and customize our services, tailor our
                website content and improve your user experience with us.
              </p>
              <p className="text-[16px] text-neutral-600">
                To communicate with you: We use your contact information to respond to your inquiries, provide updates
                on property transactions, and share relevant information.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                By submitting your contact details and opting for text messages, you provide consent to receive
                marketing text messages from Brotherly Housing Solutions at the number you provide. Please note, your
                consent is not a condition of purchase, and you can opt out anytime.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                Your privacy is paramount to us. Any information provided through your consent will not be shared with
                third parties for marketing or promotional purposes, except when required by law.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                We strive to protect your personal information from unauthorized access, alteration, disclosure, or
                destruction. However, we cannot guarantee absolute security due to the inherent hazards presented by the
                Internet and electronic storage.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">
                Our Privacy Policy may undergo changes over time to reflect adjustments in our practices or for
                operational, legal, or regulatory reasons. In case of an update, the modified policy will be made
                available on our website, with the effective date revised accordingly.
              </p>
              <br />
              <p className="text-[16px] text-neutral-600">This policy is effective as of 9 June 2018.</p>
            </div>
            <hr className=" bg-black h-4 mb-10"></hr>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <p className="text-[25px] font-bold text-neutral-900">Brotherly Housing Solutions</p>
                  <p className="text-justify text-neutral-700 mt-4 break-words">
                    We are a local investment company that specializes in buying houses in Tennessee. We can buy your
                    house in As-Is condition and will pay. Our process is always quick and hassle-free!.
                  </p>
                </div>
                <div className="col-sm-12 col-md-1"></div>

                <div className="col-xs-6 col-md-3">
                  <p className="text-[25px] font-bold text-neutral-900 mb-4">Contact Us</p>
                  <ul className="footer-links">
                    <li>
                      <p className=" text-neutral-700 mb-1">(615)205-4617</p>
                    </li>
                    <li>
                      <p className=" text-neutral-700 mb-1">brothersgroup615@bhssell.com</p>
                    </li>
                    <li>
                      <p className=" text-neutral-700 mb-1">
                        301 S. Perimeter Park Drive Suite 100 Nashville, TN, US 37211
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                  <p className="text-[25px] font-bold text-neutral-900 mb-4">Cities We Buy In</p>
                  <p className=" text-neutral-700">Sell My House Fast In Tennessee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
