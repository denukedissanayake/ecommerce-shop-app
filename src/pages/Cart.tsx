import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { fontSize } from '@mui/system'
import './styles/Cart.css'

type CartProductProps = {
    image: string,
    // productName: string,
    // productID: string,
    // productPrice: string,
    // productQuantity: string,
}

const Cart = () => {

    const CartProduct = ({image} :CartProductProps) => {
        return(
            <div style={{ display: "flex", margin: "10px" }}>
                <div className='cart-product-details'>
                    <img className='cart-product-details-image' src={image} />
                    <div className='cart-product-details-info'>
                        <p className='cart-product-details-info-name'><b>Product: </b>Black Nike Shoe</p>
                        <p className='cart-product-details-info-id'><b>Product ID: </b>DGGYTND868998</p>
                        <p className='cart-product-details-info-color'><b>Product Color: </b>Black</p>
                    </div>
                </div>
                 <div className='cart-price-details'>
                    <div className='cart-price-details-amount'>
                        <Remove className='cart-price-details-amount-icon'/>
                        <span className='cart-price-details-amount-number'>2</span>
                        <Add className='cart-price-details-amount-icon'/>
                    </div>
                    <div className='cart-price-details-price'>
                        <span>$ 9.99</span>
                    </div>
                </div>
            </div>
        )
    }

    const SummaryItem = ({topic, price, isTotal} : {topic: string, price: string, isTotal?: boolean} ) => {
        return (
            <div className='summary-item'>
                <p style={isTotal ? { fontWeight: "bold" ,fontSize: "25px" }: {}} className='summary-item-title'>{topic}</p>
                <p style={isTotal ? { fontWeight: "bold" ,fontSize: "25px" }: {}} className='summary-item-price'>${price}</p>
            </div>
        )
    }

  return (
      <div className='cart-container'>
          <h1 className="cart-title">Shopping Items</h1>
          <div className='cart-top-container'>
              <button className='top-button continue-shoping-button'>Continue Shopping</button>
              <span className='top-text'>Shopping Cart(2)</span>
              <span className='top-text'>My Wishlist(2)</span>
              <button className='top-button checkout-button'>Checkout</button>
          </div>
          <div className='cart-bottom-container'>
              <div className='purchased-product-info'>
                  <CartProduct image="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                  <CartProduct image="https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw52cd15a2/images/2MM15C9120-F.jpg?sw=600&sfrm=jpeg"/>
                  <CartProduct image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/109/10967/10967513.jpg"/>
              </div>
              <div className='purchased-product-summary'>
                  <h1 className="summary-title">Order Summary</h1>
                  <SummaryItem topic="Sub Total" price="9.9"/>
                  <SummaryItem topic="Shipping Cost" price="5" />
                  <SummaryItem topic="Discount" price="2" />
                  <SummaryItem isTotal={true} topic="Total" price="12.9" />
                  <button className='summary-checkout-button'>CHECKOUT</button>
              </div>
          </div>
      </div>
  )
}

export default Cart