import AllContentChart from "./AllContentChart";
import AreaChartPage from "./AreaChart";
import GoalChart from "./GoalChart";
import LineChartPage from "./LineChart";
import UserVisitor from "./UserVisitor";

export default function AllChart() {
  return (
    <section>
      <div className=" mx-auto px-4 py-5">
        <div className="">
          <AreaChartPage />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 ">
          <LineChartPage />
          <UserVisitor />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 ">
          <AllContentChart />
          <GoalChart />
        </div>
      </div>
    </section>
  );
}
