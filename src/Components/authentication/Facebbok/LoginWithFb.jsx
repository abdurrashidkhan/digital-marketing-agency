import Image from "next/image";
import fbLogo from "../../../images/logo/facebook.png";

export default function LoginWithFb() {
  return (
    <div>
      <Image
        className="mx-auto w-[30px] h-auto"
        loading="lazy"
        // placeholder="blur"
        src={fbLogo}
        width={"100%"}
        height={"auto"}
        alt="Loading...."
      />
    </div>
  );
}
