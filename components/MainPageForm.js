import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import RoundedButton from './RoundedButton'
import { toast } from 'react-toastify'

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name required')
    .max(20, 'Name should not be more than 20 characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email required')
})

function MainPageForm () {
  const toastOptions = {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }

  let submitForm = async (name, email) => {
    const body = JSON.stringify({
      name: name,
      email: email
    })

    let res = await fetch(window.location.href + '/api/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })

    console.log(res)

    if (res.status === 200) {
      return [true, res]
    } else {
      return [false, res]
    }
  }

  return (
    <div className='w-100'>
      <Formik
        initialValues={{
          name: '',
          email: ''
        }}
        validationSchema={UserSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(false)
          const response = await submitForm(values.name, values.email)
          if (response[0]) {
            const jsonResponse = await response[1].json()
            if (response[1].status === 200 && response[1].ok) {
              toast.success(jsonResponse.message, toastOptions)
            } else {
              toast.error(jsonResponse.message, toastOptions)
            }
          } else {
            toast.error(
              'Some error occured. Data could not be registered.',
              toastOptions
            )
          }

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
        }) => (
          <form
            className='mt-4 w-100 d-flex flex-column align-items-center align-items-lg-start'
            onSubmit={handleSubmit}
          >
            <div className='text-start w-75 input-field-wrapper'>
              <input
                placeholder='Enter Your Name'
                className='rounded-pill form-input p-2 ps-4 text-color w-100 background-dark'
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

            <div className=' text-start input-field-wrapper w-75'>
              <input
                placeholder='Enter Your Email'
                className='rounded-pill p-2 ps-4 form-input text-color w-100 background-dark'
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

            <div className='form-group w-75 input-field-wrapper'>
              <RoundedButton
                disabled={isSubmitting}
                buttonClass='fw-bold w-100 submit-btn px-5 py-2 button'
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
