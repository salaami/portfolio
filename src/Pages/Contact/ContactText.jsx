import React from 'react'
import './ContactText.css'
import Social from './Social'


export default function ContactText() {
    return (
        <article className="contact-text">
            <h1>Let's Connect</h1>
            <h2>Feel free to Reach Out</h2>
            <p className="contact-paragraph">
                If you would like to get in touch, just send me an email.
                I will get back to you as soon as possible.
                You can find a link to my GitHub page for more coding topics.
                To learn more about my professional and educational background,
                you can visit my LinkedIn and Xing profiles.
            </p>
            <Social />
        </article>
    )
}
