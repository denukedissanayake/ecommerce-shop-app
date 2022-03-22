import { ProductItem } from '../Types'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Productitem.css'

type productItemProps = {
    item: ProductItem
}

const Productitem = ({item} : productItemProps) => {
  return (
      <div className='product-item-container'>
          {/* <div className='product-item-background-canvas'/> */}
            {/* <div className='product-item-circle'/> */}
            <img className='product-item-image' src={item.image}/>
            <div className='product-item-icon-container'>
                <div className='product-item-icon'>
                    <ShoppingCartOutlinedIcon/>
                </div>
                <div className='product-item-icon'>
                    <SearchOutlinedIcon/>
                </div>
                <div className='product-item-icon'>
                    <FavoriteBorderOutlinedIcon/>
                </div>
          </div>
    </div>
  )
}

export default Productitem