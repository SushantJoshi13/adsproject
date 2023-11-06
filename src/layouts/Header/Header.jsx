import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";

const Header = (props) => {
  const nav = useNavigate();
  const [isNav, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  // check local storage for token and then check for user
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const result = axios({
        method: "get",
        url: "http://localhost:3000/user",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.status === 200) {
        console.log(result);
        setUser(result.data);
      }
    }
  }, []);

  return (
    <div className="relative bg-light text-dark shadow-lg md:h-[20vh]">
      <div className="mx-5 block">
        <header className="sticky top-0 z-50 w-full bg-main-yellow">
          <div className="px- flex flex-col  items-center justify-between py-2 sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex w-full items-center justify-between">
              <div className="h-8 md:h-24 mx-auto">
                {/* <Link to="/" className="text-gray-800">
                  <img
                    alt="logo"
                    src={""}
                    className="h-[10vh] rounded-lg object-center md:h-[15vh] "
                    // style={{ filter: "grayscale(1) invert(1) brightness(0.5)" }}
                  />
                </Link> */}
                <p className="text-2xl md:text-4xl font-poppins font-bold my-2">
                  Manasi Beauty Parlour
                </p>
              </div>
              <div
                className="text-3xl md:hidden"
                onClick={() => setVisible(!isNav)}
              >
                <GiHamburgerMenu />
              </div>
            </div>
            <div className="-bottom-5 hidden w-full rounded-xl p-4 px-5 md:absolute md:flex">
              <div className="hidden mx-auto justify-between space-y-4 sm:items-center sm:space-y-0 md:flex w-3/4">
                <Link to="/about" className="header-buttons">
                  About Us
                </Link>
                <Link to="/services" className="header-buttons">
                  Services
                </Link>

                <Link to="/contact-us" className="header-buttons">
                  Contact Us
                </Link>
                {token == null ? (
                  <>
                    <Link
                      to="/register"
                      className="header-login-register border-2 border-transparent"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="header-login-register border-2 border-transparent"
                    >
                      Login
                    </Link>{" "}
                  </>
                ) : (
                  <>
                    <h1 className="header-login-register border-2 border-transparent ">
                      ${user?.first_name ?? "NA"}
                    </h1>
                    <a
                      className="header-login-register border-2 border-transparent "
                      onClick={() => {
                        localStorage.removeItem("token");
                        nav("/");
                      }}
                    >
                      Logout
                    </a>{" "}
                  </>
                )}
              </div>
            </div>
          </div>
        </header>
        <div
          className={`${
            isNav ? "left-0" : "-left-[100%]"
          } fixed top-0 z-[999] block h-[100vh]  w-full items-end justify-end bg-primary p-[30px] transition-all duration-700 md:hidden`}
        >
          <div
            className="absolute right-[20px] top-[20px] z-[999] cursor-pointer"
            onClick={() => setVisible(!isNav)}
          >
            <RxCross1 className="mr-1 text-white" />
          </div>
          <ul className=" text-secondary" onClick={() => setVisible(!isNav)}>
            {
              <>
                <div
                  className="mb-4 ml-0 flex cursor-pointer flex-row items-center justify-start gap-2"
                  onClick={() => setVisible(!isNav)}
                >
                  <img
                    src={""}
                    alt="icon for user"
                    width={40}
                    className="bg-white rounded"
                  />
                  <h2 className="text-sm font-medium text-white">
                    {/* {user?.user_name ?? "NA"} */}
                  </h2>
                </div>
              </>
            }

            <li className="cursor-pointer pb-4 pl-1" onClick={() => nav("/")}>
              Home
            </li>
            <li
              className="cursor-pointer pb-4 pl-1"
              onClick={() => nav("/services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer pb-4 pl-1"
              onClick={() => nav("/about")}
            >
              About Us
            </li>
            <li
              className="cursor-pointer pb-4 pl-1"
              onClick={() => nav("/contact-us")}
            >
              Contact Us
            </li>
            <li
              className="cursor-pointer pb-4 pl-1"
              // onClick={() => signOut()}
            >
              Logout
            </li>
            <>
              <li
                className="cursor-pointer pb-4 pl-1"
                onClick={() => nav("/register")}
              >
                Register
              </li>
              <li
                className="cursor-pointer pb-4 pl-1"
                onClick={() => nav("/login")}
              >
                Login
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
