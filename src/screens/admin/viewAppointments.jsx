import { useState } from "react";
import AppointmentCard from "../../cards/AppointmentCard";
const ViewAppointments = () => {
  const [ViewAppointments, setAppointments] = useState([]);
  return (
    <section>
      <div className="m-5 border-2 rounded-xl font-poppins p-5">
        <p className="px-2 py-5 font-semibold">Hi Manasi! Please Review your appointments</p>
        <div className="grid grid-cols-4 gap-4">
          <AppointmentCard
            name="Pallavi Malshikare"
            service="Threading"
            date="08/11/2023"
            time="3PM to 4PM"
          />
          <AppointmentCard
            name="Manasi Kulkarni"
            service="Haircut"
            date="09/11/2023"
            time="2PM to 3PM"
          />
        </div>
      </div>
    </section>
  );
};

export default ViewAppointments;
