import Banner from "@/Components/Banner/Banner";
import Team from "@/Components/Team/Team";
import WorkingProcess from "../Components/workingProcess/workingProcess";
import About from "./about/page";
import Services from "./services/page";


export default function Home() {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <Team></Team>
    <WorkingProcess ></WorkingProcess>
    <Services></Services>
    </>
  );
}