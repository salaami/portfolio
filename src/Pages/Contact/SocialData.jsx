import { TiSocialLinkedin } from 'react-icons/ti'
import { TiSocialGithub } from 'react-icons/ti'
import { CgMail } from 'react-icons/cg'
import { FaXing } from 'react-icons/fa'

const SocialData = [
    {
        Id: 0,
        Name: "email",
        Link: "mailto:salemsalleh@gmail.com",
        Cname: "social-icon",
        Icon: <CgMail />
    },
    {
        Id: 1,
        Name: "github",
        Link: "https://www.github.com/salaami",
        Cname: "social-icon",
        Icon: <TiSocialGithub />
    },
    {
        Id: 2,
        Name: "linkedin",
        Link: "https://www.linkedin.com/in/salem-salleh-1a4828a8",
        Cname: "social-icon",
        Icon: <TiSocialLinkedin />
    },
    {
        Id: 3,
        Name: "xing",
        Link: "https://www.xing.com/profile/Salem_Salleh",
        Cname: "social-icon",
        Icon: <FaXing />
    },
]
export { SocialData }