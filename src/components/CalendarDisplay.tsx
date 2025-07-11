import { Calendar } from "antd";
import locale from "antd/es/date-picker/locale/en_US";

function CalendarDisplay() {
  const customLocale = {
    ...locale,
    lang: {
      ...locale.lang,
      shortWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };

  return (
    <div className="">
      <Calendar locale={customLocale} className="" />
    </div>
  );
}

export default CalendarDisplay;
