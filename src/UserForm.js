import React from 'react'
import { useFormik } from 'formik';

const UserFormWithFormik = () => {

    const formik = useFormik({

        initialValues: {
            email: '',
            age: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

        validate: values => {

            const errors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (values.email.length > 15) {
                errors.email = 'Must be 15 characters or less';
            }


            if (!values.age) {
                errors.age = 'Required';
            } else if (values.age.length > 10) {
                errors.age = 'Must be 20 characters or less';
            }
            return errors;
        }


    });

    return (
        <div>
            <h2>formik Form</h2>

            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="email">Email Address</label>

                <input id="email" name="email" type="email"

                    onChange={formik.handleChange}
                    value={formik.values.email}
                />


                {formik.errors.email ?
                    <div style={{ color: 'red' }} >{formik.errors.email}</div> :
                    null}

                <br />
                <label htmlFor="age">Age</label>

                <input id="age" name="age" type="age"

                    onChange={formik.handleChange}
                    value={formik.values.age}
                />

                {formik.errors.age ?
                    <div style={{ color: 'red' }} >{formik.errors.age}</div> :
                    null}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default UserFormWithFormik
