import React from "react";
import chair from "../../../Assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
    return (
        
        <div className="hero">
            <div className="bg-chair">
                <img src={chair} alt="" className="w-full h-full"/>

            </div>
            <div className="hero-content flex-col lg:flex-row-reverse relative">
                <img
                    src={chair}
                    className="w-1/2 rounded-lg shadow-2xl"
                    alt=""
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
