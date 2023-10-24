import Footer from '../component/Layout/Footer';
import Header from '../component/Layout/Header';

function AvoidListening() {
  return (
    <div className="bg-white p-0">
      <Header />
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <p className="section-title text-secondary justify-content-center">
          <span></span>
          We Make Selling A House Quick & Simple<span></span>
        </p>
        <h1 className="text-center mb-5 font-bold text-[30px]">Here Is Our 3 Step House Buying Process</h1>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="grid pt-4 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"></div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center font-bold mb-4 text-lg text-neutral-900">
                  1. Here is Why You Should Sell To Us Instead Of Listing With An Agent
                </h3>
                <p className=" text-neutral-900">
                  We want to share with you the main differences between listing your house on the market with an agent
                  and selling your house to us. The important thing to remember is that when selling to an agent you
                  will have a higher sales price, but a lot of times homeowners do not realize the amount of fees, costs
                  and commissions that go along with selling the traditional route. Below we have outlined a complete
                  breakdown of the major differences between selling to us and listing with an agent.
                </p>
              </div>
              <div className="flex flex-wrap">
                <ol className="md:px-3 lg:mb-0 lg:w-5/12 lg:px-6p-2  max-w-md space-y-1 text-gray-500 list-decimal list-inside font-bold dark:text-gray-900">
                  <li className="mb-2">
                    <a href="">
                      <span className="font-semibold text-gray-900 ">6% of purchase price plus other fees</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Can Take Up To 3-6 Months To Sell</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Forced To Make Necessary Repairs</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Wait For Agent To Do Home Showings</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Risk Buyer Financing Falling Through</span>
                  </li>
                </ol>
                <ol className="md:px-5 lg:mb-0 lg:w-8/12 lg:px-6p-2  max-w-md space-y-2 text-gray-500 list-decimal list-inside font-bold dark:text-gray-900">
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900">Pay Absolutely No Fees Or Commissions!</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Can Cose In As Little As 7-14 Days!</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Sell Your House In As-Is Condition!</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">Avoid The Hassle Of House Showings!</span>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold text-gray-900 ">No Risk Of Buyer Financing Fallouts!</span>
                  </li>
                </ol>
              </div>

              <div className="mb-10 mt-10">
                <h3 className="flex items-center font-bold mb-4 text-lg text-neutral-900">
                  2. You Pay No Fees, Repairs, or Commissions… Period.
                </h3>
                <p className="text-neutral-900">
                  You see, we are not listing your house. We are actually going to buy it. There is no middle man when
                  selling your house to us. Now, we may not be able to offer you full retail value, but we will
                  definitely give you a fair offer! And as you now know… Even when you sell your house through an agent
                  for full retail, you won’t be keeping all of that money.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center font-bold mb-4 text-lg text-neutral-900">3. Sell Your House As Is!</h3>
                <p className="text-neutral-900">
                  When you sell to us you never have to worry about repairing the house. When you sell your house
                  through an agent, however, there are some standards that your house must meet before anyone can buy
                  it. This means that in order to sell your house you may have to come out of pocket and do any
                  necessary repairs. Avoid the headaches and sell to us. We can give you a FREE No-Obligation fair offer
                  no matter what your house looks like!
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center font-bold mb-4 text-lg text-neutral-900">4. Sell When You Want!</h3>
                <p className="text-neutral-900">
                  Did you know that on average a house will sit on the market for 90 days! Can you wait 3 months for
                  your house to sell? When you sell to us you won’t have to… We can actually buy your house in as little
                  as 7 days! What’s even better is that you get to decide when you want to close. We never force you
                  into a situation you do not feel comfortable in. You choose to accept our offer, you choose when you
                  want to close, and you decide when you want to fair your check!
                </p>
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

export default AvoidListening;
