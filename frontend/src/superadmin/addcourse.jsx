import React, { useState } from 'react';
import '../style/allRegister.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Course() {
  const [department, setDepartment] = useState('');
 
  const validationSchema = Yup.object().shape({
    coursename: Yup.string().required('Name is required'),
  
  });

  const initialValues = {
    coursename: '',
    department: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <div className="form-body">
              <div className="header">
               
                <p>Welcome , please <b className='head'>Add Course</b></p>

              </div>
              <br />
              <div className="enter">
                <div className="username">
                  <Field
                    className="form__input"
                    type="text"
                    id="username"
                    placeholder="Enter Course Name"
                    name="username"
                  />
                  <ErrorMessage name="username" />
                </div>
              </div>
              <label>
                <div className="select">
                  <Field
                    as="select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >

                    <option value="" disabled hidden>
                    --- Select a department ---
                    </option>
                    <option value="department1">Electrical engineering</option>
                    <option value="department2">Computer engineering</option>
                    <option value="department3">civil engineering</option>
                    <option value="department4">Mechanical engineering</option>
                    <option value="department5">Industrial engineering</option>
                    <option value="department6">Chemical engineering</option>
                    <option value="department8">Food engineering</option>
                    <option value="department9">Nutrition engineering</option>
                  </Field>
                  <div className="select-arrow"></div>
                </div>
              </label>
  
              <button type="submit" className="btn" disabled={isSubmitting}>
                Add
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

