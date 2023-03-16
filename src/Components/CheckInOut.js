import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import "./CheckInOut.css";

function CheckInOut({ handleAvailabiltyClick }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="checkInOut">
      <div className="first">
        <DatePicker
          className="numberOne"
          placeholderText="Check-in"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="second">
        <DatePicker
          className="numberSecond"
          placeholderText="Check-Out"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  );
}
export default CheckInOut;
