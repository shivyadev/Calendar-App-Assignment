import * as Yup from "yup";

const allowedCategories = ["success", "warning", "issuse", "info"];

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Title is required"),
  date: Yup.string().required("Date not mentioned"),
  description: Yup.string().max(100, "Max word count exceeded"),
  category: Yup.mixed()
    .oneOf(allowedCategories, "Invalid category")
    .required("Category is required"),
});

export default FormSchema;
