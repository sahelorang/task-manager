import { PropTypes } from "prop-types";
import React from "react";

import "./Button.css";

function Button({
  type = "",
  text = "",
  className = "",
  onClick = () => {},
  isExist = false,
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={
        isExist
          ? "btn btn-primary shake mt-4 mb-4 button-signIn pb-1"
          : `${className}`
      }
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
