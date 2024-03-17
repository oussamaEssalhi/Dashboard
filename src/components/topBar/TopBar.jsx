import "./topBar.css";
import { topDealUsers } from "../../DataItemsSideBar";

const TopBar = () => {
  return (
    <div className="top-bar">
      <h1>Top Deals</h1>
      <ul>
        {topDealUsers.map((el) => {
          return (
            <li key={el.id}>
              <div className="lead">
                <img src={el.img} />
                <div className="details-deal">
                  <span>{el.username}</span>
                  <span> {el.email}</span>
                </div>
              </div>
              <div className="price">$ {el.amount}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopBar;
