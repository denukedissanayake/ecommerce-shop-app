import { useCallback, useEffect, useState } from 'react'
import Productitem from './Productitem'
import './styles/Products.css'
import { getProducts } from '../data/get-products'
import {productType} from '../utils/Types'
import InfoBanner from './InfoBanner'
import LoadingSpinner from './LoadingSpinner'

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
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    const [retrivedProducts, error] = await getProducts(category);
    setIsLoading(false)
  
    if (error) {
      setProducts([]);
    } else {
      setProducts(retrivedProducts);
    }
  }, [category])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

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
      {isLoading ? <LoadingSpinner /> : 
        category ? (
          filteredProducts.length ? 
            filteredProducts.map(item => (
              <Productitem key={item._id} item={item} />
            )) : <InfoBanner message='No Products Available' type="WARNING"/>
          ): products.slice(0, 8).map(item => (
                <Productitem key={item._id} item={item} />
        ))
      }

    </div>
  )
}

export default Products