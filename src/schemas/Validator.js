import * as Yup from "yup";
const phoneRegExp = /^[0-9]{10}$/;

export const RegisterValidation = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of atleast 8 characters length")
    .required("Password is required"),
  confirm_password: Yup.string("Confirm your password")
    .min(8, "Password should be of atleast 8 characters length")
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  contact_number: Yup.string("Enter your Contact Number")
    .min(10, "10 Digit number please")
    .max(10, "10 Digit number please")
    .required("Contact Number is required"),
  first_name: Yup.string("Enter your First Name").required(
    "First name is required"
  ),
  last_name: Yup.string("Enter your Last Name").required(
    "Last name is required"
  ),
});
