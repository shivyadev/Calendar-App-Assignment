import { addTask, updateTask } from "@/features/tasks/taskSlice";
import type { Task } from "@/types";
import {
  AlignLeftOutlined,
  ArrowDownOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import FormSchema from "./TaskSchema";

interface FormProps {
  date: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task?: Task;
  mode?: "edit" | "add";
}

function TaskForm({ date, setIsModalOpen, task, mode }: FormProps) {
  const dispatch = useDispatch();

  const handleSubmit = (values: Task) => {
    if (mode === "edit" && task) {
      dispatch(updateTask(values));
    } else {
      dispatch(addTask({ date: date, task: values }));
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          id: task?.id || nanoid(),
          title: task?.title || "",
          date: task?.date || date,
          description: task?.description || "",
          category: task?.category || "",
        }}
        enableReinitialize
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="p-6 space-y-6">
            <div>
              <Field
                name="title"
                placeholder="Add title"
                className="w-full h-10 pb-2 text-2xl border-b-[1px] border-gray-500 focus:border-b-4 focus:border-blue-700 focus:outline-none focus:ring-0 focus:placeholder-zinc-600"
                style={{ boxShadow: "none" }}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div className="flex items-center w-full gap-4">
              <ClockCircleOutlined className="text-lg text-gray-400" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-full">
                    <div className="w-full py-4 pl-2 text-lg font-medium tracking-tighter text-gray-500 rounded-lg hover:bg-gray-200">
                      {date}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <AlignLeftOutlined className="mt-2 text-lg text-gray-400" />
              <div className="flex-1">
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Add description"
                  className="w-full h-24 p-2 font-medium text-left align-top bg-gray-200 rounded resize-none text-md text-zinc-600 focus:outline-none focus:border-b-4 focus:border-blue-700 focus:placeholder-zinc-600"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <UnorderedListOutlined className="mt-3 text-lg text-gray-400" />
              <div className="w-full">
                <div className="relative w-full">
                  <Field
                    name="category"
                    as="select"
                    className="w-full px-2 bg-gray-200 rounded appearance-none cursor-pointer h-11 focus:outline-none focus:border-b-4 focus:border-blue-700"
                  >
                    <option value="" disabled hidden className="text-gray-200">
                      Select Category
                    </option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="issue">Issue</option>
                    <option value="info">Information</option>
                  </Field>
                  <div className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-2 top-1/2">
                    <ArrowDownOutlined />
                  </div>
                </div>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="py-3 font-semibold text-gray-200 transition-all duration-300 bg-blue-700 rounded-full cursor-pointer px-7 hover:bg-blue-600 hover:text-white"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TaskForm;
