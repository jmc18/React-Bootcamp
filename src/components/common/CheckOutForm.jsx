import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Grid, Button } from './'

const SignupSchema = Yup.object().shape({
  customerName: Yup.string().min(2, 'The name is too short!').max(50, 'The name is too long!').required('Name is Required'),
  customerZipCode: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('Zip Code is Required'),
  customerEmail: Yup.string().email('Invalid email').required('Email is Required')
})

const CheckOutForm = () => {
  return (
    <div className="cart__info__form">
      <Formik initialValues={{ customerName: '', customerEmail: '', customerZipCode: '', orderNotes: '' }} validationSchema={SignupSchema}>
        {({ errors, touched }) => (
          <Form>
            <div className="cart__info__form__input">
              <Field name="customerName" placeholder="Name" />
              {errors.customerName && touched.customerName ? <div>{errors.customerName}</div> : null}
            </div>
            <div className="cart__info__form__input">
              <Field type="email" name="customerEmail" placeholder="Email" />
              {errors.customerEmail && touched.customerEmail ? <div>{errors.customerEmail}</div> : null}
            </div>
            <div className="cart__info__form__input">
              <Field name="customerZipCode" placeholder="Zip Code" />
              {errors.customerZipCode && touched.customerZipCode ? <div>{errors.customerZipCode}</div> : null}
            </div>
            <div className="cart__info__form__input">
              <Field as="textarea" name="orderNotes" placeholder="Order Notes" />
            </div>

            <div>
              <Grid col={2} mdCol={2} smCol={2} gap={1}>
                <Link to="/cart">
                  <Button animate={true} icon="bx bx-arrow-back" size="sm">
                    Go back to cart
                  </Button>
                </Link>
                <Button animate={true} icon="bx bx-check" size="sm" buttonType="submit">
                  Place order
                </Button>
              </Grid>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CheckOutForm
