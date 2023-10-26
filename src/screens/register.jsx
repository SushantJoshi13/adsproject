import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
// import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
// import { useSubmitForm } from "../hooks/useSubmitForm";
import { useNavigate } from "react-router";
// import logo from "../assets/Logos/NewLogo.png";
import { RegisterValidation } from "../schemas/Validator";

const Register = () => {
  //   const { loading, submit } = useSubmitForm();
  const nav = useNavigate();

  const Register = async (values) => {
    const formData = new FormData();
    formData.append("user_name", values.first_name + " " + values.last_name);
    formData.append("email", values.email);
    formData.append("user_role_id", values.isFemale ? 1 : 2);
    formData.append("password", values.password);
    formData.append("confirm_password", values.confirm_password);
    formData.append("contact_no", values.contact_no);

    //     const response = await submit("POST", "auth/individual", formData, {
    //       "Content-Type": "multipart/form-data",
    //     });

    //     if (response?.data.statusCode === 200) {
    //       //   toast.success(response?.data?.message, toastConfig);
    //       nav("/login");
    //     } else {
    //       //   toast.error(response?.data?.message, toastConfig);
    //     }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      contact_no: "",
      address: "",
    },
    validationSchema: RegisterValidation,
    validateOnChange: false,
    onSubmit: (data) => Register(data),
  });
  return (
    <section className="flex h-full min-h-screen items-center bg-primary p-2 font-poppins font-medium text-black">
      <div className="xs:my-0 col-span-2 mx-auto my-2 rounded-2xl bg-primary px-5 pt-3 md:w-1/2 w-full">
        <div className="container mx-auto grid grid-cols-1 items-center">
          {/* <img
            src={logo}
            alt="Breeder's Association Logo"
            className="mx-auto  flex h-20 rounded-lg md:h-44"
          /> */}

          <div className="grid-cols-1 gap-5 md:grid">
            <div className="block justify-center sm:items-center">
              <h1 className="w-100 block text-2xl font-semibold text-black">
                Welcome!
              </h1>
              <p className="pt-3 text-black">Please Register</p>
              <form onSubmit={formik.handleSubmit}>
                <div className="my-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <InputComponent
                      id="first_name"
                      name="first_name"
                      placeholder="First Name"
                      type="text"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.first_name
                          ? formik.errors.first_name
                          : ""
                      }
                    />
                    <InputComponent
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                      type="text"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.last_name ? formik.errors.last_name : ""
                      }
                    />
                    <InputComponent
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.email ? formik.errors.email : ""
                      }
                    />
                    <InputComponent
                      id="contact_no"
                      name="contact_no"
                      placeholder="Contact Number"
                      type="number"
                      value={formik.values.cont_no}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.contact_no
                          ? formik.errors.contact_no
                          : ""
                      }
                    />
                    <InputComponent
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.password ? formik.errors.password : ""
                      }
                    />
                    <InputComponent
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      type="password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.confirm_password
                          ? formik.errors.confirm_password
                          : ""
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary m-auto mt-4 flex w-full items-center justify-center rounded-md py-1 text-black"
                  >
                    {"Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-1 md:h-min">
            <div className="text-sm text-slate-300 md:text-base">
              Already a user?{" "}
            </div>
            <button
              className="cursor-pointer items-end text-base font-bold text-red-500 underline"
              onClick={() => nav("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
