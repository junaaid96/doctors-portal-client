import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Services from "./Services";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="flex flex-wrap justify-center w-full gap-3 p-12">
                <Info />
            </div>
            <div className="flex flex-wrap justify-center w-full gap-3 p-12">
                <Services />
            </div>
        </>
    );
};

export default Home;
