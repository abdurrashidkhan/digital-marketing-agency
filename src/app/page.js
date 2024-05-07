import Banner from "@/Components/Banner/Banner";
import WorkingProcess from "../Components/workingProcess/workingProcess";
import About from "./about/page";
import Services from "./services/page";


export default function Home() {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <WorkingProcess ></WorkingProcess>
    <Services></Services>
    </>
  );
}