import { useEffect, useState } from "react";
import AppointmentCard from "../../cards/AppointmentCard";
import axios from "axios";
const ViewAppointments = () => {
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
      <div className="m-5 border-2 rounded-xl font-poppins p-5">
        <p className="px-2 py-5 font-semibold">
          Hi Manasi! Please Review your appointments
        </p>
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
