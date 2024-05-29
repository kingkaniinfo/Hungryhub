import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Cart = () => {

  const {
    food_list,
    cartItem,
    setCartItem,
    addCart,
    removeCart,
    getTotalCartAmount} = useContext(StoreContext)

    const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className='cart_item'>
        <div className='cart_item_title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      {food_list.map((item,index)=>{
        if(cartItem[item._id]>0){
          return(
            <>
              <div className='cart_item_title cart_item_items' key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>&#8377;{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>&#8377;{item.price*cartItem[item._id]}</p>
                <p onClick={()=>removeCart(item._id)} className='cross'><img src={assets.delete_icon} alt="" /></p>
              </div>
              <hr />
            </>
          )
        }

      })}
      </div>

{/* cart total details */}

      <div className='cart_bottom'>
          <div className='cart_total'>
            <h2>Cart Total</h2>
            <div>
                <div className='cart_total_detail'>
                  <p>SubTotal</p>
                  <p>&#8377;{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart_total_detail'>
                  <p>Delivery Fee</p>
                  <p>&#8377;{getTotalCartAmount()==0?0:20}</p>
                </div>
                <hr />
                <div className='cart_total_detail'>
                  <b>Total</b>
                  <b>&#8377;{getTotalCartAmount()==0?0:getTotalCartAmount()+20}</b>
                </div>
              </div>
              <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
          </div>
          {/* cart promocafe */}
          <div className='cark_promocode'>
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className='cart_promocode_input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart