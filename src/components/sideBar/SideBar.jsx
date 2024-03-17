import "./sideBar.css";
import { menu } from "../../DataItemsSideBar";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="items">
        {menu.map((el) => {
          return (
            <div className="item" key={el.id}>
              <p className="title">{el.title}</p>
              {el.listItems.map((el) => {
                return (
              
                    <Link to={el.url} className="link" key={el.id} >
                          
                      <div className="icon"> {el.icon}</div>
                      <div className="item-title">{el.title}</div>
                    </Link>
                  
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
