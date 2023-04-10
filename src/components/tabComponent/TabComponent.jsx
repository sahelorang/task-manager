import React from "react";
import "./TabComponent.css";

const TabComponent = () => {
  const data = ["Dashboard", "Tasks", "Communication", "files"];
  return (
    <nav className="navbar navbar-expand-lg  ">
      <ul className="navbar-nav mb-4 d-inline-flex justify-content-between ">
        {data.map((itm, key) => {
          return (
            <li
              className={`${
                key === 0 && "active"
              }  style-nav fs-6   me-4 fw-bolder  px-2 `}
              key={`tabComponent${key}`}
            >
              <a className="nav-link " aria-current="page" href="#">
                {itm}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabComponent;
