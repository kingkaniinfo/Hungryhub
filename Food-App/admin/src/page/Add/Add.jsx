import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add'>
        <form action="#" className='flex_col'>
            <div className='add_img_upload flex_col'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={assets.upload_area} alt="" />
                </label>
                <input type="file" id='image' hidden required />
            </div>
            <div className='add_porduct_name flex_col '>
                <p>Product Name</p>
                <input type="text" name='name' placeholder='Type Here'  />
            </div>
            <div className='add_product_description flex_col'>
                <p>Product Description</p>
                <textarea name="description" rows='6' placeholder='write content here'></textarea>
            </div>
            <div className='add_category_price'>
                <div className='add_category flex_col'>
                    <p>Product Category</p>
                    <select name="category" id="">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>

                    </select>
                </div>
                <div className='add_price flex_col'>
                    <p>Product Price</p>
                    <input type="number" name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add_btn'>Add</button>
        </form>
    </div>
  )
}

export default Add