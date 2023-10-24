import Image from 'next/image';
import Hassle from '../../../public/img/house-hassle.png';
import Local from '../../../public/img/house-local.png';
import Zero from '../../../public/img/house-realtor.png';

function Services() {
  return (
    <div className="py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center text-base">
            <span></span>Our Services<span></span>
          </p>
          <h1 className="text-center mb-5 mt-1 text-[25px]">Trusted House Buyers in Tennessee</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <Image
                  width={0}
                  height={0}
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src={Hassle}
                  loading="lazy"
                  alt=""
                />
              </div>
              <h5 className="mb-3">Hassle-Free Option</h5>
              <p className="m-0 text-neutral-500">
                We make selling your house as easy as possible. When you sell your house in Tennessee to us we take care
                of the entire process.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <Image
                  width={0}
                  height={0}
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src={Zero}
                  loading="lazy"
                  alt=""
                />
              </div>
              <h5 className="mb-3">Zero Commissions</h5>
              <p className="m-0 text-neutral-500">
                Want to sell your house without a realtor? Avoid paying high real estate commissions by selling your
                Tennessee house to us.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <Image
                  width={0}
                  height={0}
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src={Local}
                  loading="lazy"
                  alt=""
                />
              </div>
              <h5 className="mb-3">Any Area or Situation</h5>
              <p className="m-0 text-neutral-500">
                No matter how many repairs your house needs or which situation you’re in we can buy your house. We buy
                houses in any area or situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
