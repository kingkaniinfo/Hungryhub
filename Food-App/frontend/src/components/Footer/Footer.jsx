import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer_content'>
            <div className='footer_content_left'>
                <img className='footer_logo' src={assets.hh_logo} height={40} alt="" />
                <p>Our food order website is a comprehensive platform designed to enhance the online food ordering experience. Built with React.js, it offers a seamless, user-friendly interface that allows customers to browse, select, and order their favorite meals effortlessly. </p>
                <div className='footer_social_icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />

                </div>
            </div>
            <div className='footer_content_center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className='footer_content_right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 990 345 9020</li>
                    <li>hungryhub@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer_copyright'>
            Copyright 2024 &copy; hungryhub.com  All Right Reserved.
        </p>
    </div>
  )
}

export default Footer