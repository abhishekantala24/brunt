import { useEffect, useState } from "react";
import Logo from "../../assets/image/header-logo.png";
import SidebarData from "./sidebar-data";
import "../../assets/css/component/sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar: React.FC = (): JSX.Element => { 
  return (
    <div className="sidebar-section">
      <div className="sidebar-logo d-flex justify-content-center">
        <Link to="/"><img src={Logo} alt="logo" className="img-fluid" width={180} height={50} /></Link>

      </div>
      <div className="navbar">
        <SidebarData
          handleClose={() => null}
        />
      </div>
    </div>
  );
};

export default Sidebar;
