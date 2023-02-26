import { useState } from 'react';
import './Header.css';

const AuthButton = () => {

    const [isAuth, setAuth] = useState(false);

    return (
        <button className="auth-button" onClick={() => setAuth(!isAuth)}>
            {isAuth ? 'Log out' : 'Log in'}
        </button>
    )
};
export default AuthButton;