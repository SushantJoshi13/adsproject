import React from "react";
import InputComponent from "../components/InputComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import { useSubmitForm } from "../hooks/useSubmitForm";

const Login = () => {
  //   const { loading, submit } = useSubmitForm();
  const nav = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  var loginData;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      loginData = {
        email: formik.values.email,
        password: formik.values.password,
      };
    },
  });

  return (
    <section className="flex h-screen items-center p-7 font-poppins">
      <div className="mx-auto h-auto rounded-2xl bg-primary py-8 sm:w-3/4 sm:px-8 md:w-3/4 md:px-10 lg:w-5/12">
        <div className="grid-cols-1 gap-5 md:grid">
          <div className="block justify-center sm:items-center">
            <h1 className="w-100 block text-2xl font-semibold text-black">
              Welcome Back!
            </h1>
            <p className="py-3 text-black">Please login to access</p>
            <form onSubmit={formik.handleSubmit}>
              <InputComponent
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                errorMessage={formik.touched.email ? formik.errors.email : ""}
              />

              <InputComponent
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.password ? formik.errors.password : ""
                }
              />
              <div className="flex items-center justify-end gap-7 px-1 pb-3 pt-2">
                <div>
                  <p
                    className="cursor-pointer items-end text-xs text-black"
                    onClick={() => nav("/forgot-password")}
                  >
                    Forgot Password?
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="btn-primary m-auto flex w-full items-center justify-center  rounded-md py-1 font-semibold text-black hover:shadow-xl"
              >
                {"Login"}
              </button>
              <div className="m-auto flex items-center justify-center gap-1 px-3 pt-3">
                <div className="items-start text-xs text-black">
                  Don't have an account?{" "}
                </div>
                <button
                  onClick={() => nav("/register")}
                  className="items-end text-base font-bold text-red-500 underline"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
