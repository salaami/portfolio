import './SocialBar.css'
import React from 'react'
import { TiSocialLinkedin } from 'react-icons/ti' 
import { TiSocialGithub } from 'react-icons/ti' 
import { CgMail } from 'react-icons/cg' 
import { FaXing } from 'react-icons/fa'

export default function Socialbar() {
    return (
        <div className="social-bar">
            <a href="mailto:salemsalleh@gmail.com" rel="noreferrer" className="social-icon">
                <CgMail />
            </a>
            <a href="https://github.com/salaami" rel="noreferrer" className="social-icon">
                <TiSocialGithub />
            </a>
            <a href="https://www.linkedin.com/in/salem-salleh-1a4828a8" rel="noreferrer" className="social-icon">
                <TiSocialLinkedin />
            </a>
            <a href="https://www.xing.com/profile/Salem_Salleh" rel="noreferrer" className="social-icon">
                <FaXing />
            </a>
        </div>
    )
};
