import React from 'react'
import './Landing.css'
import landingHeading from '../../assets/gradation.png'
import landingLogo from '../../assets/Group.png'
import { Link } from 'react-router-dom'


function Landing() {
    return (
        <div className="landing">
            <div className="landing__heading">
                <img src={landingHeading} alt="alphametrica" />
            </div>

            <div className="landing__logo">
                <img src={landingLogo} alt="landingLogo" />
            </div>

           
            <div className="desc">
                Stay on the top <span>of your finance</span>
            </div>

           <div className="subDesc">
                Lorem ipsum dolor sit amet, <span>consetetur sadipscing elitr, sed diam </span>
            </div>
          

            <div className="landing__buttons">
                    <Link to="/register" style={{textDecoration:"none"}} >
                    <div className="navSignup pointer">
                    가입하기
                    </div>
                    </Link>

                   <Link to="/login" style={{textDecoration:"none"}}>
                   <div className="navLogin pointer">
                    로그인
                    </div>
                   </Link>
            </div>
        </div>
    )
}

export default Landing
