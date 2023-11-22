import InputComponent from "../components/InputComponent";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppointmentPage = () => {
  const nav = useNavigate();
  const [beautyServices, setBeautyServices] = useState([]);
  const validationSchema = yup.object({
    date: yup.date("Select your date").required("Email is required"),
    time: yup.number("Select your time").required("Time is required"),
    service: yup.string("Select service").required("Service is required"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      service: "",
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      bookAppointment();
    },
  });
  var token;
  useEffect(() => {
    token = localStorage.getItem("token");
    const getBeautyServices = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/beauty-service",
        });
        console.log(response.data);
        if (response.status === 200) {
          setBeautyServices(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBeautyServices();
  }, []);

  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/appointment",
        data: {
          appointment_date: formik.values.date,
          appointment_time: `${formik.values.time}:00:00`,
          beauty_service_id: formik.values.service,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      if (response.status === 200) {
        alert("Appointment booked successfully");
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex h-full min-h-screen  p-2 font-poppins font-medium text-dark bg-light">
      <div className="xs:my-0 mx-auto rounded-2xl px-5 pt-3 md:w-3/4 w-full">
        <div className="container mx-auto grid grid-cols-1 items-center">
          <div className="grid-cols-1 gap-5 md:grid bg-lightest rounded-xl">
            <div className="block justify-center sm:items-center p-5 rounded-xl">
              <p className="pt-3 text-dark font-bold">
                Please fill your details
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="my-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-5 rounded-xl">
                    <InputComponent
                      id="date"
                      name="date"
                      placeholder="Appointment Date"
                      type="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                    />
                    <div className="flex flex-col">
                      <label className="mt-4 text-sm font-semibold text-dark">
                        {"Select the Time"}
                      </label>
                      <select
                        className="my-2 h-12 w-full rounded-lg border-2 bg-transparent px-3 py-3 text-dark shadow-md outline-2 hover:shadow-xl hover:outline-none md:h-14"
                        name="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                      >
                        <option value="">{"Select a time slot"}</option>
                        <option value={10}>{"10AM - 11AM"}</option>
                        <option value={11}>{"11AM - 12Noon"}</option>
                        <option value={12}>{"12Noon - 1PM"}</option>
                        <option value={3}>{"3PM - 4PM"}</option>
                        <option value={4}>{"4PM - 5PM"}</option>
                        <option value={5}>{"5PM - 6PM"}</option>
                        <option value={6}>{"6PM - 7PM"}</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="mt-4 text-sm font-semibold text-dark">
                        {"Select the Service"}
                      </label>
                      {beautyServices.length > 0 ? (
                        <select
                          className="my-2 h-12 w-full rounded-lg border-2 bg-transparent px-3 py-3 text-dark shadow-md outline-2 hover:shadow-xl hover:outline-none md:h-14"
                          name="service"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.service}
                        >
                          <option value="">{"Select a service"}</option>
                          {beautyServices.map((service) => (
                            <option value={service.id} className="text-black">
                              {service.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <select
                          className="my-2 h-12 w-full rounded-lg border-2 bg-transparent px-3 py-3 text-dark shadow-md outline-2 hover:shadow-xl hover:outline-none md:h-14"
                          name="service"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.service}
                        >
                          <option value="">{"Select a service"}</option>
                        </select>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary m-auto mt-4 flex w-full items-center justify-center rounded-md py-1 text-dark"
                    onClick={bookAppointment}
                  >
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
