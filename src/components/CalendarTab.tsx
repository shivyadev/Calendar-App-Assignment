import { Calendar, Modal } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import TaskForm from "./forms/TaskForm/TaskForm";

function CalendarTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(
    undefined
  );

  const handleSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const customLocale = {
    ...locale,
    lang: {
      ...locale.lang,
      shortWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };

  return (
    <div className="">
      <Calendar locale={customLocale} onSelect={handleSelect} />

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <TaskForm date={selectedDate?.format("MMM DD, YYYY")} />
      </Modal>
    </div>
  );
}

export default CalendarTab;
