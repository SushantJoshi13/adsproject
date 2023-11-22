import { useEffect, useState } from "react";
import AppointmentCard from "../../cards/AppointmentCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewAppointments = () => {
  const nav = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/appointment",
        });
        if (response.status === 200) {
          console.log(response.data);
          setAppointments(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAppointments();
  }, []);
  return (
    <section>
      <div className="bg-light m-5 border-2 rounded-xl font-poppins p-5 text-dark">
        <div className="flex justify-between items-center">
          <p className="px-2 py-5 font-semibold">
            Hi Manasi! Please Review your appointments
          </p>
          <button
            onClick={() => nav("/addService")}
            className="p-4 bg-black text-white outline-none rounded-md"
          >
            Add service
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {appointments.map((appointment) => {
            return (
              <AppointmentCard
                id={appointment.id}
                name={
                  appointment.user.first_name + " " + appointment.user.last_name
                }
                service={appointment.beauty_service.name}
                date={appointment.appointment_date}
                time={appointment.appointment_time}
                status={appointment.status}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ViewAppointments;
