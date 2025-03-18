import Calendar from "react-calendar";
import { useCalendarLogic } from "./hooks/useCalendarLogic.hook";
import "./Styles/CustomCalendar.css";

interface CustomCalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export const CustomCalendar = ({
  selectedDate,
  onDateSelect,
}: CustomCalendarProps) => {
  const { today, lastDayOfMonth, tileDisabled } = useCalendarLogic({
    onDateSelect,
  });

  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-orange-500 flex-1 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold text-white mb-12">Octubre</h2>
        <Calendar
          onChange={onDateSelect}
          value={selectedDate}
          minDate={today}
          maxDate={lastDayOfMonth}
          tileDisabled={tileDisabled}
          navigationLabel={null}
          prev2Label={null}
          next2Label={null}
          prevLabel={null}
          nextLabel={null}
          showNavigation={false}
          showNeighboringMonth={false}
          showWeekNumbers={false}
          formatShortWeekday={() => ""}
          className="mx-auto"
        />
      </div>
    </div>
  );
};
