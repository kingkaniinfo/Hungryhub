import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

   
    console.log("Current State",category);

  return (
    <div className='explore_menu' id='explore_menu'>
        <h1>Expore Our Menu</h1>
        <p className='explore_menu_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sequi! Maiores aspernatur autem laborum vero distinctio sequi magnam maxime excepturi placeat perspiciatis rem vitae, officia cupiditate earum aut odio ex.</p>
        <div className='explore_menu_list'>
            {menu_list.map((m,i)=>{

                const hanldClick = ()=>{

                    setCategory( previouSate => previouSate == m.menu_name
                                                               ?"All"
                                                               :m.menu_name)

                }
                return (
                    <div onClick={hanldClick} key={i} className='explore_menu_list_item'>
                        <img className={category == m.menu_name?"active":""} src={m.menu_image} alt="menu_image" />
                        <p>{m.menu_name}</p>

                    </div>
                )
            })}
        </div>
        <hr/>

    </div>
  )
}

export default ExploreMenu