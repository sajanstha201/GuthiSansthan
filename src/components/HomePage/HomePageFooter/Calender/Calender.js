import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Calender=()=>{
    const [calendarData, setCalendarData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCalendarData();
  }, []);

  const fetchCalendarData = async () => {
    try {
      const response = await axios.get('http://192.168.1.65:8000/api/calendar?year=2082&month=4');
      setCalendarData(response.data);
      console.log(response.data)
    } catch (error) {
      setError('Error fetching calendar data');
    }
  };

  const renderCalendar = () => {
    if (!calendarData) return null;

    const daysInMonth = calendarData.max_days;
    const startDay = calendarData.start;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startDayIndex = daysOfWeek.indexOf(startDay);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const calendarGrid = [];
    for (let i = 0; i < startDayIndex; i++) {
      calendarGrid.push(<div key={`empty-${i}`} className="text-center py-2 border"></div>);
    }

    daysArray.forEach((day) => {
      calendarGrid.push(
        <div key={day} className="text-center py-2 border cursor-pointer">
          {day}
        </div>
      );
    });

    return (
      <div className="grid grid-cols-7 gap-2 p-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-semibold">
            {day.slice(0, 3)}
          </div>
        ))}
        {calendarGrid}
      </div>
    );
  };

  return (
    <div className="bg-gray-100/5 backdrop-blur-sm flex items-center justify-center h-screen">
      <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
        <div className="bg-neutral-400/70 shadow-lg rounded-lg overflow-hidden text-white font-bold">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-700/50">
            <h2 className="text-white">Nepali Calendar</h2>
          </div>
          {error && <div className="text-red-500 text-center py-2">{error}</div>}
          {renderCalendar()}
        </div>
      </div>
    </div>
    )
};