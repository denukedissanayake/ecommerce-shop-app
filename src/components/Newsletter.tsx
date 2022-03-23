import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './styles/Newsletter.css'

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className='newsletter-container'>
        <h1 className='newsletter-title'>Newsletter</h1> 
        <p className='newsletter-description'>Welcome to the 'Newsletter'. Subscribe us for more update.</p>
        <div className='newsletter-subscribe-container'>
            <input type="email" placeholder='Enter Your Email' className='newsletter-email' />
            <button className='newsletter-subscribe-button'>
                <SendOutlinedIcon className='newsletter-subscribe-button-icon'/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter