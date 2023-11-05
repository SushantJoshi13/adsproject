import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputComponent";
import axios from "axios";

const AddService = () => {
  const nav = useNavigate();
  const validationSchema = yup.object({
    name: yup.string("Enter Service name").required("Service Name is required"),
    price: yup.number("Enter Service price").required("Price is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      addService();
    },
  });

  const addService = async () => {
    try {
      const values = formik.values;
      console.log(values);
      const data = {
        name: values.name,
        price: values.price,
      };
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/beauty-service",
        data: data,
      });
      if (response.status === 200) {
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex h-screen items-center p-7 font-poppins">
      <div className="mx-auto h-auto rounded-2xl bg-primary py-8 sm:w-3/4 sm:px-8 md:w-3/4 md:px-10 lg:w-5/12">
        <div className="grid-cols-1 gap-5 md:grid">
          <div className="block justify-center sm:items-center">
            <p className="py-3 text-black text-xl">Enter New Service Details</p>
            <form onSubmit={formik.handleSubmit}>
              <InputComponent
                id="name"
                name="name"
                type="text"
                label="Service Name"
                placeholder="New Service Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                errorMessage={formik.touched.name ? formik.errors.name : ""}
              />

              <InputComponent
                id="price"
                name="price"
                type="number"
                label="Service price"
                placeholder="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                errorMessage={formik.touched.price ? formik.errors.price : ""}
              />
              <button
                type="submit"
                className="btn-primary mt-2 flex w-full items-center justify-center  rounded-md py-1 font-semibold text-black hover:shadow-xl"
              >
                Add New Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
