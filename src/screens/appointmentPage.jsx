import InputComponent from "../components/InputComponent";
import { useFormik } from "formik";

const AppointmentPage = () => {
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
  });
  return (
    <section className="flex h-full min-h-screen items-center bg-primary p-2 font-poppins font-medium text-black">
      <div className="xs:my-0 col-span-2 mx-auto my-2 rounded-2xl bg-primary px-5 pt-3 md:w-3/4 w-full">
        <div className="container mx-auto grid grid-cols-1 items-center">
          {/* <img
            src={logo}
            alt="Breeder's Association Logo"
            className="mx-auto  flex h-20 rounded-lg md:h-44"
          /> */}

          <div className="grid-cols-1 gap-5 md:grid">
            <div className="block justify-center sm:items-center">
              <p className="pt-3 text-black">Please fill your details</p>
              <form onSubmit={formik.handleSubmit}>
                <div className="my-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <InputComponent
                      id="appointment_date"
                      name="appointment_date"
                      placeholder="Appointment Date"
                      type="date"
                    />
                    <div className="flex flex-col">
                      <label className="mt-4 text-sm font-medium text-black">
                        {"Select the Time"}
                      </label>
                      <select className="my-2 h-12 w-full rounded-lg border-2 bg-transparent px-3 py-3 text-black shadow-md outline-2 hover:shadow-xl hover:outline-none md:h-14">
                        <option>{"Select a time slot"}</option>
                        <option>{"10AM - 11AM"}</option>
                        <option>{"11AM - 12Noon"}</option>
                        <option>{"12Noon - 1PM"}</option>
                        <option>{"3PM - 4PM"}</option>
                        <option>{"4PM - 5PM"}</option>
                        <option>{"5PM - 6PM"}</option>
                        <option>{"6PM - 7PM"}</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="mt-4 text-sm font-medium text-black">
                        {"Select the Service"}
                      </label>
                      <select className="my-2 h-12 w-full rounded-lg border-2 bg-transparent px-3 py-3 text-black shadow-md outline-2 hover:shadow-xl hover:outline-none md:h-14">
                        <option>{"Select any service"}</option>
                        <option>{"Haircut"}</option>
                        <option>{"Threading"}</option>
                        <option>{"Waxing"}</option>
                        <option>{"Hairstyle"}</option>
                        <option>{"Occasion Makeup"}</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary m-auto mt-4 flex w-full items-center justify-center rounded-md py-1 text-black"
                  >
                    {"Request Appointment"}
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
