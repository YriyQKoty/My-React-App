import { useState } from 'react';
import { AuthButtonStyled } from './Styles';

const AuthButton = () => {

    const [isAuth, setAuth] = useState(false);

    return (
        <AuthButtonStyled backgroundColor="#4CAF50" hoverColor="#2E8B57" onClick={() => setAuth(!isAuth)}>
            {isAuth ? 'Log out' : 'Log in'}
        </AuthButtonStyled>
    )
};
export default AuthButton;