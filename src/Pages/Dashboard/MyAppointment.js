import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import BookingTableRow from "./BookingTableRow";

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const { data: users = [], isLoading: isLoadingUsers } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/users?email=${user?.email}`
            );

            const data = await res.json();
            return data;
        },
    });

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/bookings?email=${user?.email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );

            const data = await res.json();
            console.log(data);
            return data;
        },
    });

    if (isLoading || isLoadingUsers) {
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
                    <BookingTableRow
                        key={booking._id}
                        booking={booking}
                        users={users}
                    ></BookingTableRow>
                ))}
            </table>
        </div>
    );
};

export default MyAppointment;
