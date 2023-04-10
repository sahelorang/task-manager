import React, { useEffect, useState } from "react";
import Task from "../Task/Task";
import { HiPlus } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import "./card.css";
import useAuth from "src/hooks/useAuth";
import { v4 as uuidv4 } from "uuid";
import CardTask from "../AddTask/AddTask";

const InProgress = ({ allTasks, setUserTasks: setAllTask }) => {
  const [title, setTitle] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [progressTask, setProgressTask] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (allTasks) {
      const progress = allTasks.filter((task) => task.status === "InProgress");
      setProgressTask(progress);
    }
  }, [allTasks]);

  const showInputForm = (e) => {
    e.preventDefault();
    setShowInput(!showInput);
  };

  const addCard = (e) => {
    if (user) {
      const allTask = localStorage.Tasks;
      if (allTask) {
        const TASKS = JSON.parse(allTask);
        if (TASKS[user]) {
          const userTasks = TASKS[user];
          const isExistTask = userTasks.find(
            (task) => task.title === title && task.status === "InProgress"
          );
          if (isExistTask) {
            alert("Tekrai task");
            setTitle("");
            return;
          }
          if (title !== "") {
            userTasks.push({
              id: uuidv4(),
              title: title,
              description: "",
              status: "InProgress",
            });
            TASKS[user] = userTasks;
            localStorage.setItem("Tasks", JSON.stringify(TASKS));
            setTitle("");
            setShowInput(!showInput);
            setAllTask(userTasks);
          }
        } else {
          const TasksList = new Array();
          TasksList.push({
            id: uuidv4(),
            title: title,
            description: "",
            status: "InProgress",
          });
          TASKS[user] = TasksList;
          localStorage.setItem("Tasks", JSON.stringify(TASKS));
          setTitle("");
          setShowInput(!showInput);
          setAllTask(TasksList);
        }
      } else {
        const newObject = {};
        const TasksList = new Array();
        TasksList.push({
          id: uuidv4(),
          title: title,
          description: "",
          status: "InProgress",
        });
        newObject[user] = TasksList;
        localStorage.setItem("Tasks", JSON.stringify(newObject));
        setTitle("");
        setShowInput(!showInput);
        setAllTask(TasksList);
      }
    }
  };

  return (
    <div>
      <div className="card height-100 border-0 shadow">
        <div className="card-header border-0 pt-3 d-flex justify-content-between align-items-center">
          <div>
            <span className="status fs-6 fw-bold me-2">InProgress</span>
            <span className="number fs-6 fw-bolder">
              {progressTask ? progressTask?.length : "0"}
            </span>
          </div>
          <FiMoreHorizontal className="more-icon fs-5" />
        </div>
        <div className="card-body card-body-bg ">
          {progressTask &&
            progressTask.map((task) => {
              return (
                <>
                  <Task
                    taskName={task.title}
                    category={"Design System"}
                    rate={"2/8"}
                    date={"07.07.2022"}
                    task={task}
                    setAllTask={setAllTask}
                  ></Task>
                </>
              );
            })}
          {showInput && (
            <CardTask addCard={addCard} setTitle={setTitle} title={title} />
          )}
          <div className="d-grid">
            <button
              className="btn  btn-add d-flex align-items-center justify-content-center "
              onClick={showInputForm}
            >
              <HiPlus /> <span>Add card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgress;
