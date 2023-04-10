import React, { useEffect, useState } from "react";
import "./Projects.css";
import Pagination from "../../components/pagination/Pagination";
import NavProjects from "../../components/tabComponent/TabComponent";
import ToDo from "../../components/StatusTask/ToDo";
import InProgress from "../../components/StatusTask/InProgress";
import Done from "../../components/StatusTask/Done";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsGrid1X2, BsPlusCircleDotted } from "react-icons/bs";
import { RiFile4Line } from "react-icons/ri";
import { TbListSearch } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import useAuth from "src/hooks/useAuth";
import TaskEvent from "src/components/TaskEvent/TaskEvent";

const Projects = () => {
  const { user } = useAuth();
  const [UserTasks, setUserTasks] = useState();

  useEffect(() => {
    const allTasks = localStorage.Tasks;
    if (allTasks) {
      const parsedTasks = JSON.parse(allTasks);
      if (parsedTasks[user]) {
        setUserTasks(parsedTasks[user]);
      }
    }
  }, []);
  return (
    <div className="ms-4 col-11 ">
      <Pagination className="col-9" />
      <div className="d-flex justify-content-between">
        <div className="col-9">
          <div className="col-9">
            <h1 className="style-title fw-bold fs-1">
              Adventure 1290 Dashboard
            </h1>
            <p className="style-p fw-semibold">Updated 1 day ago</p>
          </div>
          <NavProjects className="col-9 " />

          <div className="d-flex  justify-content-between  ">
            <div className="d-flex  align-items-end">
              <div>
                <p className="style-p-2 fw-semibold mb-1 ">Contributors</p>
                <div className="border-end pe-3 avatar-container d-flex justify-content-center align-items-center ">
                  <img
                    alt="icon"
                    className="rounded-circle  avatar-container-item"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFR-suyQw8rD71xT_gW9cOlAoUYczFFDhMg&usqp=CAU"
                  />
                  <img
                    alt="icon"
                    className="rounded-circle avatar-container-item "
                    src="data:image/jpeg;base64,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"
                  />
                  <BsPlusCircleDotted className=" add-icon " />
                </div>
              </div>
              <button className="btn file-btn d-flex align-items-center justify-content-center ms-3">
                <VscFileSubmodule className="icon-in-btn " />
                <span>9 files</span>
              </button>
              <div className="position-relative">
                <button className="btn file-btn d-flex align-items-center justify-content-center ms-3 ">
                  <RiFile4Line className="icon-in-btn " />
                  <span>2 invoices</span>
                </button>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-2 bg-orang-badge"
                  style={{ marginTop: "5px" }}
                >
                  New
                </span>
              </div>
            </div>
            <div className="d-flex align-items-end">
              <div className=" border-end">
                <button className="btn me-4 file-btn  d-flex align-items-center justify-content-center ">
                  <TbListSearch className="icon-in-btn " /> <span>filter</span>
                </button>
              </div>
              <div className="ms-4  container-list-icon d-flex justify-content-between align-items-center">
                <BsGrid1X2 className="list-icon p-2 fs-6 me-1 active btn" />
                <MdChecklist className="list-icon p-2 fs-6 btn" />
              </div>
            </div>
          </div>
          <div className=" mt-3 d-flex justify-content-between align-items-start  ">
            {/* -----------TO DO---------------*/}

            <ToDo allTasks={UserTasks} setUserTasks={setUserTasks}></ToDo>
            <InProgress
              allTasks={UserTasks}
              setUserTasks={setUserTasks}
            ></InProgress>
            <Done allTasks={UserTasks} setUserTasks={setUserTasks}></Done>

            {/* --------------------------*/}
          </div>
        </div>
        <TaskEvent />
      </div>
    </div>
  );
};

export default Projects;
