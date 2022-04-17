import './styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
  return (
      <div className="navbar-container">
          <div className='navbar'>
              <div className='navbar-left'>
                  <span className='navbar-language'>EN</span>
                  <div className="search-container">
                    <input type='text'/>
                    <SearchIcon className='search' style={{color: 'grey' , fontSize: 20}}/>
                  </div>
              </div>
              <Link to='/' className='router-link'>
                <div className='navbar-middle'>Denuke Palace</div>
              </Link>
              <div className='navbar-right'>
                  <div className="menu-item">Login</div>
                  <div className="menu-item">Join Us</div>
                  <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
              </div>
         </div>
      </div>
  )
}

export default Navbar 