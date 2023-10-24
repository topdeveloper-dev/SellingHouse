import Footer from './Layout/Footer';
import Header from './Layout/Header';

function Contact() {
  return (
    <div className="bg-white p-0">
      <Header />

      <div className="py-5 flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Contact Us<span></span>
            </p>
            <h1 className="text-center mb-5">Contact For Any Query</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <p className="text-center mb-4 text-neutral-600">
                  The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a
                  few minutes. Just copy and paste the files, add a little code and you are done.
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <label htmlFor="name" className="block">
                          Your Name
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label>Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label>Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: '150px' }}
                        ></textarea>
                        <label>Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
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

export default Contact;
