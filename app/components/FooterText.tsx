import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          The Tonius Frank Team! Providing Mortgage Services for all of your
          mortgage financing needs. Looking for reliable mortgage services?
          Tonius Frank - The Mortgage Disrupters offers Professionalized
          Mortgage Services to simplify your home financing journey. With our
          expert guidance and tailored refinancing options, achieving your dream
          home has never been easier! Connect with us today and discover the
          path to your future home
        </p>

        <p className="mt-6">For Licensing Information go to:</p>

        <p className="mt-6">
          Copyright © {currentYear} Tonius Frank - The Mortgage Disrupters - All
          Rights Reserved.
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logo.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;
