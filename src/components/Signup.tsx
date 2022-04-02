import { Checkbox } from '@mui/material'
import './styles/Signup.css'

const Signup = () => {
    return (
        <div className='signup-container'>
            <h2 className='signup-auth-title'>Yeah! Create Account</h2>
            <form className='signup-auth-form'>
                <div className='signup-form-inline-items-container'>
                    <input type="text" placeholder='First Name' className='signup-form-inline-items' />
                    <input type="text" placeholder='Last Name' className='signup-form-inline-items'/>
                </div>
                <div className='signup-form-multiline-items-container'>
                    <input type="email" placeholder='Email Address' className='signup-input'/>
                    <input type="text" placeholder='User Name' className='signup-input'/>
                </div>
                <div className='signup-form-inline-items-container'>
                    <input type="password" placeholder='Password' className='signup-form-inline-items'/>
                    <input type="password" placeholder='Confirm Password' className='signup-form-inline-items' />
                </div>
                <div className='term-and-conditions-container'>
                    <Checkbox />
                    <span>I agree to all the terms and conditions.</span>
                </div>
                <button className='auth-button'>Signup</button>
            </form>
        </div>
    )
}

export default Signup