import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[0-9])/,
      "Password must contain one lowercase and one uppercase letter, one number and one special character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});
