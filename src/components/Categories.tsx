import './Categories.css';
import { categories } from '../data';
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