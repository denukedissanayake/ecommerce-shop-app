import { Checkbox } from '@mui/material'
import { useState } from 'react';
import { signupUser } from '../data/signup-users';
import './styles/Signup.css'

const Signup = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isError, setIsError] = useState<string | null>(null)
    const [isSuccess, setIsSuccess] = useState<string | null>(null)

    const signup =async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setIsError("Both Password Should be Same");
        }

        if (!isError) {
            const [response, error] = await signupUser(
                firstname,
                lastname,
                email,
                username,
                password,
            )
            
            if (error) {
                setIsError("Please Try Again")
            }
            if (response.data.user === null) {
                setIsError("Already Existing user")
            }
            if (response.data.user) {
                setIsSuccess("Signup Successfull")
            }

            console.log(response, error)
        }
    }

    return (
        <div className='signup-container'>
            <h2 className='signup-auth-title'>Yeah! Create Account</h2>
            <form className='signup-auth-form'>
                <div className='signup-form-inline-items-container'>
                    <input
                        type="text"
                        placeholder='First Name'
                        className='signup-form-inline-items'
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Last Name'
                        className='signup-form-inline-items'
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='signup-form-multiline-items-container'>
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='signup-input'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='User Name'
                        className='signup-input'
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='signup-form-inline-items-container'>
                    <input
                        type="password"
                        placeholder='Password'
                        className='signup-form-inline-items'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        className='signup-form-inline-items'
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='term-and-conditions-container'>
                    <Checkbox required/>
                    <span>I agree to all the terms and conditions.</span>
                </div>
                {isError
                    && <label className='login-error-label'>{isError}</label>}
                 {isSuccess
                    && <label className='login-success-label'>{isSuccess}</label>}
                <button className='auth-button' onClick={signup}>Signup</button>
            </form>
        </div>
    )
}

export default Signup