import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

const UserFormFormikContext = () => {



    return (
        <div>
            <h2>formik Form</h2>

            <Formik initialValues={{
                email: '',
                age: 0
            }}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object({
                    age: Yup.number()
                        .max(60, 'age should be max 60')
                        .min(10, 'age should be freater tha 10')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                })}

            >


                {

                    (formik) => (

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

                    )
                }




            </Formik>
        </div>
    )
}

export default UserFormFormikContext
