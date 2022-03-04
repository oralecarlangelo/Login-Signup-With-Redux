import React from "react";
import * as Yup from "yup";
import Input from "../../../../common/components/Input";
import Button from "../../../../common/components/Button";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, login } from "../../authSlice";

const Login = () => {
  const { isAuth } = useSelector(authSelect);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const onSubmit = (values) => {
    dispatch(login(values));
  };

  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, values, errors, touched, handleSubmit }) => {
        return (
          <form
            className="flex flex-col justify-center w-full max-w-2xl gap-5 "
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <h1 className="text-5xl font-semibold text-center">Login</h1>
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
              name="password"
              onChange={handleChange}
              value={values.password}
              isTouched={touched.password}
              errorMessage={errors.password}
            />
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                If you don't have an account?{" "}
                <Link to="/auth/register" className="text-blue-500 underline">
                  Sign In here
                </Link>
              </p>
              <Button title="Login" type="submit" variant="secondary" />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
