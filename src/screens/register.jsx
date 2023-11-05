import InputComponent from "../components/InputComponent";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { RegisterValidation } from "../schemas/Validator";
import axios from "axios";

const Register = () => {
  const nav = useNavigate();

  const register = async () => {
    try {
      const values = formik.values;
      console.log(values);
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        contact_number: values.contact_number,
        password: values.password,
      };

      const response = await axios({
        method: "post",
        url: "http://localhost:3000/user/register",
        data: data,
      });

      if (response.status === 200) {
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      contact_number: "",
    },
    validationSchema: RegisterValidation,
    validateOnChange: false,
    onSubmit: async () => {
      register();
    },
  });
  return (
    <section className="flex h-full min-h-screen items-center bg-primary p-2 font-poppins font-medium text-black">
      <div className="xs:my-0 col-span-2 mx-auto my-2 rounded-2xl bg-primary px-5 pt-3 md:w-1/2 w-full">
        <div className="container mx-auto grid grid-cols-1 items-center">
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
                      id="contact_number"
                      name="contact_number"
                      placeholder="Contact Number"
                      type="number"
                      value={formik.values.contact_number}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.touched.contact_number
                          ? formik.errors.contact_number
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
                    // onClick={register}
                  >
                    Register
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
