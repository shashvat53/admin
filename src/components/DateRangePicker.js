// DateRangePicker.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./DateRangePicker.css"; // Import Tailwind CSS styles for customization

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Start Date"
        className="p-[4px_12px] border"
      />

      <span className="p-[4px_6px] bg-slate-400">to</span>

      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="End Date"
        className="p-[4px_12px] border"
      />
    </>
  );
};

export default DateRangePicker;
