import './styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { CartContext } from '../state/context/CartContext'
import { useContext, useState } from 'react';
import { AuthContext } from '../state/context/AuthContext';
import { Modal } from '@mui/material';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, dispatch } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false)

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({
      type: 'LOGOUT',
    });
    setShowModal(false)
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
                  {user.currentUser && <div className="menu-item" onClick={() => setShowModal(true)}>LOGOUT</div>}
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
            <Modal open={showModal} onClose={() => setShowModal(false)} >
              <div className='modal-item-container'>
                <div className='logout-container'>
                  <p className='logout-container-text'>Do you want to logout?</p>
                  <div className='logout-container-buttton-container'>
                    <button className='logout-container-buttton' onClick={logout}>LOGOUT</button>
                    <button className='logout-container-buttton' onClick={() => setShowModal(false)}>CANCEL</button>
                  </div>
                </div>
              </div>
            </Modal>
      </div>
  )
}

export default Navbar 