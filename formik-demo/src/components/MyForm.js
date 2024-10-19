import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';
import './Form.css';

const MyForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Password is required'),
    age: Yup.number()
      .min(1, 'Must be at least 1')
      .required('Age is required'),
    file: Yup.mixed().required('A file is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date()
      .required('End date is required')
      .min(Yup.ref('startDate'), 'End date must be after start date'),
  });

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          age: '',
          file: null,
          startDate: '',
          endDate: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <CustomInput label="Name" name="name" type="text" placeholder="Enter your name" />
            <CustomInput label="Email" name="email" type="email" placeholder="Enter your email" />
            <CustomInput label="Password" name="password" type="password" placeholder="Enter your password" />
            <CustomInput label="Age" name="age" type="number" placeholder="Enter your age" />
            <CustomInput label="File Upload" name="file" type="file" />
            <CustomInput label="Start Date" name="startDate" type="date" />
            <CustomInput label="End Date" name="endDate" type="date" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
