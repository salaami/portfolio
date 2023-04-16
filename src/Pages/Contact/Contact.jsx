import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../AnimatedRoute/TransitionVariants'
import Social from './Social'

export default function Contact() {

    return (
        <motion.div
            className="contact-content"
            animate="animate"
            variants={TransitionVariants}
        >
            <h1>SAY HELLO</h1>
            <article className="contact-text">
                If you would like to get in touch, just send me an email.
                I will get back to you as soon as possible.
                Additionally, you can find a link to my GitHub page for more coding topics.
                To learn more about my educational and professional background,
                you can visit my LinkedIn and Xing profiles.
            </article>
            <Social />
        </motion.div>
    );
}
