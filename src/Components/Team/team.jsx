import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import teamImage from "../../images/team.png";
import "./style.css";
export default function Team() {
  return (
    <section>
      <div className="container mx-auto  py-0 w-[100%] h-auto relative overflow-hidden z-[99]">
        <div className="main">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
            <div className="">
              <Image
                loading="lazy"
                // placeholder="blur"
                src={teamImage}
                alt="loading"
                width={600}
                height={600}
              />
            </div>
            <div className="">
              <p className="text-[#20b820] font-semibold">Our Team__</p>
              <h1 className="capitalize text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444] hvf-dom-checked ">
                know more about team <br />
                e-Merge Digital marketing agency.
              </h1>
              <p>
                Our team digital marketing products creators in tooh and design
                bring about and bepond the arcinry to every prcject .user
                experience social media marketing .content management system and
                email marketing.{" "}
              </p>
              <div className="pt-5">
                <button className=" bg-[#20b820] text-lg px-4 py-2 rounded shadow-2xl font-sans tracking-[1px] ease-in-out duration-500 hover:px-5">
                  <div className="flex items-center gap-2 ">
                    <span className="text-[#fff]">Know more</span>
                    <span>
                      <FaLongArrowAltRight className="text-[#fff]" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* let circle bluer   */}
          <div className="" id="team_circle_bluer_right"></div>
          {/* right circle bluer   */}
        </div>
      </div>
    </section>
  );
}
