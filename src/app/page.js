import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import OurClient from "@/Components/OurClient/OurClient";
import OurTeam from "@/Components/OurTeam/OurTeam";
import Pricing from "@/Components/Pricing/Pricing";
import ServicesContent from "@/Components/ServicesContent/ServicesContent";
import Subscribe from "@/Components/Subscribe/Subscribe";
import Team from "@/Components/Team/Team";
import WorkingProcess from "@/Components/WorkingProcess/WorkingProcess";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Team></Team>
      <WorkingProcess></WorkingProcess>
      <ServicesContent></ServicesContent>
      <Pricing></Pricing>
      <OurTeam />
      <OurClient />
      <Subscribe />
    </>
  );
}
