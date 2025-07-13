import type { RootState } from "@/app/store";
import type { Task } from "@/types";
import { CloseOutlined } from "@ant-design/icons";
import { Calendar, Modal, type CalendarProps } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import CellContents from "./CellContents";
import TaskForm from "./forms/TaskForm/TaskForm";
import TaskCard from "./TaskCard";

function CalendarTab() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const task = useSelector((state: RootState) => state.tasks);

  const handleSelect = (date: Dayjs) => {
    if (isTaskModalOpen) {
      return;
    }
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setSelectedDate(dayjs());
    setIsModalOpen(false);
  };

  const handleTaskCancel = () => {
    setSelectedTask(null);
    setIsTaskModalOpen(false);
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
    return taskList.length !== 0 ? (
      <div>
        <CellContents
          taskList={taskList}
          setSelectedTask={setSelectedTask}
          setIsTaskModalOpen={setIsTaskModalOpen}
        />
        <Modal
          closable={{ "aria-label": "Custom Close Button" }}
          open={isTaskModalOpen}
          onCancel={handleTaskCancel}
          footer={[]}
          closeIcon={
            <CloseOutlined className="p-2 mt-4 ml-2 mr-10 text-xl rounded-full hover:bg-gray-200" />
          }
        >
          <TaskCard task={selectedTask} />
        </Modal>
      </div>
    ) : null;
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
        onCancel={handleCancel}
        footer={[]}
      >
        <TaskForm date={selectedDate} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

export default CalendarTab;
