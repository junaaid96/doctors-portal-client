import React from "react";

const BookingTableRow = ({ booking, users }) => {
    const { treatment, patient, slot, email, phone } = booking;

    return (
        <tbody>
            <tr>
                <th>{treatment}</th>
                <th>
                    <div className="flex items-center gap-3">
                        <img
                            src={users[0].photoURL}
                            alt=""
                            className="w-10 rounded-3xl"
                        />
                        {patient}
                    </div>
                </th>
                <td>{slot}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
        </tbody>
    );
};

export default BookingTableRow;
