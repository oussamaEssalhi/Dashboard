import {BoxAnalytics, BoxVisit, ChartBox, SourceLeads, TopBar }from "../../components/index";
import "./home.css";
import { chartBoxUser , chartBoxConversion,chartBoxRevenue, chartBoxProduct  ,barChartBoxVisit, barChartBoxRevenue} from "../../DataItemsSideBar";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1"> <TopBar/></div>
      <div className="box box2"><ChartBox data={chartBoxUser}/></div>
      <div className="box box3"><ChartBox data={chartBoxProduct}/></div>
      <div className="box box4"><SourceLeads/></div>
      <div className="box box5"> <ChartBox data={chartBoxRevenue}/></div>
      <div className="box box6"> <ChartBox data={chartBoxConversion}/></div>
      <div className="box box7"><BoxAnalytics/></div>
      <div className="box box8"> <BoxVisit data={barChartBoxVisit}/></div>
      <div className="box box9"><BoxVisit data={barChartBoxRevenue}/></div>
    </div>
  );
};
export default Home;
