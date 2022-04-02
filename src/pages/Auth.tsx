import { useState } from 'react'
import './styles/Auth.css'
import Login from '../components/Login'
import Signup from '../components/Signup'
import GoogleIcon from '@mui/icons-material/Google';

const Auth = () => {
    const [login, setLogin] = useState(true);

    const toggleAuthOption = () => {
        setLogin(!login);
    }

  return (
      <div className='auth-container'>
          {login ? <Login/> : <Signup/>}
          <button className='toggle-button'
              onClick={toggleAuthOption}>{login ?
                  <span className='toggle-quote'>Don't Have an Account?</span> :
                  <span className='toggle-quote'>Already have an Account?</span>}
          </button>
          <div className='google-button-container' >
            <GoogleIcon className='google-icon'/>
            <span className='google-login'>Login with Google</span>
          </div>
    </div>
  )
}

export default Auth