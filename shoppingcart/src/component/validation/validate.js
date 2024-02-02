export default function validate(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "username required..!";
  }
  if (!values.email.trim()) {
    errors.email = "email required..!";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password.trim()) {
    errors.password = "password is required";
  } else if (values.length > 6) {
    errors.password = "password need character more";
  }
  if (!values.cpassword.trim()) {
    errors.password = "password is required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "password doesn't match";
  }
  return errors;
}
