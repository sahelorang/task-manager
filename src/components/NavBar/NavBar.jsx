import React from "react";
import "./NavBar.css";
import { MdOutlineMail } from "react-icons/md";
import { BsFillGrid1X2Fill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { ImFolderOpen } from "react-icons/im";
import { TbNote } from "react-icons/tb";
import { BiCalendarAlt } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { RiHardDrive2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-nav ">
      <div className="container-fluid">
        <div className="col-8 d-inline-flex justify-content-between">
          <img
            alt="icon"
            className="rounded-circle me-5 "
            style={{ marginLeft: "12px" }}
            width="40px"
            height="40px"
            src="data:image/jpeg;base64,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"
          />
          <ul className="navbar-nav me-auto d-inline-flex justify-content-between ">
            <li className="nav-item nav-active px-2 d-flex align-items-center me-4">
              <BsFillGrid1X2Fill className="green-text " />
              <a to={"/"} className="nav-link green-text fw-semibold">
                Dashboard
              </a>
            </li>
            <li className="nav-item active nav-active px-2 d-flex align-items-center me-4">
              <ImFolderOpen className="green-text " />
              <NavLink to={"/"} className="nav-link green-text fw-semibold">
                Projects
              </NavLink>
            </li>

            <li className="nav-item nav-active px-2 d-flex align-items-center me-4">
              <TbNote className="green-text fs-5" />
              <a
                className="nav-link green-text fw-semibold "
                aria-current="page"
                href="#"
              >
                Invoices
              </a>
            </li>

            <li className="nav-item nav-active px-2 d-flex align-items-center me-4">
              <BiCalendarAlt className="green-text fs-5" />
              <a
                className="nav-link green-text fw-semibold"
                aria-current="page"
                href="#"
              >
                Calendar
              </a>
            </li>

            <li className="nav-item nav-active px-2 d-flex align-items-center me-4">
              <BsCalendarCheck className="green-text" />
              <a
                className="nav-link green-text fw-semibold "
                aria-current="page"
                href="#"
              >
                ToDo
              </a>
            </li>

            <li className="nav-item nav-active px-2 d-flex align-items-center me-4">
              <RiHardDrive2Fill className="green-text" />
              <a
                className="nav-link green-text fw-semibold"
                aria-current="page"
                href="#"
              >
                Drive
              </a>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <div className="d-flex justify-content-between align-items-center">
            <NavLink
              to="/SignUp"
              className="text-decoration-none  test-logOut green-text border-bottom ms-5 "
            >
              {`LogOut`}
            </NavLink>
            <div className=" d-flex justify-content-between align-items-center input-border ">
              <FiSearch className="svg-input ms-2 " />
              <input
                type="text"
                className="green-input rounded-3  "
                placeholder="Search"
                width="100px"
              />
            </div>
            <BsFillGrid3X3GapFill className="green-text fs-5 " />
            <div className=" position-relative ">
              <MdOutlineMail
                className="green-text fs-4 "
                style={{ marginBottom: "2px" }}
              />
              <span className="position-absolute top-0 mt-1 start-100 translate-middle badge rounded-2 bg-orang-badge">
                2
              </span>
            </div>
            <div className="module-border rounded-circle me-1">
              <img
                alt="icon"
                className="rounded-circle module"
                width="50px"
                height="50px"
                src="data:image/jpeg;base64,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"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
