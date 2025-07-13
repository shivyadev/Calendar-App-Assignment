import { deleteTask } from "@/features/tasks/taskSlice";
import { type Task } from "@/types";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Popconfirm } from "antd";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TaskForm from "./forms/TaskForm/TaskForm";
import TaskDetailsCard from "./TaskDetailsCard";

interface Props {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

function TaskModal({ task, isOpen, onClose }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsEditing(false);
    onClose();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBackToView = () => {
    setIsEditing(false);
  };

  const handleFormSubmit = () => {
    setIsEditing(false);
    onClose();
  };

  const handleDelete = () => {
    dispatch(deleteTask(task));
    setIsEditing(false);
    onClose();
  };

  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={isOpen}
      onCancel={handleClose}
      footer={[]}
      closeIcon={
        <CloseOutlined className="p-3 mt-4 ml-2 mr-10 text-xl rounded-full hover:bg-gray-200" />
      }
    >
      {isEditing ? (
        <div>
          <div className="flex items-center mt-4 mb-4">
            <button
              onClick={handleBackToView}
              className="flex items-center justify-center p-2 mr-2 transition-all duration-300 rounded-full hover:bg-gray-200 hover:cursor-pointer"
            >
              <ArrowLeftOutlined className="text-lg" />
            </button>
            <h3 className="text-lg font-medium">Edit Task</h3>
          </div>
          <TaskForm
            date={task?.date}
            setIsModalOpen={handleFormSubmit}
            mode="edit"
            task={task}
          />
        </div>
      ) : (
        <div className="w-full px-10">
          <section className="flex justify-end w-full mt-2">
            <Popconfirm
              title="Delete task"
              description="Are you sure you want to delete this task?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
              okButtonProps={{ danger: true }}
            >
              <button className="flex items-center justify-center p-3 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200">
                <DeleteOutlined className="text-xl transition-all duration-300 rounded-full text-gray-50 hover:bg-gray-200" />
              </button>
            </Popconfirm>
            <button
              onClick={handleEditClick}
              className="flex items-center justify-center p-3 mx-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200"
            >
              <FormOutlined className="text-xl transition-all duration-300 rounded-full hover:bg-gray-200" />
            </button>
          </section>

          <TaskDetailsCard task={task} />
        </div>
      )}
    </Modal>
  );
}

export default TaskModal;
