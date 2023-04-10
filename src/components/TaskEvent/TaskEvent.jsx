import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
import { RiListCheck2 } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";

const date = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];
const TaskEvent = () => {
  return (
    <div>
      <div className="mt-4 mb-3 ms-0 " style={{ marginLeft: "35px" }}>
        <div className="d-flex  justify-content-between">
          <p className="project-drive fw-bold fs-4">Project drive</p>
          <div>
            <BsChevronLeft className="mt-2 gray-color" />
            <BsChevronRight className="mt-2 ms-3 gray-color" />
          </div>
        </div>
        <div className="card-style p-2">
          <img
            src="data:image/jpeg;base64,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"
            className="img-project"
            width="195 "
            height="90"
            alt="..."
          />
          <div className="card-body mt-1">
            <div className="d-flex align-items-center">
              <HiOutlinePhotograph className="icon-color me-1" />
              <p className="card-title fw-semibold ">Input fileds master</p>
            </div>
            <p className="card-text edit-text mt-1 fw-semibold">Edited today</p>
          </div>
        </div>
      </div>
      <div className="container-calender-btn d-flex align-items-center p-1">
        <button className="btn me-1 active Calendar-btn py-2 px-3 d-flex align-items-center justify-content-center ">
          <AiTwotoneCalendar className="icon-calendar-btn fs-5 me-1" />
          <span>Calendar</span>
        </button>
        <button className="btn  Calendar-btn d-flex align-items-center justify-content-center ">
          <RiListCheck2 className="icon-calendar-btn fs-6 me-2 mt-1" />
          <span>Invoices</span>
        </button>
      </div>
      <div className=" border-bottom d-flex align-items-center justify-content-between my-2 pb-2">
        <select
          className="form-select fw-bolder"
          aria-label="Default select example"
        >
          <option selected>Wed, July 6</option>
          <option value="1">July 7</option>
          <option value="2">July 8</option>
          <option value="3">July 9</option>
        </select>
        <div className="d-flex align-items-center me-3">
          <BsChevronLeft className=" gray-color" />
          <BsChevronRight className="me-4 ms-2 gray-color" />
          <span className=" gray-color">Today</span>
        </div>
      </div>
      <ul className="list-group ">
        {date.map((item, key) => {
          return (
            <li className="list-time mt-2 " key={key}>
              <span className="time-calendar d-inline-flex justify-content-end mx-3  my-0 fw-semibold">
                {item}
              </span>
              <span className="line-time mt-2">
                _______________________________________
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskEvent;
