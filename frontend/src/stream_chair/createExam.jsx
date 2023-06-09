import React from 'react';
import '../style/exammm.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const ExamForm = () => {
    const initialValues = {
        totalquestions: '',
        totalMarks: '',
        marksPerRightAnswer: '',
        departmentId: '',
        duration: '',
        startTime: '',
        pending: true,
    };
    const validationSchema = Yup.object({
        totalquestions: Yup.string().required('Required'),
        totalMarks: Yup.number().required('Required'),
        marksPerRightAnswer: Yup.string().required('Required'),
        departmentId: Yup.string().required('Required'),
        duration: Yup.string().required('Required'),
        startTime: Yup.date().required('Required'),
        // pending: Yup.date().required('Required')
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        axios.post('http://localhost:5000/api/createStudentExam', values)
            .then((response) => {
                console.log('Exam created successfully:', response.data);
                resetForm();
            })
            .catch((error) => {
                console.error('Error creating exam:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

return (
     <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
        <Form>
                
              
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Total Questions</label>
                    <Field type="number" className="form-control" id="totqns" name="totqns" min="1" />
                    <ErrorMessage name="totqns" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Total Marks</label>
                    <Field type="number" className="form-control" id="totmarks" name="totmarks" min="1" />
                    <ErrorMessage name="totmarks" className="form-text text-danger" />
                </div>
              
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Marks per Correct Answer</label>
                    <Field type="number" className="form-control" id="marks" name="marks" min="1" />
                    <ErrorMessage name="marks" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="examId" className="form-label">Department Id</label>
                    <Field type="text" className="form-control" id="deptid" name="deptid" />
                    <ErrorMessage name="deptid" className="form-text text-danger" />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Duration /in minutes</label>
                    <Field type="number" className="form-control" id="duration" name="duration" min="1" />
                    <ErrorMessage name="duration" className="form-text text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="endTime" className="form-label">Start Time</label>
                    <Field type="datetime-local" className="form-control" id="endTime" name="endTime" />
                    <ErrorMessage name="endTime" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="totalMarks" className="form-label">Activate Exam</label>
                    <Field type="number" className="form-control" id="totalMarks" name="totalMarks" />
                    <ErrorMessage name="totalMarks" className="form-text text-danger" />
                </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Set Exam</button>
      </Form>
            )}
 </Formik>
    );
};

export default ExamForm;
