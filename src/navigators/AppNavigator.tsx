import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
 
import Header from "../component/Header/header";
import { useSelector } from "react-redux";
import { sidebarOpen, stateSelector } from "../redux/state/stateSlice";
import Sidebar from "../component/Sidebar/sidebar";
import useCheckMobileScreen from "../utils/useCheckMobileScreen";
import { useAppDispatch } from "../redux/store"; 
import Home from "../screen/App/Home";

const AppNavigator: React.FC = (): JSX.Element => {
  const isMobile = useCheckMobileScreen();
  const dispatch = useAppDispatch();
  const isShow = useSelector(stateSelector).sidebarState;

  useEffect(() => {
    if (isMobile) {
      dispatch(sidebarOpen({ sidebarState: false }));
    }
  }, [isMobile]);

  return (
    <>
      <div> 
        <section className={!isShow ? "cls-home-close" : "home-section"}>
          <div className="sticky-top">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
             
          </Routes>
        </section>
      </div>
    </>
  );
};

export default AppNavigator;
