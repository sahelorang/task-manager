import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Login/index.css";
import IButton from "../../components/Button/Button";
import IInput from "../../components/Input/Input";
import GradientBox from "../../components/GradientBox/GradientBox";
import IPasswordInput from "../../components/PasswordInput/PasswordInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// -- Validation schema
const yupSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("this Field is required")
    .min(2, "At least 2 character"),
  lastName: yup
    .string()
    .required("this Field is required")
    .min(2, "At least 2 character"),
  userName: yup.string().required("this Field is required"),
  password: yup
    .string()
    .required("this Field is required")
    .min(8, "At least 8 character"),
});
const SignUp = () => {
  const [isExist, setIsExist] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(yupSchema) });

  const enRegex = /^[A-Za-z]*$/;
  const passRegex = /^[a-zA-Z0-9!@#$%^&*]*$/;
  const usernameRegex = /^[a-zA-Z0-9!@#$%^./|\\&*]*$/;

  const handleChangeFirstName = (e) => {
    const value = e.target.value;
    if (enRegex.test(value)) {
      setFirstName(value);
    }
  };
  const handleChangeLastName = (e) => {
    const value = e.target.value;
    if (enRegex.test(value)) {
      setLastName(value);
    }
  };
  const handleChangeUserName = (e) => {
    const value = e.target.value;
    if (usernameRegex.test(value)) {
      setUserName(value);
    }
  };
  const handleChangePassword = (e) => {
    const value = e.target.value;
    if (passRegex.test(value)) {
      setPassword(value);
    }
  };

  const handleSignUp = (e) => {
    const localUsers = localStorage.userInfo;
    if (localUsers) {
      const ParsedUsers = JSON.parse(localUsers);
      const existUser = ParsedUsers.find(
        (existData) => existData.userName === e.userName
      );
      if (existUser) {
        setIsExist(true);
      }
      if (!existUser) {
        ParsedUsers.push({ firstName, lastName, userName, password });
        localStorage.setItem("userInfo", JSON.stringify(ParsedUsers));
        navigate({ pathname: "/" });
      }
    }
    if (!localUsers) {
      const newArray = new Array();
      newArray.push({ firstName, lastName, userName, password });
      localStorage.setItem("userInfo", JSON.stringify(newArray));
      navigate({ pathname: "/" });
    }
  };

  return (
    <div className=" d-flex align-items-center justify-content-center py-3 px-2 ">
      <div className="col-12 col-sm-8  style-container border-r-40px d-flex align-items-start justify-content-center shadow-bg  ">
        <div className="bg-bl col-lg-6 col-12 d-block-flex">
          <div className=" align-items-center p-4 p-md-5 pt-lg-4 curve-style ">
            <div className="d-flex justify-content-center align-items-center flex-column ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7R9AhB6sStn2vbrWDv4uej6Kl-movOjk4g&usqp=CAU"
                alt="logo"
                className="logo "
              />
              <span className="title-login mb-3 fw-semibold fs-4 text-center ">
                We are The Lotus Team
              </span>
            </div>
            <form
              onSubmit={handleSubmit(handleSignUp)}
              onChange={() => setIsExist(false)}
              autocomplete="off"
            >
              <div className="mb-2 pb-1 mt-3">
                <label for="firstName" className="form-label ps-1 ">
                  FirstName
                </label>

                <IInput
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleChangeFirstName}
                  value={firstName}
                  placeholder={errors?.firstName?.message}
                  formRegister={{ ...register("firstName") }}
                />
              </div>
              <div className="mb-2 pb-1">
                <label for="lastName" className="form-label ps-1">
                  LastName
                </label>
                <IInput
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleChangeLastName}
                  value={lastName}
                  placeholder={errors?.lastName?.message}
                  formRegister={{ ...register("lastName") }}
                />
              </div>
              <div className="mb-2 pb-1">
                <label for="userName" className="form-label ps-1">
                  UserName
                </label>
                <IInput
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  onChange={handleChangeUserName}
                  value={userName}
                  placeholder={errors?.userName?.message}
                  formRegister={{ ...register("userName") }}
                />
              </div>
              <div className="pb-3">
                <label for="password" className="form-label ps-1">
                  Password
                </label>
                <IPasswordInput
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={handleChangePassword}
                  value={password}
                  placeholder={errors?.password?.message}
                  formRegister={{ ...register("password") }}
                />
              </div>

              <div className="d-grid">
                <IButton
                  type="submit"
                  isExist={isExist}
                  text={"Sign Up"}
                  className="btn btn-primary mt-4 mb-2 button-signIn "
                />
                {isExist && (
                  <span className="text-danger text-center mb-2 ">
                    this Username is Exist
                  </span>
                )}

                <span className="ps-1 mt-3">
                  don't have an account ?
                  <NavLink to="/Login" className="text-decoration-none">
                    {` Login`}
                  </NavLink>
                </span>
              </div>
            </form>
          </div>
        </div>
        <GradientBox />
      </div>
    </div>
  );
};

export default SignUp;
