import CustomTitle from '../components/CustomTitle'
import Hotnews from '../components/Hotnews'
import Navbar from '../components/Navbar'
import Productitem from '../components/Productitem'
import Products from '../components/Products'
import './styles/Productlist.css'

type Props = {}

const Productlist = (props: Props) => {
  return (
    <div>
      <Hotnews/>
      <Navbar />
      <CustomTitle size={25} title="Our Products" />
      <div className='filter-container'>
        <div className='filter'>
          <span className="filter-product-text">Filter Products:</span>
          <select>
            <option disabled selected> Select Color</option>
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Green</option>
            <option>Yellow</option>
            <option>Other</option>
          </select>
          <select>
            <option disabled selected> Chose Size</option>
            <option>Extra Small</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </div>
        <div className='filter'>
          <span className="sort-products-text">Sort Products:</span>
          <select>
            <option selected> Newest </option>
            <option>Oldest</option>
            <option>Price - Higher</option>
            <option>Price - Lower</option>
          </select>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Productlist