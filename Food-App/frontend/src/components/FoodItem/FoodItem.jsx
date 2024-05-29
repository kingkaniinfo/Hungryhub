import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    // old state code
  // const [itemCount, setItemCount] = useState(0)

  const {cartItem,addCart,removeCart} = useContext(StoreContext)

  return (
    <div className='food_item'>
        <div className='food_item_img_container'>
            <img className='food_item_image' src={image} alt="" />
            

          {/* old code */}

            {/* {!itemCount
            ?<img className='add' onClick={()=>setItemCount(pre=>pre+1)} src={assets.add_icon_white} alt=''/>
            :<div className='food_item_counter'>
              <img onClick={()=>setItemCount(pre=>pre-1)} src={assets.remove_icon_red} alt="" />
              <p>{itemCount}</p>
              <img onClick={()=>setItemCount(pre=>pre+1)} src={assets.add_icon_green} alt="" />
              </div>} */}

              {/* cartitem has {} */}

            {!cartItem[id]
            ?<img className='add' onClick={()=>addCart(id)} src={assets.add_icon_white} alt=''/>
            :<div className='food_item_counter'>
              <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItem[id]}</p>
              <img onClick={()=>addCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food_item_info">
           <div className='food_item_name_rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
           </div>
        
        <p className="food_item_desc">{description}</p>
        <p className='food_item_price'>	&#8377;{price}</p>
        </div>
    </div>
  )
}

export default FoodItem