import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 py-4">
          <div className="w-full h-auto">
            <div className="">
              <p className="text-[#33ce33] text-base font-semibold">Why choose us...?</p>
            </div>
            <div className="">
              <h1 className="text-xl sm:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444]">Experienced creative and helpful</h1>
              we are digital creative agency located in LA , we focus on
              creating responsive website . web design , seo services , ui/ux
              design website with all over maintenance,hosting domain name
              registration , graphic design , and visual identities for your
              business
            </div>
            <div className="mt-5">
              <button className="flex items-center gap-3 bg-[#33ce33] px-5 py-1 rounded shadow-2xl  text-[#fff] hover:bg-[#2ab12a] duration-500 ease-in-out">
                <span>Let&apos;s Chat</span>
                <span>
                  {" "}
                  <FaRegArrowAltCircleRight />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full h-auto">
            <div className="flex items-center gap-5 py-2">
              <h1 className="text-5xl text-[#33ce33]">01</h1>
              <div className="">
                <h1 className="text-2xl">+4 Years of Experience<span className="text-[#33ce33] font-semibold">.</span></h1>
                <p className="text-base py-2 mb-2">web have been in the industry for 4 years and have successfuly launched over +100 serves of my cline </p>
              </div>
            </div>
            <div className="flex items-center gap-5 py-2">
              <h1 className="text-5xl text-[#33ce33]">02</h1>
              <div className="">
                <h1 className="text-2xl">Creative Team<span className="text-[#33ce33] font-semibold">.</span></h1>
                <p className="text-base py-2 mb-2">web have been in the industry for 4 years and have successfuly launched over +100 serves of my cline </p>
              </div>
            </div>
            <div className="flex items-center gap-5 py-2">
              <h1 className="text-5xl text-[#33ce33]">03</h1>
              <div className="">
                <h1 className="text-2xl">We&quot;re helpful<span className="text-[#33ce33] font-semibold">.</span></h1>
                <p className="text-base py-2 mb-2">web have been in the industry for 4 years and have successfuly launched over +100 serves of my cline </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
