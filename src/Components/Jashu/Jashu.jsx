import React from 'react'
import './Jashu.css'
import profile_img from '../../assets/profile_img.jpg'

const Jashu = () => {
  return (
    <div id='home' className='jashu'>
      <img src={profile_img} alt="jashu" />
      <h1><span>I'm Jashmitha Mandalapu,</span> Mern Stack Developer </h1>
      <p>I am a fellow at NXTwave academy,I am passionate about technologies and currently learning and developing skills to become a top notch professional. </p>
      <div className="jashu-action">
        <div className="jashu-connect"><AnchorLink className = 'anchor-link' offset ={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="jashu-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Jashu
