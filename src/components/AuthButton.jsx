import { useState } from 'react';
import { AuthButtonStyled } from './Styles';
import AuthModal from './AuthModal';
import { authorize } from '../api/mock';

const AuthButton = () => {

    const [isAuth, setAuth] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleLoginClick = () => {
        if (isAuth) {
            setAuth(false);
            return;
        }
      setShowModal(true);
    };
  
    const handleCancel = () => {
      setShowModal(false);
    };

    const handleClose = () => {
        setAuth(true);
        setShowModal(false);
    }

    const handleAuthorize = async () => {
        await authorize();
    };

    return (
        <div>
            <AuthButtonStyled backgroundColor="#4CAF50" hoverColor="#2E8B57" onClick={handleLoginClick}>
                {isAuth ? 'Log out' : 'Log in'}
            </AuthButtonStyled>

            <AuthModal visible={showModal} 
            onCancel={handleCancel}
             OnAuthorize={handleAuthorize}
             OnClose={handleClose} />
        </div>

    )
};
export default AuthButton;