import { useEffect, useState } from "react";
import "../../assets/css/component/header.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import talentrckr from "../../assets/image/header-logo.png";
import SidebarData from "./sidebar-data";
import { useSelector } from "react-redux";
import { sidebarOpen, stateSelector } from "../../redux/state/stateSlice";
import { useAppDispatch } from "../../redux/store";
import "../../assets/css/component/sidebar.scss";

const MobileSidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
  const isShow = useSelector(stateSelector).sidebarState;

  useEffect(() => {
    if (currentUrl === "/talentrackr-react") {
      setCurrentUrl("/")
    }
  }, [])

  const handleClose = () => {
    dispatch(sidebarOpen({ sidebarState: false }));
  };

  return (
    <Offcanvas show={isShow} onHide={handleClose} className="sidebar-section-main ">
      <Offcanvas.Header closeButton={true}>
        <Offcanvas.Title>
          <img src={talentrckr} alt="Logo" className="container-fluid" onClick={() => setCurrentUrl("/")} />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="sidebar-section">
        <div className="navbar">
          <SidebarData
            handleClose={handleClose}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileSidebar;
