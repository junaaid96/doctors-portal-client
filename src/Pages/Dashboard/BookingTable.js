import React from "react";

const BookingTable = ({ booking }) => {
    const { treatment, patient, slot, email, phone } = booking;

    return (
        <tbody>
            <tr>
                <th>{treatment}</th>
                <th>{patient}</th>
                <td>{slot}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
        </tbody>
    );
};

export default BookingTable;
