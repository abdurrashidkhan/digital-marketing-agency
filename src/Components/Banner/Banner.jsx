import Image from "next/image";
import Link from "next/link";
import BannerPhotos from "/src/images/3.png";
export default function Banner() {
  return (
    <div className="container mx-auto px-2 py-5 w-[100%] h-[100vh]">
      <div className="content_center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 justify-items-center content-center">
          {/* 1st part banner */}
          <div>
            <div className="">
              <Link href={`#`}>What we do ?</Link>
            </div>
            <div>
              <h1>We make strategies design & Development </h1>
              <p>
                proper business solution for your business strategy and
                corporation
              </p>
            </div>
            <div className="">
              <button> Let's get started </button>
            </div>
          </div>
          {/* 2nd part of banner  */}
          <div>
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
  );
}
