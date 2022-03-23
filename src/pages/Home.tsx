import Categories from '../components/Categories';
import Hotnews from '../components/Hotnews';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hotnews/>
      <Navbar/>
      <Slider />
      <Categories />
      <Products />
      <Newsletter/>
    </div>
  )
}

export default Home