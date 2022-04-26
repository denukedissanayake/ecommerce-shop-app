import { useContext, useState } from 'react';
import { AuthContext } from '../state/context/AuthContext';
import { login as LoginUser } from '../state/data/login-users';
import './styles/Login.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, dispatch } = useContext(AuthContext);

    const userLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        LoginUser(username, password, dispatch);
        // console.log(dispatch);
    }
    
    return (
        <div className='login-container'>
             <h2 className='login-auth-title'>Welcome Back. Please Login</h2>
            <form className='login-auth-form'>
                <input
                    type="email"
                    placeholder='Email Address'
                    className='login-input'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    className='login-input'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className='auth-button'
                    onClick={userLogin}
                >Login</button>
            </form>
            {/* <p className='forgot-password'>Forgot Password? We Got You Click HERE!</p> */}
        </div>
    )
}

export default Login