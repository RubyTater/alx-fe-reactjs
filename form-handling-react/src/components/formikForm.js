// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("⚠️ Username is required"),
  email: Yup.string()
    .email("⚠️ Invalid email format")
    .required("⚠️ Email is required"),
  password: Yup.string()
    .min(6, "⚠️ Password must be at least 6 characters")
    .required("⚠️ Password is required"),
});

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">📝 Register (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          window.alert(`✅ Registered with Formik!\n${JSON.stringify(values, null, 2)}`);
          resetForm();
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
