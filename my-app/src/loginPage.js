import * as yup from "yup";
import React, { useState, useEffect } from "react";
import axios from "axios";

let schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Please use correct password"),
});

export default function LogIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [disabled, setdisabled] = useState(true);

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  const handleChange = (event) => {
    const { name, type, value } = event.target;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: value });
    console.log("changing!");
  };
  const submit = (event) => {
    event.preventDefault();
    const user = {
      email: form.email.trim(),
      password: form.password,
    };
    axios
      .post("#API", user)
      .then((res) => {
        setForm({ user: "", password: "" });
      })
      .catch((err) => {
        debugger;
      });
  };
  useEffect(() => {
    schema.isValidSync(form).then((valid) => setdisabled(!valid));
  }, [form]);

  return (
    <div classname="myForm">
      <form onSubmit={submit}>
        <label>
          Email:
          <input
            value={form.email}
            name="email"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="text"
            onChange={handleChange}
          />
        </label>
        <button disabled={disabled}>Log In</button>
      </form>
    </div>
  );
}
