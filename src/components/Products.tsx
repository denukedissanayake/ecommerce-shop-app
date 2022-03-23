import {products} from '../utils/data'
import Productitem from './Productitem'
import './styles/Products.css'

const Products = () => {
  return (
      <div className='products-container'>
          {products.map(item => (
              <Productitem key={item.id} item={item} />
          ))}
    </div>
  )
}

export default Products