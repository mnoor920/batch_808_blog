import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is Required').min(2, 'First Name must be at least 2 characters').max(50, 'First Name must be less than 50 characters').matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    last_name: Yup.string().required('Last Name is Required').min(2, 'Last Name must be at least 2 characters').max(50, 'Last Name must be less than 50 characters').matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is Required'),
});

const ContactUs = () => {
    return (
        <div className='container'>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ first_name: '', last_name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <input
                                type="text"
                                name="first_name"
                                placeholder='Enter First Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                                className='form-control fomr_input'
                            />
                            <p className='form_error' >
                                {errors.first_name && touched.first_name && errors.first_name}
                            </p>

                        </div>
                        <div className="">
                            <input
                                type="text"
                                name="last_name"
                                placeholder='Enter Last Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                                className='form-control fomr_input'
                            />
                            <p className='form_error' >
                                {errors.last_name && touched.last_name && errors.last_name}
                            </p>

                        </div>
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter Email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className='form-control fomr_input'
                            />
                            <p className='form_error' >
                                {errors.email && touched.email && errors.email}
                            </p>

                        </div>
                        <div className="">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter Password'
                                className='form-control fomr_input'
                                value={values.password}
                            />
                            <p className='form_error' >
                                {errors.password && touched.password && errors.password}
                            </p>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>

    )
}

export default ContactUs
