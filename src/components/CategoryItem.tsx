import './styles/Categoryitem.css'
import { CategotyItem } from '../utils/Types'
import { Link } from 'react-router-dom'

type ItemProps = {
    item : CategotyItem
}

const CategoryItem = ({item} : ItemProps) => {
  return (
    <div className='category-item-container'>
      <Link to={`/products/${item.category}`}>
        <img className='category-image' src={item.image}/>
        <div className='category-details'>
            <h1 className='category-title'>{item.title}</h1>
            <button className='category-shopnow-button'>Explore</button>
          </div>
      </Link>
    </div>
  )
}

export default CategoryItem