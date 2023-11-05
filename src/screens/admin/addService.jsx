import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputComponent";
// import { useSubmitForm } from "../hooks/useSubmitForm";

const AddService = () => {
  //   const { loading, submit } = useSubmitForm();
  const nav = useNavigate();
  const validationSchema = yup.object({
    service_name: yup
      .string("Enter Service name")
      .required("Service Name is required"),
      service_cost: yup
      .number("Enter Service Cost")
      .required("Cost is required"),
  });

  var serivceData;
  const formik = useFormik({
    initialValues: {
      service_name: "",
      service_cost: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        serivceData = {
        service_name: formik.values.service_name,
        service_cost: formik.values.service_cost,
      };
    },
  });

  return (
    <section className="flex h-screen items-center p-7 font-poppins">
      <div className="mx-auto h-auto rounded-2xl bg-primary py-8 sm:w-3/4 sm:px-8 md:w-3/4 md:px-10 lg:w-5/12">
        <div className="grid-cols-1 gap-5 md:grid">
          <div className="block justify-center sm:items-center">
            <p className="py-3 text-black text-xl">Enter New Service Details</p>
            <form onSubmit={formik.handleSubmit}>
              <InputComponent
                id="service_name"
                name="service_name"
                type="text"
                label="Service Name"
                placeholder="New Service Name"
                value={formik.values.service_name}
                onChange={formik.handleChange}
                errorMessage={formik.touched.service_name ? formik.errors.service_name : ""}
              />

              <InputComponent
                id="service_cost"
                name="service_cost"
                type="number"
                label="Service Cost"
                placeholder="Cost"
                value={formik.values.service_cost}
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.service_cost ? formik.errors.service_cost : ""
                }
              />
              <button
                type="submit"
                className="btn-primary mt-2 flex w-full items-center justify-center  rounded-md py-1 font-semibold text-black hover:shadow-xl"
              >
                {"Add New Service"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
