import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import BookingTable from "./BookingTable";

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/bookings?email=${user?.email}`
            );

            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Treatment</th>
                        <th>Patient</th>
                        <th>Slots</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                {bookings.map((booking) => (
                    <BookingTable
                        key={booking._id}
                        booking={booking}
                    ></BookingTable>
                ))}
            </table>
        </div>
    );
};

export default MyAppointment;
