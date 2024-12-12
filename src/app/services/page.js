import OurServicesBanner from "@/Components/OurServicesBanner/OurServicesBanner";
import ServicesContent from "@/Components/ServicesContent/ServicesContent";
import "./style.css";
export default function Services() {
  return (
    <section className="">
      <OurServicesBanner />
      <div className="container mx-auto  pb-10 w-[100%]    overflow-hidden z-[99] relative">
        <ServicesContent />
        {/*  */}
        {/* <div id="services_blur_color"></div> */}
      </div>
    </section>
  );
}
