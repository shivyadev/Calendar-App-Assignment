import type { RootState } from "@/app/store";
import { Calendar, Modal, type CalendarProps } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import CellContents from "./CellContents";
import TaskForm from "./forms/TaskForm/TaskForm";

function CalendarTab() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const task = useSelector((state: RootState) => state.tasks);

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

  const dateCellRender = (value: Dayjs) => {
    const date = value.format("MMM DD, YYYY");
    const taskList = task[date] || [];
    return taskList.length !== 0 ? <CellContents taskList={taskList} /> : null;
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <div>
      <Calendar
        locale={customLocale}
        onSelect={handleSelect}
        cellRender={cellRender}
      />

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <TaskForm
          date={selectedDate?.format("MMM DD, YYYY")}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </div>
  );
}

export default CalendarTab;
