import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./sourceLeads.css";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const SourceLeads = () => {
  return (
    <div className="souce-leads">
      <h3 className="title">Leads By Source</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                border: "none",
                borderRadius: "5px",
                stroke:"red"
              }}
              
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((index) => (
                <Cell key={index.name} fill={index.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        <ul>
            {data.map((el)=>{
          return(
              <li key={el.name}>
                <div className="option">
                  <div className="cercle" style={{backgroundColor:el.color}}></div>
                  <div className="title">{el.name}</div>
                </div>
                <div className="number">{el.value}</div>
              </li>
          )
        })}
        </ul>
      
      </div>
    </div>
  );
};

export default SourceLeads;
