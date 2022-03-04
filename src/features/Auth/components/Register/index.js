import React from "react";
import * as Yup from "yup";
import Input from "../../../../common/components/Input";
import Button from "../../../../common/components/Button";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    city: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    middleName: Yup.string().required("Middle Name is Required"),
    dateOfBirth: Yup.date().required("Date of Birth is Required"),
    phoneNumber: Yup.string().required("Phone Number is Required"),
    address: Yup.string().required("Address is Required"),
    city: Yup.string().required("City is Required"),
  });

  const onSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, values, errors, touched, handleSubmit }) => {
        console.log(errors);
        return (
          <form
            className="flex flex-col justify-center w-full max-w-3xl gap-5 "
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <h1 className="text-5xl font-semibold text-center">Register</h1>
            <Input
              label="Email"
              placeholder="your@email.com"
              name="email"
              onChange={handleChange}
              value={values.email}
              isTouched={touched.email}
              errorMessage={errors.email}
            />
            <Input
              type="password"
              label="Password"
              placeholder=""
              name="password"
              onChange={handleChange}
              value={values.password}
              isTouched={touched.password}
              errorMessage={errors.password}
            />
            <Input
              type="password"
              label="Retype Password"
              placeholder=""
              name="passwordConfirm"
              onChange={handleChange}
              value={values.passwordConfirm}
              isTouched={touched.passwordConfirm}
              errorMessage={errors.passwordConfirm}
            />
            <div className="grid grid-cols-3 gap-5">
              <Input
                label="First Name"
                placeholder="John"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                isTouched={touched.firstName}
                errorMessage={errors.firstName}
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                isTouched={touched.lastName}
                errorMessage={errors.lastName}
              />
              <Input
                label="Middle Name"
                placeholder=""
                name="middleName"
                onChange={handleChange}
                value={values.middleName}
                isTouched={touched.middleName}
                errorMessage={errors.middleName}
              />
            </div>
            <Input
              label="Date of Birth"
              placeholder=""
              type="date"
              name="dateOfBirth"
              onChange={handleChange}
              value={values.dateOfBirth}
              isTouched={touched.dateOfBirth}
              errorMessage={errors.dateOfBirth}
            />
            <Input
              label="Phone Number"
              placeholder="+63"
              name="phoneNumber"
              onChange={handleChange}
              value={values.phoneNumber}
              isTouched={touched.phoneNumber}
              errorMessage={errors.phoneNumber}
            />
            <Input
              label="Address"
              placeholder=""
              name="address"
              onChange={handleChange}
              value={values.address}
              isTouched={touched.address}
              errorMessage={errors.address}
            />
            <Input
              label="City"
              placeholder=""
              name="city"
              onChange={handleChange}
              value={values.city}
              isTouched={touched.city}
              errorMessage={errors.city}
            />
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                Have an account?{" "}
                <Link to="/auth/login" className="text-blue-500 underline">
                  Log In here
                </Link>
              </p>
              <Button title="Register" variant="secondary" type="submit" />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Register;
