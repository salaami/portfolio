import './Contact.css'
import Social from './Social'
import ContactText from './ContactText'
import { AnimateContent } from '../../Animations/AnimateContent'


export default function Contact() {
  return (
    <>
      <AnimateContent>
        <ContactText> 
          <Social />
        </ContactText>
      </AnimateContent>
    </>
    );
}
