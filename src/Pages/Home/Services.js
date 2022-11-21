import React from "react";
import cavity from "../../Assets/images/cavity.png";
import fluoride from "../../Assets/images/fluoride.png";
import whitening from "../../Assets/images/whitening.png";

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            id: 2,
            title: "Cavity Filling",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        },
    ];

    return (
        <>
            {servicesData.map((serviceData, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img className="pt-6" src={serviceData.img} alt=""></img>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{serviceData.title}</h2>
                        <p>{serviceData.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Services;
