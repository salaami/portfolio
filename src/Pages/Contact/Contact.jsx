import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../Animations/TransitionVariants'
import Social from './Social'
import ContactText from './ContactText'
import AnimateContent from '../../Animations/AnimateContent'


export default function Contact() {

    return (
        <motion.div
            className="contact-wrapper"
            initial="inital"
            animate="animate"
            exit="exit"
            variants={TransitionVariants}
        >
            <AnimateContent>
                <ContactText> 
                    <Social />
                </ContactText>
            </AnimateContent>
        </motion.div>
    );
}
