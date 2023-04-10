import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GradientBox from "../../components/GradientBox/GradientBox";
import IButton from "../../components/Button/Button";
import IInput from "../../components/Input/Input";
import IPasswordInput from "../../components/PasswordInput/PasswordInput";
import useAuth from "../../hooks/useAuth";
import "./index.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Login = () => {
  const { userLogin, user: currentUser } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const usernameRegex = /^[a-zA-Z0-9!@#$%^./|\\&*]*$/;
  const passRegex = /^[a-zA-Z0-9!@#$%^&*]*$/;

  const yupSchema = yup.object().shape({
    userName: yup.string().required("this Field is required"),
    password: yup
      .string()
      .required("this Field is required")
      .min(8, "At least 8 character"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(yupSchema) });

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

  const handleLogin = (e) => {
    if (localStorage.userInfo) {
      const isExistUser = JSON.parse(localStorage.userInfo).find(
        (e) => e.userName === userName
      );

      if (!isExistUser) {
        alert("there is no user Register yet");
        navigate({ pathname: "/SignUp" });
      }

      if (
        isExistUser &&
        isExistUser?.password &&
        isExistUser.password === password
      ) {
        userLogin(userName);
        localStorage.setItem("currentUser", userName);
        navigate({ pathname: "/" });
      }

      if (isExistUser.password !== password) alert("Wrong password");
    } else {
      alert("there is no user Register yet");
      navigate({ pathname: "/SignUp" });
    }
  };
  return (
    <div className=" d-flex align-items-center justify-content-center py-3 px-2  ">
      <div className="col-12 col-sm-8 style-container border-r-40px d-flex align-items-start justify-content-center  shadow-bg  ">
        <div className="bg-bl col-lg-6 col-12 d-block-flex">
          <div className="align-items-center p-4 p-md-5 pt-lg-4 curve-style    ">
            <div className="d-flex justify-content-center mt-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7R9AhB6sStn2vbrWDv4uej6Kl-movOjk4g&usqp=CAU"
                alt="logo"
                className="logo  mt-3 mb-2"
              />
            </div>
            <h5 className="title-login mb-5 fw-semibold fs-4 text-center">
              We are The Lotus Team
            </h5>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-2 pb-3">
                <label for="userName" className="form-label ps-1 mt-3">
                  UserName
                </label>
                <IInput
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={userName}
                  onChange={handleChangeUserName}
                  placeholder={errors?.userName?.message}
                  formRegister={{ ...register("userName") }}
                />
              </div>
              <div className="mb-2 pb-3">
                <label for="password" className="form-label ps-1">
                  Password
                </label>
                <IPasswordInput
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder={errors?.password?.message}
                  formRegister={{ ...register("password") }}
                />
              </div>
              <div className="d-grid  ">
                <IButton
                  type="submit"
                  text="Login"
                  className="btn btn-primary mt-4 mb-3 button-signIn pb-1"
                />
                <span
                  className="mb-4 ps-1 mt-2  mt-3 "
                  style={{ paddingBottom: "41px" }}
                >
                  don't have an account ?
                  <NavLink to="/SignUp" className="text-decoration-none">
                    {` SignUp`}
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

export default Login;
