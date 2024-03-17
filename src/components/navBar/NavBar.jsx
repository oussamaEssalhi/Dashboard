import "./navBar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">Logo</div>
      <div className="links">
        <div className="link">
          <SearchOutlinedIcon />
        </div>
        <div className="link">
          <DashboardOutlinedIcon />
        </div>
        <div className="link">
          <AspectRatioOutlinedIcon />
        </div>
        <div className="link notification">
          <NotificationsNoneOutlinedIcon />
          <span>4</span>
        </div>
        <div className="link user">
          <img src="/img/image 17.png" alt="" />
          <span>Tomas</span>
        </div>
        <div className="link">
          <SettingsOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
