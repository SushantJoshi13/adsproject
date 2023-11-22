import axios from "axios";
const AppointmentCard = ({ id, name, service, date, time, status }) => {
  const requestAccepted = async (id) => {
    try {
      const data = {
        status: "Accepted",
      };
      const response = await axios({
        method: "put",
        url: "http://localhost:3000/appointment/" + id,
        data: data,
      });
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestRejected = async (id) => {
    try {
      const data = {
        status: "Rejected",
      };
      const response = await axios({
        method: "put",
        url: "http://localhost:3000/appointment/" + id,
        data: data,
      });
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-5 font-poppins border-2 rounded-xl w-full bg-lightest">
      <p className="py-1">{"Name: " + name}</p>
      <p className="py-1">{"Service: " + service}</p>
      <p className="py-1">{"Date: " + date}</p>
      <p className="py-1">{"Time: " + time}</p>
      {status === "Pending" ? (
        <div className="grid grid-cols-2 my-2">
          <button
            className="p-2 border-2 rounded-lg bg-green-500 text-white font-semibold"
            onClick={() => requestAccepted(id)}
          >
            Accept
          </button>
          <button
            className="p-2 border-2 rounded-lg bg-red-500 text-white font-semibold"
            onClick={() => requestRejected(id)}
          >
            Reject
          </button>
        </div>
      ) : status === "Accepted" ? (
        <div className="flex my-2 text-green-400 justify-center items-center">
          Accpeted
        </div>
      ) : (
        <div className="flex my-2 text-red-400 justify-center items-center">
          Rejected
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
