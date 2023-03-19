import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from "react-modal";
import CustomPasswordInput from "./FormPasswordInput";
import CustomInput from "./FormInput";

const RegisterFormik = ({isOpen, handleClose}) => {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(40, 'Name must be no more than 40 characters')
            .required('Required'),
        lastName: Yup.string()
            .max(40, 'Last name must be no more than 40 characters')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            )
            .required('Required')
    });


    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };


    const onSubmit = (values) => {
        handleClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={handleClose}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form style={{margin: 100}}>
                          <h2>Registration</h2>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" component={CustomInput}/>
                            
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field id="lastName" name="lastName" component={CustomInput}/>
                           
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" component={CustomInput}/>
                           
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" component={CustomPasswordInput} />
                           
                        </div>
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default RegisterFormik;