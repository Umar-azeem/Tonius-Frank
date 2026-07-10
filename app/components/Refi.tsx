// app/components/Refi.tsx
export default function Refi() {
  return (
    <div className="relative isolate overflow-hidden bg-[#006132] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-white/10"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-white/5">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            strokeWidth="0"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Intro block */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-[#7FD9AC]">
                Mortgage services
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Unlocking the potential of refinancing
              </h1>
              <p className="mt-6 text-xl/8 text-white/70">
                Refinancing is more than just a financial maneuver — it&rsquo;s
                a strategic approach that can reshape your financial future.
                Whether you&rsquo;re a homeowner in a bustling metropolitan
                area or a resident of a smaller community, adjusting your
                mortgage terms can mean significant savings and more
                manageable monthly payments.
              </p>
            </div>
          </div>
        </div>

        {/* First sticky image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src="/img/h5.png"
            alt="Homeowner reviewing refinancing paperwork"
            className="w-3xl max-w-none rounded-xl bg-[#06231A] shadow-xl ring-1 ring-white/10 sm:w-228"
          />
        </div>

        {/* Body block */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-white/70 lg:max-w-lg">
              <p>
                Imagine reducing your interest rate, shortening your loan
                term, or tapping into your home&rsquo;s equity to address
                pressing needs. In this guide, you&rsquo;ll explore how
                changes in interest rates affect long-term costs, the
                benefits of consolidating multiple loans into one streamlined
                payment, and actionable strategies for spotting the right
                time to refinance.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                Top 3 refinancing strategies
              </h2>

              <ul role="list" className="mt-8 space-y-8 text-white/70">
                <li className="flex gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-[#7FD9AC]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v3.19L7.03 8.72a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L11.75 9.94V6.75Z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-white">
                      Rate-and-Term Refinancing.
                    </strong>{" "}
                    Adjust your interest rate and loan term together to
                    secure a lower rate and reduce monthly payments, while
                    potentially shortening the repayment period — a
                    strategic move for those in competitive local markets.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-[#7FD9AC]"
                  >
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.153Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10.75 4.75a.75.75 0 0 0-1.5 0v.316a3.78 3.78 0 0 0-1.35.615c-.65.504-1.05 1.22-1.05 2.01 0 .79.4 1.505 1.05 2.01.386.297.844.5 1.35.614v2.415a2.98 2.98 0 0 1-.734-.319 2.98 2.98 0 0 1-.339-.242.75.75 0 1 0-.965 1.148c.348.294.746.529 1.174.687.28.104.575.18.879.222v.317a.75.75 0 0 0 1.5 0v-.316c.516-.098.997-.31 1.4-.617.65-.504 1.05-1.22 1.05-2.011 0-.79-.4-1.505-1.05-2.01a3.78 3.78 0 0 0-1.4-.617V5.68c.238.049.46.145.652.28.11.079.212.171.302.276a.75.75 0 1 0 1.132-.984 3.28 3.28 0 0 0-1.05-.79 3.78 3.78 0 0 0-1.036-.318v-.316Z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-white">
                      Cash-Out Refinancing.
                    </strong>{" "}
                    Unlock your home&rsquo;s equity for renovations, debt
                    consolidation, or other major financial goals — converting
                    part of your home&rsquo;s value into liquid funds so you
                    stay agile in local markets.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-[#7FD9AC]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.356 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-white">
                      Cash-In Refinancing.
                    </strong>{" "}
                    Inject a lump sum into your existing loan to reduce the
                    overall balance, potentially leading to better terms and
                    lower interest costs — ideal for building equity faster.
                  </span>
                </li>
              </ul>

              <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  {
                    src: "/img/ho5.png",
                    alt: "Line chart comparing mortgage rates",
                    label: "Rate-and-Term",
                    sub: "Compare your rate",
                  },
                  {
                    src: "/img/ho6.png",
                    alt: "Homeowner reviewing renovation plans",
                    label: "Cash-Out",
                    sub: "Access your equity",
                  },
                  {
                    src: "/img/ho7.png",
                    alt: "Coins stacked beside a savings ledger",
                    label: "Cash-In",
                    sub: "Shrink your balance",
                  },
                ].map((img, i) => (
                  <div
                    key={img.label}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 hover:ring-[#82f3ba]/40"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06231A] via-[#06231A]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#82f3ba] transition-all duration-500 group-hover:w-full" />
                    <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#82f3ba]">
                        {img.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {img.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-14">
                When evaluating refinancing options, take a broad look at the
                factors that can impact your financial future: your current
                interest rate against prevailing local market rates, the
                overall cost structure, and any fees or penalties tied to the
                process. The duration of your loan matters too — a term
                aligned with your long-term goals offers flexibility and
                potential savings.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                Key factors for smart decisions
              </h2>
              <p className="mt-6">
                Assess your credit score, since a strong rating helps secure
                more favorable terms. Understand your loan-to-value ratio, as
                it determines eligibility and pricing. And calculate your
                break-even point — how long it will take for refinancing
                costs to pay off through lowered monthly payments.
              </p>
            </div>
          </div>
        </div>

        {/* Second sticky image */}
        <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:overflow-hidden">
          <img
            src="/img/h4.png"
            alt="Chart illustrating mortgage rate trends"
            className="w-3xl max-w-none rounded-xl bg-[#06231A] shadow-xl ring-1 ring-white/10 sm:w-228"
          />
        </div>

        {/* Closing block */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-4 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-white/70 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Rethink your mortgage structure
              </h2>
              <p className="mt-6">
                Refinancing is more than a financial reset — it&rsquo;s a
                strategic move that can transform your mortgage terms and
                monthly payments. By reassessing your existing mortgage, you
                can potentially secure a lower interest rate, adjust the
                duration of your loan, and improve overall payment
                structures. Many homeowners find that renegotiating these
                terms leads to immediate cash flow relief and long-term
                savings.
              </p><div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  {
                    src: "/img/ho2.png",
                    alt: "Line chart comparing mortgage rates",
                    label: "Rate-and-Term",
                    sub: "Compare your rate",
                  },
                  {
                    src: "/img/ho3.png",
                    alt: "Homeowner reviewing renovation plans",
                    label: "Cash-Out",
                    sub: "Access your equity",
                  },
                  {
                    src: "/img/ho4.png",
                    alt: "Coins stacked beside a savings ledger",
                    label: "Cash-In",
                    sub: "Shrink your balance",
                  },
                ].map((img, i) => (
                  <div
                    key={img.label}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 hover:ring-[#82f3ba]/40"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06231A] via-[#06231A]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#82f3ba] transition-all duration-500 group-hover:w-full" />
                    <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#82f3ba]">
                        {img.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {img.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8">
                Evaluate current market conditions, since local trends may
                influence available rates. Reassess your financial goals:
                shortening your loan term can build equity faster, while
                extending it might reduce monthly expenses. Understand cost
                factors — fees and closing costs are key when determining
                overall savings. And consult industry professionals, whose
                insight on mortgage services can help clarify nuances and
                tailor solutions to your needs.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                What does the refinancing process involve?
              </h2>
              <p className="mt-6">
                Refinancing means replacing an existing mortgage with a new
                one that offers improved terms or lower interest rates. The
                process typically involves evaluating your credit profile,
                gathering financial documents, and comparing offers.
              </p>
              <p className="mt-8">
                To determine if refinancing is right for you, consider your
                current interest rate, financial goals, and the potential
                savings over time. Running the numbers can help you decide
                whether lowering your monthly payments or shortening your
                loan period justifies the refinancing costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}