import React from "react";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="flex flex-wrap justify-center w-full gap-3 p-12">
                <Services />
                <Services />
                <Services />
            </div>
        </>
    );
};

export default Home;
