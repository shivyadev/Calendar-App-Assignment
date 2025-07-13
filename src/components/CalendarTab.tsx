import type { Task, TaskProp } from "@/types";
import { Calendar, Modal, type CalendarProps } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import CellContents from "./CellContents";
import TaskForm from "./forms/TaskForm/TaskForm";
import TaskModal from "./TaskModal";

function CalendarTab({ task }: TaskProp) {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(
    undefined
  );
  const [currentViewDate, setCurrentViewDate] = useState<Dayjs>(dayjs());
  const [selectedTask, setSelectedTask] = useState<Task>({
    id: "",
    title: "",
    date: dayjs(),
    description: "",
    category: "default",
  });

  const handleSelect = (date: Dayjs) => {
    if (isTaskModalOpen) {
      return;
    }
    if (
      date.month() === currentViewDate.month() &&
      date.year() === currentViewDate.year()
    ) {
      setSelectedDate(date);
      setIsAddModalOpen(true);
    }
  };

  const handlePanelChange = (date: Dayjs) => {
    setCurrentViewDate(date);
    setSelectedDate(undefined);
  };

  const handleAddModalClose = () => {
    setSelectedDate(undefined);
    setIsAddModalOpen(false);
  };

  const handleTaskModalClose = () => {
    setSelectedTask({
      id: "",
      title: "",
      date: dayjs(),
      description: "",
      category: "default",
    });
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
      <CellContents
        taskList={taskList}
        setSelectedTask={setSelectedTask}
        setIsTaskModalOpen={setIsTaskModalOpen}
      />
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
        onPanelChange={handlePanelChange}
      />

      {/* Add new task modal */}
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isAddModalOpen}
        onCancel={handleAddModalClose}
        footer={[]}
      >
        <TaskForm
          date={selectedDate ?? dayjs()}
          setIsModalOpen={setIsAddModalOpen}
          mode="add"
        />
      </Modal>

      {/* View/Edit task modal */}
      <TaskModal
        task={selectedTask}
        isOpen={isTaskModalOpen}
        onClose={handleTaskModalClose}
      />
    </div>
  );
}

export default CalendarTab;
