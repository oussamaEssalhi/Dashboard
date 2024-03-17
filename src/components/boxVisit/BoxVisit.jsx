import "./boxisit.css";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

const BoxVisit = ({data}) => {
  return (
    <div className="box-visit">
      <h3 className="title">{data.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={data.chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a3448",
                border: "none",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
              position={{ y: 90, x: 70 }}
              cursor={{ fill: "none" }}
            />
            <Bar
              dataKey={data.dataKey}
              fill={data.color}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BoxVisit;
