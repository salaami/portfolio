import { TiSocialLinkedin } from 'react-icons/ti' 
import { TiSocialGithub } from 'react-icons/ti' 
import { CgMail } from 'react-icons/cg' 
import { FaXing } from 'react-icons/fa'

const SocialBarData = [
    {
        Link: "mailto:salemsalleh@gmail.com",
        Cname: "social-icon",
        Icon: <CgMail />
    },
    {
        Route: "https://github.com/salaami",
        Cname: "social-icon",
        Icon: <TiSocialGithub />
    },
    {
        Route: "https://www.linkedin.com/in/salem-salleh-1a4828a8",
        Cname: "social-icon",
        Icon: <TiSocialLinkedin />
    },
    {
        Route: "https://www.xing.com/profile/Salem_Salleh",
        Cname: "social-icon",
        Icon: <FaXing />
    },
]
export { SocialBarData }