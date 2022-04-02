import './styles/Login.css'

type Props = {}

const Login = (props: Props) => {
    return (
        <div className='login-container'>
             <h2 className='login-auth-title'>Welcome Back. Please Login</h2>
            <form className='login-auth-form'>
                <input type="email" placeholder='Email Address' className='login-input'/>
                <input type="password" placeholder='Password' className='login-input'/>
                <button className='auth-button'>Login</button>
            </form>
            <p className='forgot-password'>Forgot Password? We Got You Click HERE!</p>
        </div>
    )
}

export default Login