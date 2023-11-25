import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../Animations/TransitionVariants'
import Social from './Social'

export default function Contact() {

    return (
        <motion.div
            className="contact-wrapper"
            animate="animate"
            variants={TransitionVariants}
        >
            <div className="contact-content">
                <h1>Let's Connect</h1>
                <h2>Don't Hesitate to Reach Out</h2>
                <article className="contact-text">
                    If you would like to get in touch, just send me an email.
                    I will get back to you as soon as possible.
                    You can find a link to my GitHub page for more coding topics.
                    To learn more about my professional and educational background,
                    you can visit my LinkedIn and Xing profiles.
                </article>
                <Social />
            </div>
        </motion.div>
    );
}
