import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import "./style.css";
import BannerPhotos from "/src/images/hero-banner-image.svg";

export default function Banner() {
  return (
    <main>
      <div className="container mx-auto  py-0 w-[100%] h-[100vh] relative overflow-hidden z-[99]">
        <div className="main">
          <div className="banner_center top-[40%]">
            <div className="flex flex-col-reverse sm:flex-row gap-5 items-center justify-items-end sm:px-4">
              {/* 1st part banner */}
              <div className="w-[90%] sm:w-[55%]">
                <div className="">
                  <Link
                    className="text-base font-sans font-semibold text-blue-700 tracking-[4px]"
                    href={`#`}
                  >
                    What we do ?
                  </Link>
                </div>
                <div className="">
                  <h1 className="text-[17px] font-semibold  sm:text-xl lg:text-2xl  tracking-[2px]  capitalize py-8">
                    SEO, Affiliate Marketing, and More. Elevate Your Online
                    Presence Today...!
                  </h1>
                  <p className="text-sm sm:text-[15px]  tracking-[1px] capitalize">
                    E-Merge Marketing: Where Digital Innovation Meets Market
                    Evolution. We specialize in crafting tailored digital
                    strategies to elevate your brand&apos;s online presence,
                    drive engagement, and maximize ROI. Let&apos;s merge
                    creativity and technology to transform your digital
                    landscape.
                  </p>
                </div>
                <div className="my-8">
                  <button className=" bg-[#3C71FF] text-xl px-4 py-2 rounded shadow-2xl font-sans tracking-[1px] ease-in-out duration-500 hover:px-5">
                    <div className="flex items-center gap-2 ">
                      <span className="text-[#fff]">
                        Let&apos;s get started
                      </span>
                      <span>
                        <FaArrowRight className="text-[#fff]" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              {/* 2nd part of banner  */}
              <div className="">
                <Image
                  loading="lazy"
                  // placeholder="blur"
                  src={BannerPhotos}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* let circle bluer   */}
          <div className="" id="banner_circle_bluer_right"></div>
          {/* right circle bluer   */}
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
