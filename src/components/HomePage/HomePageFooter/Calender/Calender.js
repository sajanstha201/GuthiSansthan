// src/components/HomePage/HomePageFooter/Calender/Calender.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Calendar = () => {
  const [calendarData, setCalendarData] = useState(null);
  const [error, setError] = useState(null);
  const [year, setYear] = useState(2081);
  const [month, setMonth] = useState(4);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const nepaliMonth = ['', 'Baisakh', 'Jestha', 'Asar', 'Sawan', 'Bhadau', 'Asoj', 'Kartik', 'Mangsir', 'Push', 'Magh', 'Fagun', 'Chaitra'];

  const handlePrev = async () => {
    if (month === 1) {
      setMonth(12);
      setYear(prevYear => {
        const newYear = prevYear - 1;
        fetchCalendarData(newYear, 12);
        return newYear;
      });
    } else {
      const newMonth = month - 1;
      setMonth(newMonth);
      fetchCalendarData(year, newMonth);
    }
  };

  const handleNext = async () => {
    if (month === 12) {
      setMonth(1);
      setYear(prevYear => {
        const newYear = prevYear + 1;
        fetchCalendarData(newYear, 1);
        return newYear;
      });
    } else {
      const newMonth = month + 1;
      setMonth(newMonth);
      fetchCalendarData(year, newMonth);
    }
  };

  useEffect(() => {
    fetchCalendarData(year, month);
  }, [year, month]);

  const fetchCalendarData = async (fetchYear, fetchMonth) => {
    try {
      const response = await axios.get(`http://guthi.pythonanywhere.com/api/calendar?year=${fetchYear}&month=${fetchMonth}`);
      setCalendarData(response.data);
      console.log(response.data);
    } catch (error) {
      setError('Error fetching calendar data');
    }
  };

  const handleDateClick = (day) => {
    const event = calendarData.festivals.find(festival => {
      const startDate = new Date(festival.start_date).getDate();
      const endDate = new Date(festival.end_date).getDate();
      return day >= startDate && day <= endDate;
    });

    if (event) {
      setSelectedEvent(event);
    } else {
      setSelectedEvent(null);
    }
  };

  const renderCalendar = () => {
    if (!calendarData) return null;

    const daysInMonth = calendarData.max_days;
    const startDay = calendarData.start;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startDayIndex = daysOfWeek.indexOf(startDay);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const eventDates = {};
    calendarData.festivals.forEach(event => {
      const startDate = new Date(event.start_date).getDate();
      const endDate = new Date(event.end_date).getDate();
      for (let date = startDate; date <= endDate; date++) {
        eventDates[date] = true;
      }
    });

    const calendarGrid = [];
    for (let i = 0; i < startDayIndex; i++) {
      calendarGrid.push(<div key={`empty-${i}`} className="text-center py-2 border"></div>);
    }

    daysArray.forEach((day) => {
      calendarGrid.push(
        <div
          key={day}
          className={`text-center py-2 border cursor-pointer ${eventDates[day] ? 'bg-yellow-300' : ''}`}
          onClick={() => handleDateClick(day)}
        >
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
    <div className="bg-zinc-400/15  backdrop-blur-sm flex items-start md:items-center py-1 justify-center h-screen ">
      <div className="w-full flex flex-wrap items-start  justify-center  mx-auto p-4 overflow-auto">
        <div className="bg-cyan-400/70 shadow-lg rounded-lg overflow-hidden w-[90%] text-white font-bold flex md:w-1/2 h-96 flex-col ">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-700/50">
            <div>
              <FontAwesomeIcon size="2x" icon={faArrowLeft} onClick={handlePrev} />
            </div>
            <div className="flex gap-3">
              <h2 className="text-white">{year}</h2>
              <h2 className="text-white">{nepaliMonth[month]}</h2>
            </div>
            <div>
              <FontAwesomeIcon size="2x" icon={faArrowRight} onClick={handleNext} />
            </div>
          </div>
          {error && <div className="text-red-500 text-center py-2">{error}</div>}
          {renderCalendar()}
          </div>
          {selectedEvent && (
            <div className="p-2  bg-gray-800 text-white rounded-lg  mt-4 w-full aspect-video md:w-96">
              <h3 className="text-lg font-bold">{selectedEvent.name}</h3>
              <img src={`http://guthi.pythonanywhere.com${selectedEvent.image}`} alt={selectedEvent.name} className="w-full h-auto mt-2" />
              <p className="mt-2">{selectedEvent.description}</p>
            </div>
          )}
        
      </div>
    </div>
  );
};
