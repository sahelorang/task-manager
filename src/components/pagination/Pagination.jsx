import React from "react";
import "./Pagination.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiMoreVertical } from "react-icons/fi";

const Pagination = () => {
  return (
    <div className="d-flex justify-content-between align-items-center my-3  ">
      <div>
        <nav aria-label="Page ">
          <ul className=" breadcrumb ">
            <li className="page-item  ">
              <a className="pag-link text-decoration-none fw-bolder" href="#">
                Dashboard
              </a>
            </li>
            <li className="page-item ">
              <a className="pag-link text-decoration-none fw-bolder" href="#">
                Projects
              </a>
            </li>
            <li className="page-item active">
              <a className="pag-link text-decoration-none bolder" href="#">
                Adventure 1290 Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="d-flex justify-content-between gap-3 ">
        <div className="border ">
          <AiOutlineQuestionCircle className="icon-border fs-4" />
        </div>
        <div className="border ">
          <HiOutlineHeart className="icon-border fs-4" />
        </div>
        <div className="border ">
          <FiMoreVertical className="icon-border fs-4" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
