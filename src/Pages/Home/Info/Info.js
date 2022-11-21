import React from "react";
import clock from "../../../Assets/icons/clock.svg";
import marker from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";

const Info = () => {
    const infoData = [
        {
            id: 1,
            title: "Opening Hours",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        },
        {
            id: 2,
            title: "Visit Our Location",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            icon: marker,
            bgClass: "bg-accent text-white",
        },
        {
            id: 3,
            title: "Contact Us Now",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        },
    ];

    return (
        <>
            {infoData.map((info) => (
                <div
                    key={info.id}
                    className={`card lg:card-side ${info.bgClass} shadow-xl items-center`}
                >
                    <figure className="p-5">
                        <img src={info.icon} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{info.title}</h2>
                        <p>{info.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Info;
