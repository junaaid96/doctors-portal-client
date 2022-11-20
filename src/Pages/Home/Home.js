import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="flex flex-wrap justify-center w-full gap-3 p-12">
                <div className="card w-96 bg-primary shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-accent text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-primary shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-3 p-12">
                <Services />
                <Services />
                <Services />
            </div>
        </>
    );
};

export default Home;
