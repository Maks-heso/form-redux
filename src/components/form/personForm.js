import React from 'react'
import { loginSucceeded } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useDataForm } from '../../context/formContext'

const Form = () => {
  const { setDataForm } = useDataForm()
  const dispatch = useDispatch()
  const handleSubmitForm = (event) => {
    event.preventDefault()
    dispatch(loginSucceeded())
  }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter your firstName'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter your lastName'),
    phone: Yup.string()
      .required('Please Enter your phone')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      ),
    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter your email'),
    emailConfirm: Yup.string()
      .email()
      .required('Please confirm your email')
      .oneOf([Yup.ref('email'), null], 'Emails must match'),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
  })

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label> FirstName </label> <br />
        <input
          type="firstName"
          name="firstName"
          // onChange={inputChange}
          // value={getInputValue}
        />
        {/* {errors.firstName && touched.firstName ? ( */}
        {/* <div>{errors.firstName}</div> */}
        {/* ) : null} */}
        <br />
        <label> LastName </label> <br />
        <input
          type="lastName"
          name="lastName"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.lastName}
        />
        {/* {errors.lastName && touched.lastName ? ( */}
        {/* <div>{errors.lastName}</div> */}
        {/* ) : null} */}
        <br />
        <label> Phone </label> <br />
        <input
          type="phone"
          name="phone"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.phone}
        />
        {/* {errors.phone && touched.phone ? <div>{errors.phone}</div> : null} */}
        <br />
        <label> Email </label> <br />
        <input
          type="email"
          name="email"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.email}
        />
        {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
        <br />
        <label> EmailConfirm </label> <br />
        <input
          type="emailConfirm"
          name="emailConfirm"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.emailConfirm}
        />
        {/* {errors.emailConfirm && touched.emailConfirm ? ( */}
        {/* <div>{errors.emailConfirm}</div> */}
        {/* ) : null} */}
        <br />
        <label> Password </label> <br />
        <input
          type="password"
          name="password"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.password}
        />
        {/* {errors.password && touched.password ? ( */}
        {/* <div>{errors.password}</div> */}
        {/* ) : null} */}
        <br />
        <button
          className="btn btn-success "
          onClick={setDataForm}
          type="submit"
          validate={SignupSchema}
          // disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
