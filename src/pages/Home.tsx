import Categories from '../components/Categories';
import CustomTitle from '../components/CustomTitle';
import Footer from '../components/Footer';
import Hotnews from '../components/Hotnews';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <Hotnews/>
      <Slider />
      <CustomTitle size={40} title={"Popular Categories - Explore Now"}/>
      <Categories />
      <CustomTitle size={30} title={"Trending Items - Limited Stock Only!"}/>
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default Home