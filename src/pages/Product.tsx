import Hotnews from '../components/Hotnews'
import Navbar from '../components/Navbar'
import './styles/Product.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom';
import {getProductById} from '../data/get-product-by-id'
import { useCallback, useContext, useEffect, useState } from 'react';
import {productType} from '../utils/Types'
import { CartContext } from '../state/context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import InfoBanner from '../components/InfoBanner';


const Product = () => {
  const productId = useLocation().pathname.split("/")[2]
  const [retrivedProduct, setRetrivedProduct] = useState<productType | null>(null)
  const [itemCount, setItemCount] = useState(1);
  const [color, setColor] = useState<string | null>(null)
  const [size, setSize] = useState<string | null>(null)
  const [loading, setLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
 
  const { cart, dispatch } = useContext(CartContext);

  const fetchProductById = useCallback(async () => {
    setLoading(true);
    const [product, error] = await getProductById(productId);
    if (!error) {
      setRetrivedProduct(product);
    } 
    setLoading(false);
  }, [productId])

  useEffect(() => {
    fetchProductById();
  }, [fetchProductById])

  const IsInTheCart = () => {
    cart.products.forEach((product : any) => {
      if (product._id === retrivedProduct!._id) {
        setIsInCart(true)
      }
    })
  }

  useEffect(() => {
    retrivedProduct && IsInTheCart();
  }, [retrivedProduct])


  const increaseCount = () => {
    setItemCount(itemCount + 1);
  }

  const decreaseCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {...retrivedProduct, itemCount, color, size}
    })
    setIsInCart(true)
  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Navbar />
      <Hotnews />
        {retrivedProduct ?
          <div className='product-container'>
            <div className="image-container">
              <img src={retrivedProduct.image} />
            </div>
            <div className="info-container">
              <h1 className="product-title">{retrivedProduct.name}</h1>
              <p className="product-description">{retrivedProduct.description}</p>
              <h3 className="product-price">${retrivedProduct.price}</h3>
              {
                retrivedProduct.size?.length ?
                  <h3 className='color-size-picker-title'>Choose Your Favourite Color & Size</h3> :
                  <h3 className='color-size-picker-title'>Choose Your Favourite Color</h3>
              }
              <div className="product-filter-container">
                <div className="choose-color">
                  {retrivedProduct.color?.map(color => (
                    <div key={color} onClick={() => setColor(color)} className='choose-color-item' style={{ backgroundColor: `${color}` }} />
                  ))}
                </div>
                {
                  retrivedProduct.size?.length ?
                    (<div className="filter-product">
                      <select defaultValue="Chose Size" onChange={(e) => setSize(e.target.value)}>
                        <option disabled>Chose Size</option>
                        {retrivedProduct.size?.map(s => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>)
                    : null
                }
              </div>

              <div className="purchase-container">
                <div className="item-count-container">
                  <RemoveIcon className='item-add-icon' onClick={decreaseCount} />
                  <span className="item-count">{itemCount}</span>
                  <AddIcon className='item-add-icon' onClick={increaseCount} />
                </div>
                <div className='add-to-cart-container'>
                  {isInCart ?
                    <button className='add-to-cart'>Already in The Cart</button> :
                    <button
                      className='add-to-cart'
                      onClick={addToCart}
                      disabled={ retrivedProduct.color && !color || retrivedProduct.size?.length && !size }
                    >
                      Add to Cart
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
          :
             <InfoBanner message='No Product Found' type="WARNING" alignment="LEFT"/>
        }
      </div>
  ) 
}

export default Product