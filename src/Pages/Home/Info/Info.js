import React from "react";
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";

const Info = () => {
    const infoData = [
        {
            id: 1,
            title: "Opening Hours",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            icon: <FaClock size={60} />,
        },
        {
            id: 2,
            title: "Visit Our Location",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            icon: <FaLocationArrow size={60} />,
        },
        {
            id: 3,
            title: "Contact Us Now",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            icon: <FaPhone size={60} />,
        },
    ];

    return (
        <>
            {infoData.map((info) => (
                <div
                    key={info.id}
                    className="w-96 bg-primary shadow-xl flex items-center align-middle rounded-xl gap-1"
                >
                    <div className="ml-5">{info.icon}</div>
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
