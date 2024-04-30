import Banner from "@/Components/Banner/Banner";
import WorkingProcess from "../Components/workingProcess/workingProcess";
import Services from "./services/page";


export default function Home() {
  return (
    <>
    <Banner></Banner>
    <WorkingProcess ></WorkingProcess>
    <Services></Services>
    </>
  );
}