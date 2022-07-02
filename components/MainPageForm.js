import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import RoundedButton from './RoundedButton'

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name required')
    .max(20, 'Name should not be more than 20 characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email required')
})

function MainPageForm () {
  return (
    <div className='w-100 '>
      <Formik
        initialValues={{
          name: '',
          email: ''
        }}
        validationSchema={UserSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(false)
          console.log(values)
          resetForm()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form className='mt-4 w-100' onSubmit={handleSubmit}>
            <div className='text-start w-50 input-field-wrapper'>
              <input
                style={{
                  border: 'solid 1px lightgray',
                  outline: '0'
                }}
                placeholder='Enter Your Name'
                className='rounded-pill p-2 ps-4 text-color w-100 background-dark'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                required
                name='name'
                id='name'
              />

              {errors.name && touched.name ? (
                <small className='ps-4 text-danger text-center'>
                  {errors.name}
                </small>
              ) : null}
            </div>
            <br />

            <div className=' text-start input-field-wrapper w-50'>
              <input
                style={{
                  border: 'solid 1px lightgray',
                  outline: '0'
                }}
                placeholder='Enter Your Email'
                className='rounded-pill p-2 ps-4 text-color w-100 background-dark'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type='email'
                required
                name='email'
                id='email'
              />

              {errors.email && touched.email ? (
                <small className='ps-4 text-danger text-center'>
                  {errors.email}
                </small>
              ) : null}
            </div>
            <br />

            <div className='form-group input-field-wrapper'>
              <RoundedButton
                disabled={isSubmitting}
                buttonClass='fw-bold w-50 submit-btn px-5 py-2 button'
                buttonText={'Submit'}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default MainPageForm
