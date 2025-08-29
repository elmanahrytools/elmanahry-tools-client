import Image from "next/image";

const Section1 = ({}) => {
  return (
    <div className="w-full bg-fadeColor shadow-md shadow-[#00000051]  min-h-[380px] rounded-[10px] flex md:p-10 py-10 p-5  max-w-7xl animate-slideRightHome ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
        <div className="flex flex-col justify-center gap-5 flex-1">
          <Image
            src={"/alex-about.svg"}
            width={490}
            height={87}
            alt="Alex About"
            priority={true}
            loading="eager"
            unoptimized
          />
          <p className="text-mainColor max-w-[100%]">
            Established in 1974, ALEXANDRIA PROGESS TRADING CO. is the leading
            tools & Equipment trading company in Egypt, being the sole agent and
            distributor of more than 70 international brands from Europe,
            America & Asia, we lead the market by knowledge & experience.
          </p>
          <p className="text-mainColor max-w-[100%]">
            ALEX holds a product portfolio of more than 70,000 products serving
            a wide spectrum of industries, including Construction, Oil & Gas,
            Heavy Industries, Manufacturing & Automotive Servicing & Repair. The
            product portfolio we offer caters to all types of applications from
            DIY & Tradesmen to professional & industrial applications.
          </p>
          <p className="text-mainColor max-w-[100%]">
            Through the past 50 years ALEX had built a strong connection with
            the industry traders & retailers in the Egyptian market, a
            connection that is founded over the company’s reputation and the
            trust our retailers have gained in ALEX name throughout years of
            fruitful partnerships. This has enabled us to build a wide
            distribution network with shops exceeding 1,000 outlets covering
            every governorate in Egypt.
          </p>
          <p className="text-mainColor max-w-[100%]">
            Our customers are the users of our tools & equipment everywhere in
            Egypt, and for their convenience and continued trust, ALEX
            guarantees & services every brand it holds with a wide network of
            service centers & service tools collection points covering every
            corner of the country, to be as close as we could be to our
            customers wherever they are in Egypt, and to guarantee their
            continuing trust in our company and the brands we offer to them.
          </p>
          <p className="text-mainColor max-w-[100%]">
            Through half a century, ALEX has supplied its brands to numerous
            customers from various fields and industries in the Egyptian market,
            customers who are considered by both scale & knowledge leaders in
            their fields, we consider those customers as partners in our success
            story, and we cherish their trust in every step we take in the
            business.
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          <Image
            src={"/years-50.svg"}
            width={280}
            height={250}
            alt="Alex 50 Years"
            priority={true}
            loading="eager"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
