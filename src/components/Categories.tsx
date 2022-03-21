import './Categories.css';
import { categories } from '../data';
import CategoryItem from './CategoryItem'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='categories-container'>
          {categories.map(item => (
              <CategoryItem key={item.id} item={item}/>
          ))}
    </div>
  )
}

export default Categories