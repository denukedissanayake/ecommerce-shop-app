import './styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>Denuke's Palace</h1>
            <p className="footer-description">
                Denuke's Palace is the best place you to experience the best quality for the lowest price  
            </p>
            <div className="footer-social-media-icons-container">
                <div className="footer-social-media-icon facebook">
                    <FacebookIcon/>
                </div>
                <div className="footer-social-media-icon instagram">
                    <InstagramIcon/>
                </div>
                <div className="footer-social-media-icon twitter">
                    <TwitterIcon/>
                </div>
            </div>
        </div>
          <div className='footer-center'>
              <h2 className="footer-title">Check Your Favourits</h2>
              <ul className="footer-item-list">
                  <li className="footer-item">Home</li>
                  <li className="footer-item">Cart</li>
                  <li className="footer-item">My Account</li>
                  <li className="footer-item">Order Details</li>
                  <li className="footer-item">Terms & Conditions</li>
              </ul>
        </div>
        <div className='footer-right'>
              <h2 className='contact-title'>Contact Us</h2>
              <div className="contact-container">
                <div className='contact-item'>
                    <EmailIcon className='contact-item-icon'/>
                    <h3 className='contact-item-detail email'>hello@denuke.com</h3>
                </div>
                <div className='contact-item'>
                    <LocalPhoneIcon className='contact-item-icon'/>
                    <h3 className='contact-item-detail telephone'>+94 71 1234 567</h3>
                </div>
                <div className='contact-item'>
                    <LocationOnIcon className='contact-item-icon'/>
                    <h3 className='contact-item-detail address'>No:7 Raja Veediya Colombo Sri Lanka</h3>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Footer