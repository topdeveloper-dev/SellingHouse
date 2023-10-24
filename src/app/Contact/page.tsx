import Footer from '../component/Layout/Footer';
import Header from '../component/Layout/Header';
import Link from 'next/link';

function Contact() {
  return (
    <div className="bg-white p-0">
      <Header />

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <p className="section-title text-[20px] text-secondary justify-content-center mb-8">
                <span></span>Contact Us<span></span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6p-2 ">
              <form>
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email" className=" text-neutral-400">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="email" className=" text-neutral-400">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-floating">
                      <input type="number" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="phoneNumber" className=" text-neutral-400">
                        Area Code
                      </label>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="form-floating">
                      <input type="number" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="phoneNumber" className=" text-neutral-400">
                        Phone Number
                      </label>
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
                      <label htmlFor="message" className=" text-neutral-400">
                        Message
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="flex">
                      <div className="flex items-center h-5">
                        <input
                          id="helper-checkbox"
                          aria-describedby="helper-checkbox-text"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label htmlFor="helper-checkbox" className="font-medium text-gray-900 ">
                          By submitting this form and signing up for texts, you consent to receive marketing text
                          messages from company at the number provided. Consent is not a condition of purchase. Msg &
                          data rates may apply. Unsubscribe at any time by replying STOP or clicking the unsubscribe
                          linke (where available). Read our{' '}
                          <Link href="/Privacy" className="inline-flex items-center space-x-1  hover:text-orange-400">
                            {' '}
                            Privacy Policy
                          </Link>{' '}
                          &{' '}
                          <Link className="inline-flex items-center space-x-1  hover:text-orange-400" href="/Terms">
                            Terms & Conditions.
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div />
                  </div>
                  <div className="col-12">
                    <button
                      className="mb-6 btn-primary w-100 py-3 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          strokeWidth="2"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-lg text-neutral-900">Contact Number</p>
                      <p className="text-neutral-600 ">brothersgroup615@gmail.com</p>
                      <p className="text-neutral-600">615 569 0959</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-person-workspace"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-lg text-neutral-900">Working Hours</p>
                      <p className="text-neutral-500">Monday – Saturday</p>
                      <p className="text-neutral-500">8:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-lg text-neutral-900">Phone Number</p>
                      <p className="text-neutral-600">(615)205-4617</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
