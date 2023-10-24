import Image from 'next/image';
import Home1 from '../../../public/img/home1.jpg';
import Home2 from '../../../public/img/home2.jpg';
import Home3 from '../../../public/img/home3.jpg';
import Home4 from '../../../public/img/home4.jpg';
import Home5 from '../../../public/img/home5.jpg';
import Home6 from '../../../public/img/home6.jpg';

function Process() {
  return (
    <div className="py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center text-base mb-2">
            <span></span>Our Process<span></span>
          </p>
          <h1
            className="text-center mb-5 text-[20px] text-neutral-600"
            style={{ visibility: 'visible', animationDuration: '0.1s', animationName: 'fadeInUp' }}
          >
            Our Process Is Extremely Simple… Fill Out Our Form & Receive A Free No-Obligation Fair Offer!
          </h1>
        </div>
        <div className="row g-4 portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <Image width={0} height={0} className="img-fluid w-100" src={Home4} alt="" loading="lazy" />
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href="img/home4.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye">
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2"></p>
                <a>{/* <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5> */}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <Image width={0} height={0} className="img-fluid w-100" src={Home5} alt="" />
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href="img/home5.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2"></p>
                <a>{/* <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5> */}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <Image width={0} height={0} className="img-fluid w-100" src={Home6} alt="" />
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href="img/home6.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2"></p>
                <a>{/* <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5> */}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <Image width={0} height={0} className="img-fluid w-100" src={Home3} alt="" />
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href="img/home3.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2"></p>
                <a>{/* <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5> */}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <Image width={0} height={0} className="img-fluid w-100" src={Home1} alt="" loading="lazy" />
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href="img/home1.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2"></p>
                <a>{/* <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5> */}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <Image width={0} height={0} className="img-fluid w-100" src={Home2} alt="" loading="lazy" />
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href="img/home2.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2"></p>
                <a>{/* <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5> */}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
