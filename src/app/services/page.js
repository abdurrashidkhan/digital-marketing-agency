import Image from "next/image";
import Link from "next/link";
import image4 from "../../images/services/analytics.png";
import image3 from "../../images/services/content.png";
import image5 from "../../images/services/email-marketing.png";
import image7 from "../../images/services/film-editing.png";
import image8 from "../../images/services/planning";
import image2 from "../../images/services/seo.png";
import image1 from "../../images/services/social-media.png";
import image6 from "../../images/services/social-network.png";
import "./style.css";
export default function Services() {
  const services = [
    {
      title: "Social Media Marketing",
      description:
        "Boost brand visibility and engagement through strategic social media campaigns",
      image: image1,
    },
    {
      title: "Search Engine Optimization",
      description:
        "SEO stands for Search Engine Optimization. It is a process for increasing the number of viewers",
      image: image2,
    },
    {
      title: "Content Marketing",
      description:
        "Boost brand visibility and loyalty through strategic content marketing. Engage audiences with compelling storytelling and valuable insights.",
      image: image3,
    },
    {
      title: "Analytics and Reporting",
      description:
        "Comprehensive analytics and reporting services to track, measure, and optimize digital marketing campaigns for data-driven decision-making.",
      image: image4,
    },
    {
      title: "Email Marketing",
      description:
        "Effective email marketing strategies to engage subscribers, drive conversions, and nurture customer relationships for long-term success",
      image: image5,
    },
    {
      title: "Social Network",
      description:
        "Strategic social network management to build brand presence, engage audiences, and drive meaningful interactions for business growth and success.",
      image: image6,
    },
    {
      title: "Video Marketing",
      description:
        "Innovative video marketing solutions to captivate audiences, convey brand messages, and drive engagement for impactful online presence and growth.",
      image: image7,
    },
    {
      title: "Affiliate Marketing",
      description:
        "Drive sales and expand reach through affiliate marketing partnerships, leveraging networks to promote products and services for mutual benefits.",
      image: image8,
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto  py-0 w-[100%]    overflow-hidden z-[99] relative">
        <div className="main">
          {/* services title */}
          <div className="">
            <div className="text-center">
              <p className="text-[#20b820] text-base font-semibold">
                What we do__
              </p>
              <h1 className="text-2xl font-semibold tracking-[1px] py-1 ">
                Our Services
              </h1>
              <h3 className="text-base py-3 leading-[25px] tracking-[1px] ">
                Dynamic digital marketing agency providing tailored solutions
                including SEO, PPC, social media management, content creation,
                email campaigns, web design, and analytics. Elevate your online
                presence, engage audiences, and drive measurable results with
                our expertise.
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
                  <h1 className="text-xl font-medium">
                    Social Media Marketing
                  </h1>
                  <p className="py-3 text-base text-start">
                    Boost brand visibility and engagement through strategic
                    social media campaigns
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
                  <h1 className="text-xl font-medium">
                    Search Engine Optimization
                  </h1>
                  <p className="py-3 text-base ">
                    SEO stands for Search Engine Optimization. It is a process
                    for increasing the number of viewers ...
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
                  <h1 className="text-xl font-medium">Content Marketing</h1>
                  <p className="py-3 text-base">
                    Boost brand visibility and loyalty through strategic content
                    marketing. Engage audiences with compelling storytelling and
                    valuable insights.
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
                  <h1 className="text-xl font-medium">
                    Social Media Marketing
                  </h1>
                  <p className="py-3 text-base">
                    Boost brand visibility and engagement through strategic
                    social media campaigns
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
                  <h1 className="text-xl font-medium">
                    Social Media Marketing
                  </h1>
                  <p className="py-3 text-base">
                    Boost brand visibility and engagement through strategic
                    social media campaigns
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
                  <h1 className="text-xl font-medium">
                    Social Media Marketing
                  </h1>
                  <p className="py-3 text-base">
                    Boost brand visibility and engagement through strategic
                    social media campaigns
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
                  <h1 className="text-xl font-medium">
                    Social Media Marketing
                  </h1>
                  <p className="py-3 text-base">
                    Boost brand visibility and engagement through strategic
                    social media campaigns
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
                  <h1 className="text-xl font-medium">
                    Social Media Marketing
                  </h1>
                  <p className="py-3 text-base">
                    Boost brand visibility and engagement through strategic
                    social media campaigns
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
