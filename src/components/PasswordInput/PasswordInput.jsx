import React, { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { PropTypes } from "prop-types";
import "../Input/Input.css";

const PasswordInput = ({
  id = "",
  name = "",
  className = "",
  onChange = () => {},
  value = "" || {},
  formRegister,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" input-group">
      <input
        {...props}
        {...formRegister}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        className={`${className}`}
        id={id}
        name={name}
        value={value}
        autocomplete="off"
      />

      {!showPassword ? (
        <span className="input-group-text" onClick={handleShowPassword}>
          <RiEyeCloseLine />
        </span>
      ) : (
        <span className="input-group-text" onClick={handleShowPassword}>
          <ImEye />
        </span>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string || PropTypes.Object,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default PasswordInput;
