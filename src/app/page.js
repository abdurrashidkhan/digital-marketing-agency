import Banner from "@/Components/Banner/Banner";
import OurClient from "@/Components/OurClient/OurClient";
import OurTeam from "@/Components/OurTeam/OurTeam";
import Subscribe from "@/Components/Subscribe/Subscribe";
import Team from "@/Components/Team/Team";
import WorkingProcess from "../Components/workingProcess/workingProcess";
import About from "./about/page";
import Projects from "./projects/page";
import Services from "./services/page";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Team></Team>
      <WorkingProcess></WorkingProcess>
      <Services></Services>
      <Projects></Projects>
      <OurTeam />
      <OurClient />
      <Subscribe/>
    </>
  );
}
