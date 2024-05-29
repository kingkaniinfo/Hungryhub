import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
// import { FaSearch } from 'react-icons/fa'
// import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {

    // const [ menu ,setMenu ] =useState("")

    // const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to={'/'}>
        <img src={assets.hh_logo} alt="logo_img" height={40} className='logo'/>
        </Link>
        <ul className='navbar_menu'>
            
            {/* <Link to='/' onClick={()  => setMenu("home")} className={menu=="home"?"active":""} >Home</Link>
            <a href='#explore_menu' onClick={()  => setMenu("menu")} className={menu=="menu"?"active":""} >Menu</a>
            <a href='#app_download' onClick={()  => setMenu("mobile")} className={menu=="mobile"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()  => setMenu("contact")} className={menu=="contact"?"active":""}>Contact Us</a> */}

            <Link to='/'>Home</Link>
            <a href='#explore_menu'>Menu</a>
            <a href='#app_download'>Mobile-App</a>
            <a href='#footer'>Contact Us</a>
        </ul>
        <div className='navbar_right'>
            <div className='navbar_search'>
            <input type="search" placeholder='Search..' />
            <img src={assets.search_icon} alt="" />
            {/* <FaSearch className='react_icon'/> */}
            </div>
            
            
            
            <div className='navbar_search_icon'>
                <Link to={'/cart'}>
                <img src={assets.basket_icon} alt="" />

                </Link>
                {/* <div className={getTotalCartAmount()==0?"":'dot'}></div> */}
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar