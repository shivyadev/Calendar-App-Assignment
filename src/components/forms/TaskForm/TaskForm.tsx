import {
  AlignLeftOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FormSchema from "./TaskSchema";

interface FormProps {
  date: string | undefined;
}

interface InputValues {
  title: string;
  date: string | undefined;
  description: string;
  category: string;
}

const handleSubmit = (values: InputValues) => {
  console.log(values);
};

function TaskForm({ date }: FormProps) {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          date: date,
          description: "",
          category: "",
        }}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="p-6 space-y-6">
            {/* Title Field */}
            <div>
              <Field
                name="title"
                placeholder="Add title and time"
                className="w-full h-10 text-lg border-b-[1px] border-gray-500 focus:border-b-2 focus:border-blue-700 focus:outline-none focus:ring-0"
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
                    <div className="w-full py-5 pl-2 font-medium text-md text-gray-500 hover:bg-gray-200 rounded-lg">
                      {date}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div className="flex items-start gap-4">
              <AlignLeftOutlined className="w-5 h-5 text-gray-400 mt-3" />
              <div className="flex-1">
                <Field
                  name="description"
                  placeholder="Add description"
                  className="w-full "
                  style={{ boxShadow: "none" }}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-4">
              <UnorderedListOutlined className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <Field name="category" as="select">
                  <option value="My Tasks">My Tasks</option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Important">Important</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TaskForm;
