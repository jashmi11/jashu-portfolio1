import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const about = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left"><img src={profile_img} alt="" /></div>
                <div className="about-right">
                    <div className="about-para">
                        <p>"Hello! I'm Jashmitha Mandalapu, a passionate tech enthusiast currently pursuing my B.Tech. With a strong foundation in front-end development and a growing interest in AI,</p>
                        <p>. I thrive on solving complex problems and am always eager to learn and innovate. Whether it's through developing intuitive user interfaces or leveraging deep learning models, I'm committed to creating impactful solution</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML &CSS</p> <hr style={{width:"50%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Java Script</p> <hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React,Node Js</p> <hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Java ,Python</p> <hr style={{width:"80%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>600+</h1>
                    <p>HOURS OF CODING</p>
                </div>
            </div>

        </div>
    )
}

export default about
