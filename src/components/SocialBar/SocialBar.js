import './SocialBar.css'
import React, {useState} from 'react'
import { TiSocialLinkedin } from 'react-icons/ti' 
import { TiSocialGithub } from 'react-icons/ti' 
import { TiSocialTwitter} from 'react-icons/ti' 
import { CgMail } from 'react-icons/cg' 
import { FaXing } from 'react-icons/fa'

var Socialbar = () =>{
    return (
        <div className="social-bar">
            <a href="mailto:salemsalleh@gmail.com" target="_blank" className="social-icon">
                <CgMail />
            </a>
            <a href="https://github.com/salaami" target="_blank" className="social-icon">
                <TiSocialGithub />
            </a>
            <a href="https://www.linkedin.com/in/salem-salleh-1a4828a8" target="_blank" className="social-icon">
                <TiSocialLinkedin />
            </a>
            <a href="https://www.xing.com/profile/Salem_Salleh" target="_blank" className="social-icon">
                <FaXing />
            </a>
        </div>
    )
}
export default Socialbar;
