import './styles/Categories.css';
import { categories } from '../utils/data';
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='categories-container'>
          {categories.map(item => (
              <CategoryItem key={item.id} item={item}/>
          ))}
    </div>
  )
}

export default Categories