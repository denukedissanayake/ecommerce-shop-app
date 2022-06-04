import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Hotnews from "../components/Hotnews";
import Navbar from "../components/Navbar";
import { placeOrder } from "../data/place-order";
import { AuthContext } from "../state/context/AuthContext";
import "./styles/Order.css"

const Success = () => {
  const location = useLocation()
  const { user } = useContext(AuthContext);
  const [orderId, setOrderId] = useState(null);
  const stateData = location.state as any;
  const purchasedProducts: any[] = [];

  console.log(stateData.cart.products)

  stateData && stateData.cart.products && stateData.cart.products.forEach((item:any) => {
    purchasedProducts.push({
      productId: item._id,
      quantity: item.itemCount,
      productName: item.name,
      productPrice: item.price,
      productImage: item.image,
      productBrand: item.brand,
      productSize: item.size,
      productColor: item.color,
    })
  });

  useEffect(() => {
    const createOrder = async () => {
      const [responce, error] = await placeOrder(
        user.currentUser.user?.id,
        stateData.data.id,
        purchasedProducts,
        stateData.data.amount,
        stateData.data.billing_details?.address,
        user.currentUser?.accesToken
      );

      if (!error && responce.data?._id) {
        setOrderId(responce.data._id);
      }
    }
    stateData && createOrder();
  }, [stateData, user])

  return (
    <>
      <Navbar />
      <Hotnews/>
      <div className="order-container">
        <div className="order-wrapper">
          <div className="order-succes-message">
            <p>Dear {user.currentUser.user.firstname},</p>
            {stateData?.data?.id ? (orderId ? 
              <p>Your Order has been placed succesfully! The order number is {orderId} . You can track order using order number.</p> :
              <p>Your Order is in progress...Please wait.</p>
             ) : <p>Please do the payment to place the order.</p>}
          </div>
          <div className="order-page-navigation-buttons">
            <Link to="/" className='router-link'>
              <button className="order-page-navigation-button">Back to Home Page</button>
            </Link>
            {stateData?.data?.id && <button className="order-page-navigation-button">Track Your Order</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Success;