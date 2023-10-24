function Step() {
  return (
    <div className="py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp slideInDown" data-wow-delay="0.1s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
              <h5 className="mb-4 text-[25px] text-neutral-950">Fill Out Our Simple Form</h5>
              <p className="m-2 text-base text-neutral-600">
                In order for us to get your the best fair offer for your house, all you have to do is fill out our
                simple form. It only takes a few minutes to answer the questions we have about your property. The more
                details we have the quicker we can send you our fair offer.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp slideInDown " data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-search text-primary mb-4"></i>
              <h5 className="mb-8 text-[25px] text-neutral-950">Schedule An Appointment</h5>
              <p className="m-0 text-base text-neutral-600">
                Once we receive the details about your property, we will schedule an appointment to go see it in person.
                After we view the house we can give you our best fair offer and present you with a purchase agreement.
                The best part is you are under no obligation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp slideInDown " data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
              <h5 className="mb-8 text-[25px] text-neutral-950">Close On Your House</h5>
              <p className="m-4 text-base text-neutral-600">
                Once you sign the purchase agreement, we can open escrow and begin the process of buying your house. We
                can even close in as little as 7 days! This means you can get fair in your pocket quicker than listing
                the property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step;
