import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../state/context/CartContext'
import './styles/Cart.css'
import StripeCheckout from 'react-stripe-checkout';
import { makePayments } from '../data/make-payments'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hotnews from '../components/Hotnews'
import Footer from '../components/Footer'
import { AuthContext } from '../state/context/AuthContext'
import InfoBanner from '../components/InfoBanner'

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [stripeToken, setStripeToekn] = useState<any | null>(null);
    const [isPaymentError, setIsPaymentError] = useState<boolean>(false);
    const navigate = useNavigate();

    const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
    const shippingCost : number = 10;
    const discount: number = 2;
    const total : number = (cart.total + shippingCost - discount).toFixed(2) as any;

    const onToken = (token: any) => {
        setStripeToekn(token);
    }

    useEffect(() => {
        const makePayment = async () => {
            try {
                const [paymentDetails, error] = await makePayments(stripeToken.id as string, total, user?.currentUser?.accesToken);

                if (paymentDetails.status === 200 && paymentDetails.data.status === "succeeded") {
                    navigate("/order", {
                        state: {
                            data: paymentDetails.data,
                            cart : cart
                        } as any
                    })
                }

                if (paymentDetails.status === 200 && paymentDetails.data.status !== "succeeded") {
                    setIsPaymentError(true);
                }

            } catch (e) {
                setIsPaymentError(true);
            }
        }
        user.currentUser && stripeToken && makePayment();
    }, [stripeToken])

    const removeFromCart = (product : any) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload : {...product}
        })
    }

    const addMoreItems = (product: any) => {
        dispatch({
            type: "INCREACE_PRODUCT_COUNT",
            payload : {...product}
        })
    }

    const removeItems = (product: any) => {
        if (product.itemCount > 1) {
            dispatch({
                type: "DECREACE_PRODUCT_COUNT",
                payload : {...product}
            })
        }
    }

    const CartProduct = (product: any) => {
        return(
            <div className='cart-wrapper' style={{ display: "flex", margin: "10px" }}>
                <div className='cart-product-details'>
                    <div>
                        <img className='cart-product-details-image' src={product.product.image} />
                    </div>
                    <div className='cart-product-details-info'>
                        <p className=''><b>Product: </b>{product.product.name}</p>
                        <p className=''><b>Product Description: </b>{product.product.description}</p>
                        <p className=''><b>Price: </b>${product.product.price}</p>
                        <p className=''><b>Total Price: </b>${product.product.price*product.product.itemCount}</p>
                        {product.product.productColor ? <p className='cart-product-details-info-color'><b>Product Color: </b>{product.product.color}</p> : null}
                        
                    </div>
                </div>
                 <div className='cart-price-details'>
                    <div className='cart-price-details-amount'>
                        <span onClick={() => removeItems(product.product)} >
                            <Remove className='cart-price-details-amount-icon'/>
                        </span>
                        <span className='cart-price-details-amount-number'>{product.product.itemCount}</span>
                        <span onClick={() => addMoreItems(product.product)}>
                            <Add className='cart-price-details-amount-icon'/>
                        </span>
                    </div>
                    <div className='remove-item-from-cart' onClick={() => removeFromCart(product.product)}>
                        <span><b>REMOVE</b></span>
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
        <>
            <Navbar />
            <Hotnews/>
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
                        {cart.products?.length ? cart.products.map((product: any) => (
                            <CartProduct
                                key={product._id}
                                product={product}
                            />
                        )) :
                            <InfoBanner message="CART IS EMPTY. HURRY UP! SHOP NOW!" type="INFO" alignment='CENTER'/>
                        }
                    </div>
                    {cart.products.length ? (
                        <div className='purchased-product-summary'>
                            <h1 className="summary-title">Order Summary</h1>
                            <SummaryItem topic="Sub Total" price={(cart.total).toFixed(2)} />
                            <SummaryItem topic="Shipping Cost" price={shippingCost} />
                            <SummaryItem topic="Discount" price={discount} />
                            <SummaryItem isTotal={true} topic="Total" price={total} />
                            {user.currentUser ?
                                <StripeCheckout
                                    name="Denuke's Palace"
                                    billingAddress
                                    shippingAddress
                                    description='Easy pay with Ninja Pay'
                                    amount={total}
                                    stripeKey={STRIPE_KEY as string}
                                    token={onToken}
                                >
                                    <button className='summary-checkout-button'>CHECKOUT</button>
                                </StripeCheckout> :

                                <Link to="/auth" className='router-link'>
                                    <button className='summary-checkout-button'>LOGIN TO CHECKOUT</button>
                                </Link>
                            }
                            {isPaymentError ? <InfoBanner message="PAYMENET ERROR" type="ERROR"/> : null}
                        </div>
                    ) : null}
                </div>
            </div>
            <Footer/>
        </>
  )
}

export default Cart