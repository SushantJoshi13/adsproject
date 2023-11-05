import React from "react";
// import About from "./About";
// import ContactSection from "./ContactSection";
import { useNavigate } from "react-router";
import CategoryCard from "../cards/CategoryCard";
// import homeImg from "../assets/Images/homeImage.jpg";

const Home = () => {
  const nav = useNavigate();
  return (
    <section className="relative ">
      <div
        className="relative w-full h-full bg-no-repeat p-6 text-center md:bg-cover md:p-12"
        style={{ backgroundImage: `url(${""})` }}
      >
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-fixed backdrop-brightness-[40%]"></div> */}
      </div>
      <div className="">
        <div className="flex items-center  ">
          <div className="absolute top-0 mx-20 flex flex-col gap-4 sm:top-5 md:top-28">
            <div>
              <h1
                className="text-center text-4xl font-bold text-white sm:text-left md:text-7xl "
                style={{
                  fontFamily: "cursive",
                }}
              >
                Your pet, <br /> our priority
              </h1>
            </div>
            <div className="flex justify-center sm:block">
              <button className="rounded-lg bg-main-yellow px-5 py-3 text-white transition-all duration-300 hover:bg-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <section className="mx-5 md:mx-20">
          <div className="flex flex-col gap-11 md:flex-row">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
              <div className="card group transform rounded-lg rounded-bl-lg bg-white p-7 shadow-lg duration-300 hover:bg-main-yellow hover:text-white">
                <h1 className="pb-4 text-lg font-medium">One Stop Beauty</h1>
                <p className="pb-5">
                  Experience a Beauty Retreat. Everything you need from hair to
                  skin to fashion, by Indy's best of the best-all at your MDG
                  Salon.
                </p>
                <button className="text-lg font-medium text-main-yellow group-hover:text-white">
                  Read More
                </button>
              </div>
              <div className="card group transform rounded-lg bg-white p-7 shadow-lg duration-300 hover:bg-main-yellow hover:text-white">
                <h1 className="pb-4 text-lg font-medium">Branded Products</h1>
                <p className="pb-5">
                  Achieve salon style at home. High quality products. By high
                  quality companies such as Barva.
                </p>
                <button className="text-lg font-medium text-main-yellow group-hover:text-white">
                  Read More
                </button>
              </div>
              <div className="card group transform rounded-lg rounded-br-lg bg-white p-7 shadow-lg duration-300 hover:bg-main-yellow hover:text-white">
                <h1 className="pb-4 text-lg font-medium">
                  Premium Hair Styles
                </h1>
                <p className="pb-5">
                  Finally be happy with your hair. Unruly locks. Lifeless
                  lengths. Platinum blonde. No challenge-for the best hair
                  stylists in India.
                </p>
                <button
                  onClick={() => nav("/education")}
                  className="text-lg font-medium text-main-yellow group-hover:text-white"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="my-8">{/* <About /> */}</section>
        {/* CATRGORY BANNER  */}
        <section className="mx-5 md:mx-20">
          <div className="my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            <CategoryCard
              image={""}
              text={"Hair Style"}
              //   nav={"/add-animal"}
            />
            <CategoryCard
              image={""}
              text={"Facial Treatment"}
              //   nav={"/transfer-owner"}
            />
            <CategoryCard
              image={""}
              text={"Makeup Appointment"}
              //   nav={"/change-name"}
            />
            {/* <CategoryCard
              image={TransferOwnerImg}
              text={"Export Pedigree"}
              nav={"/"}
            /> */}
          </div>
        </section>

        {/* CONTACT US  */}
        {/* <ContactSection /> */}
        {/* <section className="">
          <Testimonials />
        </section> */}
        {/* <NewFooter /> */}
      </div>
      <div className="flex">
        <button className="w-1/2 mx-auto" onClick={() => nav("/appointment")}>{"Book your Appointment"}</button>
      </div>
    </section>
  );
};

export default Home;
