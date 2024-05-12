import Image from "next/image";
import Link from "next/link";
import promotion from "../../images/services/promotion.gif";
import "./style.css";
export default function Services() {
  return (
    <section className="">
      <div className="container mx-auto  py-0 w-[100%]    overflow-hidden z-[99] relative">
      <div className="main">
        {/* services title */}
        <div className="">
          <div className="text-center">
            <p className="text-[#20b820] text-base font-semibold">What we do__</p>
            <h1 className="text-2xl font-semibold tracking-[1px] py-1 ">
              Our Services
            </h1>
            <h3 className="text-base py-3 leading-[25px] tracking-[1px] ">
              Dynamic digital marketing agency providing tailored solutions
              including SEO, PPC, social media management, content creation,
              email campaigns, web design, and analytics. Elevate your online
              presence, engage audiences, and drive measurable results with our
              expertise.
            </h3>
          </div>
        </div>
        {/* serves */}
        <div className="">
          {/* social marketing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3 my-6">
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base text-start">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Search Engine Optimization</h1>
                <p className="py-3 text-base ">
                SEO stands for Search Engine Optimization. It is a process for increasing the number of viewers ...
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] dark:bg-[#101b2b] rounded shadow-2xl px-2 py-3">
              {/* services icons */}
              <div className="mt-3">
                <Image
                  className="mx-auto bg-[#5CBD1B] p-[3px] rounded-full mb-8 "
                  loading="lazy"
                  // placeholder="blur"
                  src={promotion}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              {/* content */}
              <div className="">
                <h1 className="text-xl font-medium">Social Media Marketing</h1>
                <p className="py-3 text-base">
                  Boost brand visibility and engagement through strategic social
                  media campaigns
                </p>
                <Link
                  href={"/social-media-marketing"}
                  className="bg-[#17a82b] w-full inline-block text-center rounded shadow-2xl py-1 tracking-[1px] text-[#fff] hover:bg-[#158a24] ease-in-out duration-500"
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div id="services_blur_color"></div> */}
      </div>
    </section>
  );
}
