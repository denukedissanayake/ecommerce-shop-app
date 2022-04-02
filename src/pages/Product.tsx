import Hotnews from '../components/Hotnews'
import Navbar from '../components/Navbar'
import './styles/Product.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {}

const Product = (props: Props) => {
  return (
    <div>
        <Hotnews/>
          <Navbar />
          <div className='product-container'>
              <div className="image-container">
                  <img src='https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              </div>
              <div className="info-container">
                  <h1 className="product-title">Frock - Ladies</h1>
                  <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique labore aliquid, cumque rem odio nulla. Rem voluptates, accusamus dicta nemo eveniet eum explicabo blanditiis? Minima dolorum provident distinctio sunt.</p>
                  <h3 className="product-price">$99.99</h3>

                  <h3>Choose Your Favourite Color & Size</h3>
                  <div className="filter-container">
                      <div className="filter-product choose-color">
                          <div className='choose-color-item' style={{backgroundColor: "blue"}} />
                          <div className='choose-color-item' style={{backgroundColor: "black"}} />
                          <div className='choose-color-item' style={{backgroundColor: "gray"}} />
                      </div>
                      <div className="filter-product">
                        <select>
                            <option disabled selected> Chose Size</option>
                            <option>Extra Small</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                      </div>
                  </div>

                  <div className="purchase-container">
                      <div className="item-count-container">
                        <RemoveIcon className='item-add-icon' />
                        <span className="item-count">0</span>
                        <AddIcon className='item-add-icon' />
                      </div>
                      <button className='add-to-cart'>Add to Cart</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Product