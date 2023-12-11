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

  return (
    <>
    </>
  );
};

export default Header;
