import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import CustomPasswordInput from "./FormPasswordInput";
import CustomInput from "./FormInput";


const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string() .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Required')
});

const AuthFormik = ({ isOpen, handleClose, onCancel, OnAuthorize }) => {
    const [loginError, setLoginError] = useState("");

    const handleLogin = async (values) => {
        const { email, password } = values;
        await OnAuthorize(email, password);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={handleClose}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {
                    handleLogin(values).then(() => {
                        actions.setSubmitting(false);
                        handleClose();
                    }).catch((error) => {
                        setLoginError(error.message);
                        actions.setSubmitting(false);
                    });
                }}
            >
                {({ isSubmitting }) => (
                    <Form style={{ margin: 100 }}>
                        <h2>Login</h2>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" component={CustomInput}/>
                        </div>
                        <div>

                            <Field type="password" name="password" component={CustomPasswordInput} />

                        </div>

                        {loginError && <div>{loginError}</div>}

                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                        <button onClick={onCancel}>Close</button>
                    </Form>
                )}
            </Formik>
         
        </Modal>
    );
};

export default AuthFormik;