import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "../../assets/css/component/header.scss";
import useCheckMobileScreen from "../../utils/useCheckMobileScreen";
import MobileSidebar from "../Sidebar/mobile-sidebar";
import { Dropdown } from "react-bootstrap";
import {
  AiOutlineCloudDownload,
  AiOutlineHistory,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { useAppDispatch } from "../../redux/store";
import {
  sidebarOpen,
  stateSelector,
} from "../../redux/state/stateSlice";
import { useSelector } from "react-redux";
import { logoutAction } from "../../redux/auth/middleware";
import { authSelector } from '../../redux/auth/authSlice';

const Header: React.FC = (): JSX.Element => {
  const isMobile = useCheckMobileScreen()
  const dispatch = useAppDispatch();
  const isShow = useSelector(stateSelector).sidebarState;
  const userProfile = useSelector(authSelector).userDetails

  return (
    <>
      <header>
        <div className="d-flex align-items-center header-inn justify-content-between">
          <div
            className="menubar pointer"
            onClick={() => dispatch(sidebarOpen({ sidebarState: !isShow }))}
          >
            <GiHamburgerMenu className="text-dark" />
          </div>
          <div className="profile">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" title={`${userProfile?.firstName} ${userProfile?.lastName}`}>
                <div className="profile-box">
                  {/* <img src={profile} alt="banner" className="img-fluid rounded-circle"  /> */}
                  <span>{userProfile?.firstName?.charAt(0)}{userProfile?.lastName?.charAt(0)}</span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>
                  <AiOutlineUser /><span>&nbsp;{userProfile?.firstName}&nbsp;{userProfile?.lastName}</span>
                </Dropdown.Header>
                {/* <Dropdown.Item>
                  <AiOutlineMail />
                  &nbsp;New Email
                </Dropdown.Item>
                <Dropdown.Item>
                  <AiOutlineHistory />
                  &nbsp;Email History
                </Dropdown.Item>
                <Dropdown.Item>
                  <AiOutlineCloudDownload />
                  &nbsp;Download Parser
                </Dropdown.Item>
                <Dropdown.Item>
                  <AiOutlineUser />
                  &nbsp;Account Set
                </Dropdown.Item> */}
                <Dropdown.Item
                  onClick={() => dispatch(logoutAction({Email : userProfile?.email}))}
                >
                  <AiOutlineLogout />
                  &nbsp; Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
      {isMobile && <MobileSidebar />}
    </>
  );
};

export default Header;
