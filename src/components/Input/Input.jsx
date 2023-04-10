import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  type = "text",
  id = "",
  name = "",
  className = "",
  formRegister,
  value = "" || {},
  onChange = () => {},
  ...props
}) => {
  return (
    <input
      {...formRegister}
      {...props}
      type={type}
      onChange={(e) => onChange(e)}
      className={`${className}`}
      id={id}
      lang="en"
      name={name}
      value={value}
      autocomplete="off"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string || PropTypes.object,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  id: "",
  name: "",
  className: "",
  value: "" || {},
  onChange: () => {},
};

export default Input;
