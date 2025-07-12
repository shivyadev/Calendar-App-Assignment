import { addTask } from "@/features/tasks/taskSlice";
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
}

function TaskForm({ date, setIsModalOpen }: FormProps) {
  const dispatch = useDispatch();

  const handleSubmit = (values: Task) => {
    console.log(values);
    dispatch(addTask({ date: date, task: values }));
    setIsModalOpen(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          id: nanoid(),
          title: "",
          description: "",
          category: "",
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
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Date Field */}
            <div className="flex items-center gap-4 w-full">
              <ClockCircleOutlined className="text-lg text-gray-400" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-full">
                    <div className="w-full py-4 pl-2 font-medium tracking-tighter text-lg text-gray-500 hover:bg-gray-200 rounded-lg">
                      {date}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div className="flex items-start gap-4">
              <AlignLeftOutlined className="text-lg text-gray-400 mt-2" />
              <div className="flex-1">
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Add description"
                  className="w-full h-24 p-2 text-md text-left text-zinc-600 align-top resize-none rounded focus:outline-none bg-gray-200 focus:border-b-4 focus:border-blue-700 focus:placeholder-zinc-600"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="flex items-start gap-4">
              <UnorderedListOutlined className="mt-3 text-lg text-gray-400" />
              <div className="w-full">
                <div className="relative w-full">
                  <Field
                    name="category"
                    as="select"
                    className="w-full appearance-none h-11 px-2 bg-gray-200 rounded focus:outline-none focus:border-b-4 focus:border-blue-700 cursor-pointer"
                  >
                    <option value="" disabled hidden className="text-gray-200">
                      Select Category
                    </option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="issue">Issue</option>
                    <option value="info">Information</option>
                  </Field>
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <ArrowDownOutlined />
                  </div>
                </div>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-blue-700 py-3 px-7 text-gray-200 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
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
