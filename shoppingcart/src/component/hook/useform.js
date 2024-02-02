import { useState } from "react";

const UseForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErros] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErros(() => validate(values));
    console.log(validate(values));
  };
  return { handleChange, values, handleSubmit, errors };
};

export default UseForm;
