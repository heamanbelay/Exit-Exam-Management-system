import React, { useState } from 'react';
import '../style/allRegister.css';
// import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function SelfSuperRegister() {
  const [avatar, setAvatar] = useState('/profile.png');
  const [avatarPreview, setAvatarPreview] = useState('/profile.png');

  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
               
                <p>Welcome , please <b className='head'>Sign Up</b></p>

              </div>
              <br />
              <div className="enter">
                <div className="username">
                  <Field
                    className="form__input"
                    type="text"
                    id="username"
                    placeholder="Enter Your Full Name"
                    name="username"
                  />
                  <ErrorMessage name="username" />
                </div>

                <div className="email">
                  <Field
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Enter your Email"
                    name="email"
                  />
                  <ErrorMessage name="email" />
                </div>

                <div className="password">
                  <Field
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    name="password"
                  />
                  <ErrorMessage name="password" />
                </div>

                <div className="confirm-password">
                  <Field
                    className="form__input"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Your Password"
                    name="confirmPassword"
                  />
                  <ErrorMessage name="confirmPassword" />
                </div>
              </div>
     
              <div id="registerImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <Field
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </div>

              <button type="submit" className="btn" disabled={isSubmitting}>
                Register
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}


