import { ChangeEvent, useState } from 'react'
import { useLocation } from 'react-router'
import CustomTitle from '../components/CustomTitle'
import Hotnews from '../components/Hotnews'
import Navbar from '../components/Navbar'
import Productitem from '../components/Productitem'
import Products from '../components/Products'
import './styles/Productlist.css'


const Productlist = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState<{ color: string, size: string } | {}>({});
  const [sort, setSort] = useState("Newest");

  const changeFilterValues = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const sortItems = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  const resetFilter = () => {
    setFilters({})
  }

  return (
    <div>
      <Hotnews/>
      <Navbar />
      <CustomTitle size={25} title="Our Products" />
      <div className='filter-container'>
        <div className='filter'>
          <span className="filter-product-text">Filter Products:</span>
          <select defaultValue="Select Color" name="color" onChange={changeFilterValues}>
            <option disabled>Select Color</option>
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Green</option>
            <option>Yellow</option>
            <option>Other</option>
          </select>
          <select defaultValue="Chose Size" name="size" onChange={changeFilterValues}>
            <option disabled> Chose Size</option>
            <option>Extra Small</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
          <span className='filter-reset' onClick={resetFilter}>
            Reset
          </span>
        </div>
        <div className='filter'>
          <span className="sort-products-text">Sort Products:</span>
          <select defaultValue="Newest" onChange={sortItems}>
            <option value="new"> Newest </option>
            <option value="old">Oldest</option>
            <option value="asc">Price - Higher</option>
            <option value="dsc">Price - Lower</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort}/>
    </div>
  )
}

export default Productlist