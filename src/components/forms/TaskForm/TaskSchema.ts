import { allowedCategories } from "@/utils/constants";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short")
    .max(50, "Maximum word count exceeded")
    .required("Title is required"),
  date: Yup.string().required("Date is required"),
  description: Yup.string().max(100, "Maximum word count exceeded"),
  category: Yup.mixed()
    .oneOf(allowedCategories, "Invalid category")
    .required("Category is required"),
});

export default FormSchema;
