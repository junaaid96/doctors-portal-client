import React from "react";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Testimonial from "../Testimonial/Testimonial";
import Services from "../Services/Services";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6 p-8 mt-10">
                <Info />
            </div>
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-md">Services We Provide</p>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-3 p-8 mt-10">
                <Services />
            </div>
            <MakeAppointment />
            <Testimonial />
        </>
    );
};

export default Home;
