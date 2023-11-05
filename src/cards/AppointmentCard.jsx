const AppointmentCard = ({ name, service, date, time }) => {
  return (
    <div className="px-5 font-poppins border-2 rounded-xl w-full">
      <p className="py-1">{"Name: " + name}</p>
      <p className="py-1">{"Service: " + service}</p>
      <p className="py-1">{"Date: " + date}</p>
      <p className="py-1">{"Time: " + time}</p>
      <div className="grid grid-cols-2 my-2">
        <button className="p-2 border-2 rounded-lg bg-green-500 text-white font-semibold">
          {"Accept"}
        </button>
        <button className="p-2 border-2 rounded-lg bg-red-500 text-white font-semibold">
          {"Reject"}
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
