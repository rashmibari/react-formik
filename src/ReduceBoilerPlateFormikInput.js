import React from "react";
import { useFormik } from "formik";

/*
  onBlur={formik.handleBlur}
  onChange={formik.handleChange}
  value={formik.values.name}

  // Can replace All three method by formik.getFieldProps() and agruments should be field nae

 */
const initialValues = {
  name: "rashmi",
  email: "",
  age: ""
};

const onSubmit = values => {
  /*onSubmit method automatically received the values from the form and 
  values is in object type
  */
  console.log("values", values);
};

const validate = values => {
  /*
    validate method also automatically received the values from 
    Three mandatory rules of the validate methods are
    1) values is in the object forms
    2) validate method must return the object it should be object type only .
    3) Object values should be string

   */
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.age) {
    errors.age = "Required";
  }

  return errors;
};

const errors = {
  color: "red"
};

const ReduceBoilerPlateFormikInput = () => {
  let formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <lable for="name">Name</lable>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={errors}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <lable for="email">Email</lable>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={errors}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <lable for="age">Age</lable>
          <input
            type="text"
            id="name"
            name="age"
            {...formik.getFieldProps("age")}
          />
          {formik.touched.age && formik.errors.age ? (
            <div style={errors}>{formik.errors.age}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReduceBoilerPlateFormikInput;
