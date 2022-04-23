import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './styles/Cart.css'
import StripeCheckout from 'react-stripe-checkout';
import { makePayments } from '../data/make-payments'
import { useNavigate } from 'react-router-dom';

type CartProductProps = {
    image: string,
    productName: string,
    productID: string,
    productPrice: number,
    productQuantity: number,
    productColor?: string | null
}

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [stripeToken, setStripeToekn] = useState<any | null>(null);
    const navigate = useNavigate();

    const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
    const shippingCost = 10;
    const discount = 2;
    const total = cart.total + shippingCost + discount;

    const onToken = (token: any) => {
        setStripeToekn(token);
    }

    useEffect(() => {
        const makePayment = async () => {
            try {
                const [paymentDetails, error] = await makePayments(stripeToken.id as string, total);
                console.log(paymentDetails || error)

                if (paymentDetails) {
                    navigate("/success")
                }
            } catch (e) {
                console.log(e);
            }
        }
        makePayment();
    }, [stripeToken])

    const CartProduct = ({image, productName, productID, productPrice, productQuantity, productColor} :CartProductProps) => {
        return(
            <div className='cart-wrapper' style={{ display: "flex", margin: "10px" }}>
                <div className='cart-product-details'>
                    <div>
                        <img className='cart-product-details-image' src={image} />
                    </div>
                    <div className='cart-product-details-info'>
                        <p className='cart-product-details-info-name'><b>Product: </b>{productName}</p>
                        <p className='cart-product-details-info-id'><b>Product ID: </b>{productID}</p>
                        {productColor ? <p className='cart-product-details-info-color'><b>Product Color: </b>{productColor}</p> : null}
                        
                    </div>
                </div>
                 <div className='cart-price-details'>
                    <div className='cart-price-details-amount'>
                        <Remove className='cart-price-details-amount-icon'/>
                        <span className='cart-price-details-amount-number'>{productQuantity}</span>
                        <Add className='cart-price-details-amount-icon'/>
                    </div>
                    <div className='cart-price-details-price'>
                        <span>$ {productPrice*productQuantity}</span>
                    </div>
                </div>
            </div>
        )
    }

    const SummaryItem = ({topic, price, isTotal} : {topic: string, price: number, isTotal?: boolean} ) => {
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
                  {cart.products?.length ? cart.products.map((product:any) => (
                      <CartProduct
                          key={product._id}
                          image={product.image}
                          productName = {product.name}
                          productID={product._id}
                          productPrice={product.price}
                          productQuantity={product.itemCount}
                          productColor={product.color}
                      />
                  )) :
                      <p>Cart is empty!!!</p>
                  }
              </div>
                {!cart.products.length ? (
                    <div className='purchased-product-summary'>
                        <h1 className="summary-title">Order Summary</h1>
                        <SummaryItem topic="Sub Total" price={cart.total}/>
                        <SummaryItem topic="Shipping Cost" price={shippingCost} />
                        <SummaryItem topic="Discount" price={discount} />
                        <SummaryItem isTotal={true} topic="Total" price={cart.total + shippingCost - discount} />
                        <StripeCheckout
                          name="Denuke's Palace"
                          billingAddress
                          shippingAddress
                          description='Easy pay with Ninja Pay'
                          amount={cart.total + shippingCost - discount}
                          stripeKey={STRIPE_KEY as string}
                          token={onToken}
                        >
                            <button className='summary-checkout-button'>CHECKOUT</button>
                        </StripeCheckout>
                    </div>
                ) : null }
          </div>
      </div>
  )
}

export default Cart