import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState]=useState("Sign up")
  return (
    <div className='login_popup'>
        <form className='login_popup_container'>
            <div className='login_popup_title'>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login_popup_input'>

                {/* check the condition in state */}

                {currentState=="Login"?<></>:<input type="text" placeholder='Enter Your Name' required/>}
                <input type="email" placeholder='Enter Your E-mail' required />
                <input type='password' placeholder='* * * * * * * *' required />

            </div>
            <button>{currentState=="Sign Up"?"Create Account":"Login"}</button>
            <div className='login_popu_condtion'>
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState=="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
           
        </form>
    </div>
  )
}

export default LoginPopup