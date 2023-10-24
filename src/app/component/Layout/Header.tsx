'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Home0 from '../../../../public/img/home0.png';
import Logo from '../../../../public/img/logo.png';

function Header() {
  const pathname = usePathname();

  return (
    <div className="position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <div className="logo-container">
            <Image width={90} height={10} src={Logo} alt="Logo" loading="lazy" />
          </div>
        </a>
        <div className="navbar-collapse">
          <div className="navbar-nav mx-auto py-0">
            <Link href="/" className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/About" className={`nav-item nav-link ${pathname === '/About' ? 'active' : ''}`}>
              About
            </Link>
            <Link
              href="/AvoidListening"
              className={`nav-item nav-link ${pathname === '/AvoidListening' ? 'active' : ''}`}
            >
              Avoid Listing
            </Link>
            <Link href="/Faq" className={`nav-item nav-link ${pathname === '/Faq' ? 'active' : ''}`}>
              FAQs
            </Link>
            <Link
              href="/Contact"
              className={`nav-link ${pathname === '/Contact' ? 'active' : ''}`}
              data-bs-toggle="dropdown"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-primary hero-header max-w-full">
        <div className="container px-lg-4">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated text-[55px] slideInDown">We Make Selling A House Simple</h1>
              <p className="text-white pb-12 animated slideInDown">
                Brotherly Housing Solutions specializes in buying houses in the local Tennessee area. We understand that
                selling a house can be a very nerve-wracking and overwhelming task, but you never have to worry about a
                thing when you sell to us. We take care of EVERYTHING!
              </p>
              <Link href="/About" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">
                Read More
              </Link>
              <Link href="/Contact" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <Image
                width={0}
                height={0}
                className="img-fluid animated zoomInAnimation"
                src={Home0}
                alt=""
                loading="lazy"
                // style={{ animationName: 'zoomIn', animationDuration: '1s', animationFillMode: 'both' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
