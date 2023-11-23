import { useFormik } from "formik";
import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import * as yup from "yup";
import InputComponent from "../components/InputComponent";

const Contact = () => {
  const validationSchema = yup.object({
    first_name: yup
      .string("Enter your first name")
      .required("First name is required"),
    last_name: yup
      .string("Enter your last name")
      .required("Last name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    subject: yup.string("Enter your subject").required("Subject is required"),
    message: yup.string("Enter your message").required("Message is required"),
  });
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      const contactFormData = {
        first_name: formik.values.first_name,
        last_name: formik.values.last_name,
        email: formik.values.email,
        subject: formik.values.subject,
        message: formik.values.message,
      };
      //   const result = await postApi(
      //     "auth/test-email-service",
      //     contactFormData,
      //     false
      //   );
      action.resetForm();
      setLoading(false);
    },
  });
  return (
    <div>
      <div
        className="text-center"
      >
        <div className="">
          <div className="">
            <div className="text-dark">
              <p className="mt-10 py-5 text-5xl font-semibold">Contact Us</p>
              <p className="text-center text-dark">Get in Touch!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 items-center px-5 pb-5 pt-5 md:px-20">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/pdceZxEWS6ULieubA?g_st=iw"
          className="h-full"
        >
          <div className="group h-full cursor-pointer rounded border-b-8 border-slate-700 bg-dark-blue p-5 hover:border-[#1C1E2A] hover:bg-main-yellow hover:duration-700">
            {/* <img src={Map} className="h-12" alt="alternate" /> */}
            <HiLocationMarker className="text-5xl text-main-yellow group-hover:text-dark-blue" />
            <p className="py-4 text-xl font-semibold text-dark">
              Our Address
            </p>
            <p className="py-2 text-sm text-dark">
              54/4, LIG Colony Rd, LIG Colony, Pradhikaran, Nigdi,
              Pimpri-Chinchwad, Maharashtra 411044
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/pdceZxEWS6ULieubA?g_st=iw"
              className="pb-2 pt-2 text-sm font-bold text-main-yellow group-hover:text-dark-blue"
            >
              Get Direction
            </a>
            <hr className="w-1/3 border border-main-yellow group-hover:border-[#1C1E2A]" />
          </div>
        </a>

        <a className="h-full" href="mailto:genuinebreederassociation@gmail.com">
          <div className="group h-full cursor-pointer rounded border-b-8 border-slate-700 bg-dark-blue p-5 hover:border-[#1C1E2A] hover:bg-main-yellow hover:duration-700">
            {/* <img src={Mail} className="h-12" alt="alternate" /> */}
            <HiMail className="text-5xl text-main-yellow group-hover:text-dark-blue" />
            <p className="py-4 text-lg font-semibold text-dark">
              Email Address
            </p>
            <p className="py-2 text-sm text-dark ">mansi.hk14@gmail.com</p>

            <a
              href="mailto:genuinebreederassociation@gmail.com"
              className="pb-2 pt-2 text-sm font-bold text-main-yellow group-hover:text-dark-blue"
            >
              Contact Us
            </a>
            <hr className="w-1/3 border border-main-yellow group-hover:border-[#1C1E2A]" />
          </div>
        </a>

        <a className="h-full" href="https://wa.me/+918956643978">
          <div className="group h-full cursor-pointer rounded border-b-8 border-slate-700 bg-dark-blue p-5 hover:border-[#1C1E2A] hover:bg-main-yellow hover:duration-700">
            {/* <img src={Call} className="h-12" alt="alternate" /> */}
            <BsTelephoneFill className="text-5xl text-main-yellow group-hover:text-dark-blue" />
            <p className="py-4 text-xl font-semibold text-dark">
              Call / WhatsApp
            </p>
            <p className="py-2 text-sm text-dark"> +91 87887 16897</p>
            <a
              href="https://wa.me/+91 87887 16897"
              className="pb-2 pt-2 text-sm font-bold text-main-yellow group-hover:text-dark-blue"
            >
              Connect
            </a>
            <hr className="w-1/3 border border-main-yellow group-hover:border-[#1C1E2A]" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-2 px-5 py-5 md:px-20">
        <div>
          <p className="flex items-center text-main-yellow">Get In Touch</p>
          <p className="py-5 text-2xl font-bold md:text-4xl">
            Get In Touch With Us & Leave a Message
          </p>
        </div>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
            <div className="my-2">
              <InputComponent
                name="first_name"
                type="text"
                placeholder="First Name "
                value={formik.values.first_name}
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.first_name ? formik.errors.first_name : ""
                }
              />
            </div>
            <div className="my-2">
              <InputComponent
                name="last_name"
                type="text"
                placeholder="Last Name "
                value={formik.values.last_name}
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.last_name ? formik.errors.last_name : ""
                }
              />
            </div>
            <div className="my-2">
              <InputComponent
                name="email"
                type="email"
                placeholder="Email Id "
                value={formik.values.email}
                onChange={formik.handleChange}
                errorMessage={formik.touched.email ? formik.errors.email : ""}
              />
            </div>
            <div className="my-2">
              <InputComponent
                name="subject"
                type="text"
                placeholder="Subject "
                value={formik.values.subject}
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.subject ? formik.errors.subject : ""
                }
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-semibold text-sm">
                Your Message
                <span className="items-center text-xs text-red-600"> *</span>
              </label>
              <br />
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="h-20 w-full rounded border-b-4 border-slate-700"
              ></textarea>
              <small className="pl-2 text-xs text-red-500">
                {formik.touched.message ? formik.errors.message : ""}
              </small>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full my-4 rounded-lg bg-light p-2 text-dark"
            >
              {loading ? <span className="loader"></span> : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
