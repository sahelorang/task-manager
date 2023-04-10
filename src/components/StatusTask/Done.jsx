import React, { useEffect } from "react";
import Task from "../Task/Task";
import { HiPlus } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import "./card.css";
import { useState } from "react";
import useAuth from "src/hooks/useAuth";
import CardTask from "../AddTask/AddTask";
import { v4 as uuidv4 } from "uuid";

const Done = ({ allTasks, setUserTasks: setAllTask }) => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  const [doneTask, setDoneTask] = useState();
  const { user } = useAuth();

  useEffect(() => {
    if (allTasks) {
      const done = allTasks.filter((task) => task?.status === "Done");
      setDoneTask(done);
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
            (task) => task.title === title && task.status === "Done"
          );
          if (isExistTask) {
            alert("Tekrai task");
            return;
          }
          if (title !== "") {
            userTasks.push({
              id: uuidv4(),
              title: title,
              description: "",
              status: "Done",
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
            status: "Done",
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
          status: "Done",
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
            <span className="status fs-6 fw-bold me-2">Done</span>
            <span className="number fs-6 fw-bolder ">
              {doneTask ? doneTask?.length : "0"}
            </span>
          </div>
          <FiMoreHorizontal className="more-icon fs-5" />
        </div>
        <div className="card-body card-body-bg ">
          {doneTask &&
            doneTask.map((task) => {
              return (
                <div>
                  <Task
                    taskName={task.title}
                    category={"Design System"}
                    rate={"2/8"}
                    setAllTask={setAllTask}
                    task={task}
                    complete
                  ></Task>
                </div>
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

export default Done;
