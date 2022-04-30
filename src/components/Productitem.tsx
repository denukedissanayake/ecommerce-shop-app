import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './styles/Productitem.css'
import {productType} from '../utils/Types'
import { Link } from 'react-router-dom';
import { CartContext } from '../state/context/CartContext';
import { useContext } from 'react';

type productItemProps = {
    item: productType
}

const Productitem = ({ item }: productItemProps) => {
    const { cart, dispatch } = useContext(CartContext);

    const addToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { ...item, itemCount : 1 }
        });
    }
    
    return (
      <div className='product-item-container'>
            <img className='product-item-image' src={item.image}/>
            <div className='product-item-icon-container'>
                <div className='product-item-icon' onClick={addToCart}>
                    <ShoppingCartOutlinedIcon/>
                </div>
                <Link to={`/product/${item._id}`} className='router-link'>
                    <div className='product-item-icon'>
                        <SearchOutlinedIcon/>
                    </div>
                </Link>
                <div className='product-item-icon'>
                    <FavoriteBorderOutlinedIcon/>
                </div>
          </div>
    </div>
  )
}

export default Productitem