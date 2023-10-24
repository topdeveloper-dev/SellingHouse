import Image from 'next/image';
import Link from 'next/link';
import About1 from '../../../public/img/about.png';

function About() {
  return (
    <div className="bg-white p-0">
      <div className="py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp slideInDown" data-wow-delay="0.1s">
              <p className="section-title text-secondary">
                About Us<span></span>
              </p>
              <h1 className="mb-5 mt-1 text-xl">Top House Buyer in Tennessee: Learn More About Our Company</h1>
              <p className="mb-4 mt-12 text-bas text-justify break-words text-neutral-800">
                We pride ourselves in providing a unique and creative solution to buying houses. It’s our goal to help
                as many people as possible for more fair than any other “house buying” company in our area. As real
                estate investors we have committed ourselves to learning as much as we possible can about properly
                handling each and every situation we come across.
              </p>
              <Link href="/About" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">
                Read More
              </Link>
            </div>
            <div className="col-lg-6">
              <Image
                width={0}
                height={0}
                className="img-fluid wow zoomIn animated zoomInAnimation fadeInUp"
                data-wow-delay="0.5s"
                src={About1}
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
