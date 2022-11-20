import React from "react";
import cravity from "../../Assets/images/cavity.png";
import fluoride from "../../Assets/images/fluoride.png";
import whitening from "../../Assets/images/whitening.png";

const Services = () => {
    const images = [cravity, fluoride, whitening];

    return (
        <>
            {images.map((image, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={image} alt=""></img>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Services;
