import ProjectsBanner from "@/Components/ProjectsBanner/ProjectsBanner";
import Image from "next/image";
import seoImage from "../../images/projects/seo.png";
export default function Projects() {
  const prevProjects = [
    {
      title: "Search Engine Optimization",
      description:
        "Search Engine Optimization (SEO) enhances website visibility in search engine results, boosting organic traffic through strategic keyword optimization, content quality improvement, and technical enhancements.",
      image: seoImage,
    },
  ];
  return (
    <section>
      <ProjectsBanner />
      <div className="container mx-auto px-2 py-10">
        <div className="">
          {/* <div className="text-center">
            <p className="text-[#20b820] font-semibold">
              Our Prevues Projects__
            </p>
            <h1 className="capitalize text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444] hvf-dom-checked ">
              Check Our Awesome latest Projects
            </h1>
            <p className="">
              Unlock Your Business Potential with Comprehensive Digital
              Marketing Solutions! Elevate Your Brand, Increase Visibility, and
              Drive Sales with Our Expert Services Today!
            </p>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className=" bg-[#fff] dark:bg-[#192536] shadow-2xl rounded">
              {/* content */}
              <div className="">
                <div className="w-[200px] h-auto mx-auto pt-8">
                  <Image
                    className="mx-auto"
                    loading="lazy"
                    // placeholder="blur"
                    src={seoImage}
                    width={"100%"}
                    height={"auto"}
                    alt="Picture of the author"
                  />
                </div>
                {/*  */}
                <div className="bg-[#ffffff] dark:bg-[#192536] p-2 border-t-[1px] dark:border-[#111b27]  rounded-b px-1">
                  <h1 className="text-lg py-2">Search Engine Optimization.</h1>
                  <p className="text-sm dark:text-[#d6d6d6]">
                    Search Engine Optimization (SEO) enhances website visibility
                    in search engine results, boosting organic traffic through
                    strategic keyword optimization, content quality improvement,
                    and technical enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
