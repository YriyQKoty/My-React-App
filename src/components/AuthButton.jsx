import { useState } from 'react';
import { AuthButtonStyled } from './Styles';
import AuthModal from './AuthModal';
import { authorize } from '../api/mock';
import AuthFormik from './AuthFormik';
import RegisterFormik from './RegisterFormik';

const AuthButton = () => {

    const [isAuth, setAuth] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showRegisterModal, setRegisterShowModal] = useState(false);

    const handleLoginClick = () => {
        if (isAuth) {
            setAuth(false);
            return;
        }
      setShowModal(true);
    };
  
    const handleCancel = () => {
      setShowModal(false);
      setRegisterShowModal(false)
    };

    const handleClose = () => {
        setAuth(true);
        setShowModal(false);
        setRegisterShowModal(false)
    }

    const handleAuthorize = async () => {
        await authorize();
    };

    return (
        <div>
            <AuthButtonStyled backgroundColor="#4CAF50" hoverColor="#2E8B57" onClick={setRegisterShowModal}>
                Register
            </AuthButtonStyled>
            <AuthButtonStyled backgroundColor="#4CAF50" hoverColor="#2E8B57" onClick={handleLoginClick}>
                {isAuth ? 'Log out' : 'Log in'}
            </AuthButtonStyled>

            <RegisterFormik isOpen={showRegisterModal} handleClose={handleClose}>

            </RegisterFormik>

            <AuthFormik isOpen={showModal} handleClose={handleClose} OnAuthorize={handleAuthorize} onCancel={handleCancel}></AuthFormik>

            {/* <AuthModal visible={showModal} 
            onCancel={handleCancel}
             OnAuthorize={handleAuthorize}
             OnClose={handleClose} /> */}
        </div>

    )
};
export default AuthButton;