import {products} from '../data'
import Productitem from './Productitem'
import './Products.css'

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