import { useCallback, useEffect, useState } from 'react'
import Productitem from './Productitem'
import './styles/Products.css'
import { getProducts } from '../data/get-products'
import {productType} from '../utils/Types'

type ProductPropsType = {
  category?: string | "",
  sort?: string | "",
  filters?: {
    size: string,
    color: string
  } | {}
}


const Products = ({ category, sort, filters }: ProductPropsType) => {
  const [products, setProducts] = useState<productType[] | []>([]);
  const [filteredProducts, setFilteredProducts] = useState<productType[] | []>([]);
  const [sortProducts, setSortProducts] = useState<productType[] | []>([]);

  const fetchProducts = useCallback(async () => {
    const [retrivedProducts, error] = await getProducts(category);
    if (error) {
      setProducts([]);
    } else {
      setProducts(retrivedProducts);
    }
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [])

  useEffect(() => {
    filters &&
    setFilteredProducts(
      products?.filter((item : any) => Object.entries(filters!).every(([key, value]) => (
        item[key.toLowerCase()].includes(value.toLowerCase())    
      )))
    )
  }, [filters, products])

  useEffect(() => {
    if (sort === 'new') {
      setFilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt))
    }
    if (sort === 'old') {
      setFilteredProducts((prev) => [...prev].sort((a,b) => b.createdAt - a.createdAt))
    }
    if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price))
    }
    if (sort === 'dsc') {
      setFilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price))
    }
  }, [sort])
  
  return (
      <div className='products-container'>
          {filteredProducts.map(item => (
              <Productitem key={item._id} item={item} />
          ))}
    </div>
  )
}

export default Products