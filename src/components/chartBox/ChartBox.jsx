import "./chartBox.css";
import { Link } from "react-router-dom";
// import { chartBoxUser } from "../../DataItemsSideBar";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";
const ChartBox = ({data}) => {
  return (
    <div className="chart-box">
      <div className="left-box">
        <div className="icon" style={{ color: data.color }}>
          {data.icon}
          <div className="title">{data.title}</div>
        </div>
        <h2>{data.number}</h2>
        <Link to="/" style={{ color: data.color }}>
          View All
        </Link>
      </div>
      <div className="right-box">
        <div className="chart">
          <ResponsiveContainer width="100%" height={100}>
            <LineChart  data={data.chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                position={{ x: 20, y: 60 }}
                labelStyle={{ display: "none" }}
              />
              <Line
                type="monotone"
                dataKey={data.dataKey}
                stroke={data.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="percentage">
          <h3
            style={{ color: data.percentage < 0 ? "red" : "#26df26" }}
          >
            {data.percentage} %
          </h3>
          <p>This month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
