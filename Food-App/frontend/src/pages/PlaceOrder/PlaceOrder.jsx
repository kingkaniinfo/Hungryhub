import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <form className='place_order'>

      <div className='place_order_left'>

        <p className='title'> Delivery Information</p>

        <div className='multi_fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='Email Id' />
        <input type="text" placeholder='Street Name' />

        <div className='multi_fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className='multi_fields'>
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone Number' />

        <button onClick={()=>navigate('*')}>Submit</button>

      </div>

      <div className='place_order_right'>

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
              <button onClick={()=>navigate('*')}>Proceed to Payment</button>
      </div>

      </div>
    </form>
  )
}

export default PlaceOrder