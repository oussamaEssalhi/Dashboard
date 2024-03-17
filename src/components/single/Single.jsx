import "./single.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Single = ({ data }) => (
  <div className="single">
    <div className="left">
      <div className="top">
        <div className="info">
          {data.img && <img src={data.img} />}
          <h2>{data.title}</h2>
          <button>Update</button>
        </div>
        <div className="details">
          <div className="item">
            <span className="item-title">user Name :</span>
            <span className="item-value"> {data.info.username}</span>
          </div>

          <div className="item">
            <span className="item-title">Full Name: </span>
            <span className="item-value"> {data.info.fullname}</span>
          </div>

          <div className="item">
            <span className="item-title">Email : </span>
            <span className="item-value"> {data.info.email} </span>
          </div>

          <div className="item">
            <span className="item-title">Phone: </span>
            <span className="item-value"> {data.info.phone}</span>
          </div>
          <div className="item">
            <span className="item-title">Status: </span>
            <span className="item-value"> {data.info.status}</span>
          </div>
        </div>
      </div>
      <div className="seperator" />
      <div className="bottom">
        {data.chart && (
          <ResponsiveContainer>
            <LineChart
              width={500}
              height={300}
              data={data.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {data.chart.dataKeys.map((el) => {
                return (
                  <Line
                    key={el.color}
                    type="monotone"
                    dataKey={el.name}
                    stroke={el.color}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
    <div className="right">
      <h1 className="title-activitie">lastest Activities</h1>
      <ul>
        {data.activities.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p>{item.text}</p>
                <time>{item.time}</time>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default Single;
