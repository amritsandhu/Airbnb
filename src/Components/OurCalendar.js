import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./OurCalendar.css";
import "react-tooltip/dist/react-tooltip.css";

function OurCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (dates) => {
    setDate(dates);
  };

  const calculateNights = () => {
    const start = date[0];
    const end = date[1];
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  };

  const handleClearDates = () => {
    setDate(new Date());
  };

  return (
    <div className="ourCalendar">
      <h1 className="text-center">
        {date.length > 1
          ? `${calculateNights()} Nights in Garden Valley`
          : "Select Check in Date"}
      </h1>
      {date.length > 0 ? (
        <p className="text-centerTwo">
          <span className="bold"></span> {date[0].toDateString()}
          &nbsp;-&nbsp;
          <span className="bold"></span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-centerThree">
          <span className="bold">Today's Date:</span> {date.toDateString()}
        </p>
      )}

      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} selectRange={true} />
      </div>

      <div className="Button">
        <div className="myButton" onClick={handleClearDates}>
          Clear Dates
        </div>
      </div>
    </div>
  );
}
export default OurCalendar;
