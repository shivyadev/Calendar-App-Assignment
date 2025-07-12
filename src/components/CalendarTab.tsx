import { Calendar } from "antd";
import locale from "antd/es/date-picker/locale/en_US";

function CalendarTab() {
  const customLocale = {
    ...locale,
    lang: {
      ...locale.lang,
      shortWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };

  return (
    <div className="">
      <Calendar locale={customLocale} />
    </div>
  );
}

export default CalendarTab;
