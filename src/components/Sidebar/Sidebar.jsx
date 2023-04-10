import React from "react";
import { AiOutlineMenu, AiFillPlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="width-leftSide  border-end  ">
      <div className=" vh-100 vstack gap-3 d-flex justify-content-start align-items-center  pt-3 ">
        <AiOutlineMenu className="fs-4 icon-color" />
        <img
          alt="icon"
          className="rounded-circle "
          width="40px"
          height="40px"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwsHBgoHBxIQCAcHChYHCAcHCg8QDQgKIBIiGSAcHxYkHTQsGyYxJxoVJT0kJi8wOi46HyszOzU4Qyg+LjQBCgoKDQ0NFQ8QFSsbFRkrKysrKzctNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIASoAqQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQUEAwL/xAAtEAEAAgIBAgIHCQAAAAAAAAAAAgMBEQQSQTJREzFhocHh8AUUISIkUmJxgf/EABYBAQEBAAAAAAAAAAAAAAAAAAABBP/EABgRAQEBAQEAAAAAAAAAAAAAAAARAVES/9oADAMBAAIRAxEAPwDfAbWsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAURQBFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnxjPmXXSlOdNNFmaK6uPLp6peec637xN2ND4jO1y53S4m810Q1LP2ljo9JdD9uI61vzzr/Hrx8yp5cuLKcro5qxdCV2uuP461vGMbQ9OwBVAAAAAAAAAAAAAAAAHDfGfEvly6sZtptx+qph48fyxjv7cd3cBuVy3c2qvjwvjn0sbvy0RqxuV8vLGPrRwqJwlPkcjX3rka641+GqHaOM9/77vuvh018iXJhHEb5+Kfy9WN+z193ukSdAFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFAEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFAAAEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBQQFEUARQBAFEAUQBRAFEUAEBRAFAAAAAAAAAAAAAAAAAAAAAAEAUQBRAFEAUQBRAFEAUQBRAFEAUQB//Z"
        />

        <box className="module-border2 rounded-circle ">
          <img
            alt="icon"
            className="rounded-circle module2"
            width="40px"
            height="40px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEK9noliFzE3ccTPz8NHhclzRUxpKNBuskw&usqp=CAU"
          />
        </box>
        <AiFillPlusCircle className="fs-4 icon-color" />
        <div className="border-setting mb-5">
          <FiSettings className="icon-setting ms-1 fs-5 m-1" />
        </div>
      </div>
    </div>
  );
};
