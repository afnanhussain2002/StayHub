import { useState } from 'react';
import DatePicker from "react-datepicker";


const BookingDatePickerTo = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
  return (
    <DatePicker className='p-3 text-xl text-back-main-color border-2 border-back-main-color font-bold' selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default BookingDatePickerTo;