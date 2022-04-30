import './styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { CartContext } from '../state/context/CartContext'
import { useContext } from 'react';
import { AuthContext } from '../state/context/AuthContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({
      type: 'LOGOUT',
    });
  }

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
                  {user.currentUser && <div className="menu-item">PROFILE</div>}
                  {user.currentUser && <div className="menu-item" onClick={logout}>LOGOUT</div>}
                  {!user.currentUser && <Link to="/auth" className='router-link'>
                    <div className="menu-item">LOGIN</div>
                  </Link>}
                  {!user.currentUser && <Link to="/auth" className='router-link'>
                    <div className="menu-item">JOIN US</div>
                  </Link>}
                  <Link to="/cart">
                    <Badge badgeContent={cart.quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                  </Link>
              </div>
         </div>
      </div>
  )
}

export default Navbar 