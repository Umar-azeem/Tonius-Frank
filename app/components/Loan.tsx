"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
}

const Loan: React.FC = () => {
  const socialLinks = [
  {
    id: "facebook",
    src: "https://api.iconify.design/uim:facebook-f.svg?color=%23004D22",
    alt: "Facebook",
    url: "https://www.facebook.com/toniusfrankteam/#",
  },
  // {
  //   id: "instagram",
  //   src: "https://api.iconify.design/uim:instagram.svg?color=%23004D22",
  //   alt: "Instagram",
  //   url: "https://www.instagram.com/thecfmtg/",
  // },
  // {
  //   id: "linkedin",
  //   src: "https://api.iconify.design/uim:linkedin-alt.svg?color=%23004D22",
  //   alt: "LinkedIn",
  //   url: "https://www.linkedin.com/company/cornerstone-first-mortgage/",
  // },
];
  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-green-800 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            A Team You Can Trust
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Our President Sean Cahan,
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our President Sean Cahan, uses his 20 years of experience to
            transform the loan process for the contemporary home-buyer. Our team
            of professionals are dedicated to delivering excellent customer
            service, unmatched communication, and transparent accessibility to
            you throughout the process. With consistent investment in innovative
            technology, we promise to enhance your experience, so you can be
            confident in financing your future!
          </p>

          <Link href="/about">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#006132] hover:bg-[#006132]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              Find a Loan Officer
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative ">
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1 ">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[350px] md:max-w-[450px] aspect-[4/5]  md:h-[500px] bg-[#006132] rounded-[20px]" />
            <Image
              src="/img/tf.png"
              alt="Advisor"
              width={480}
              height={680}
              className="absolute bottom-[2px] h-[60%] w-full max-w-[880px] object-contain object-bottom sm:h-[500px] sm:w-[450px] rounded-[20px]"
              priority
              unoptimized
            />
            <div className="md:hidden  absolute top-6 md:bottom-1 md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0  sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Tonius Frank
              </h3>
              <p className="text-gray-800 mt-2 text-xs">Mortgage Specialist</p>

              <p className="text-gray-800 text-xs mt-2">NMLS ID 252520</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {socialLinks.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-[#006132] transition group"
                aria-label={icon.alt}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={18}
                  height={18}
                  className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;
