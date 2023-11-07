import { AiOutlineOrderedList, AiOutlineForm } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { NavLink } from "react-router-dom";

type SidebarDataType = {
  handleClose: () => void;
};

const SidebarData = ({
  handleClose,
}: SidebarDataType) => (
  <ul className="p-0 w-100">
    <li onClick={() => handleClose()}
    >
      <NavLink to={"/"}>
        <BiSolidDashboard />
        <span>Dashboard</span>
      </NavLink>
    </li>
    <li onClick={() => handleClose()}
    >
      <NavLink to={"/my-requisition-list"}>
        <AiOutlineOrderedList />
        <span>My Requisition List</span>
      </NavLink>
    </li>
    {/* <li onClick={() => handleClose()}
    >
      <NavLink to={"/add-requisition"}>
        <AiOutlineForm />
        <span>Add Requisition</span>
      </NavLink>
    </li> */}
    <li onClick={() => handleClose()}
    >
      <NavLink to={"/approval-list"}>
        <FaClipboardList />
        <span>Approval List</span>
      </NavLink>
    </li>
    <li onClick={() => handleClose()}
    >
      <NavLink to={"/candidate-hiring-status"}>
        <HiRefresh />
        <span>Candidate Hiring Status</span>
      </NavLink>
    </li>
    <li onClick={() => handleClose()}
    >
      <NavLink to={"/submit-to-hiring-manager"}>
        <BsFillFileEarmarkCheckFill />
        <span>Submit Hiring Manager</span>
      </NavLink>
    </li>
  </ul>
);

export default SidebarData;
