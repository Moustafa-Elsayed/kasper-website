import * as yup from "yup";

export const basicShema = yup.object({
  firstName: yup.string().min(3).required("plaese enter your first name"),
  lastName: yup.string().required("please etner the last name"),
  email: yup.string().email("enter valid email").required("please enter your email"),
  phone: yup.number().min(11,"phone number must be 11 digit").positive().integer().required("please enter your phone number"),
  message: yup
    .string()
    .required("please etner Your message")
    .required("please enter your mesage"),
});

// const passwordRules=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
export const logSchema=yup.object({
  username:yup.string().min(5).required("please enter your user name"),
  email: yup.string().email("enter valid email").required("please enter your email"),
  password:yup.string()
  .min(5)
  // .matches(passwordRules,{message:"please create strong password(min 5character & 1 upper case letter & 1 lower case letter and 1 numeric digit)"})
  .required("required"),
  cpassword:yup.string()
  .oneOf([yup.ref("password"),null],"password must match ").required("required")

})