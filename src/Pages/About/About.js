import React from "react"
import "./About.css"
import Header from "../../components/Header/Header"
import Tongue from './Charts/Tongue'
import Language from './Charts/Language'
import Framework from './Charts/Framework'
import Footer from "../../components/Footer/Footer"
import { motion } from "framer-motion"
import { PageVariants } from "../../components/Animations/PageVariants"
import { PageTransition } from "../../components/Animations/PageTransition"

export default function About() {

  return (
    <div>
      <Header />
      <main>
        <motion.div 
          className="about-content"
          variants={PageVariants}
          transition={PageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1>ABOUT</h1>
          <article>
            <p>
              My journey started as a student of economics and business. <br/>
              My interest was piqued by an introductory programming class,<br/>
              at a time when I was largely bored by my business courses.<br/>
              On the side I was earning some money as a working student.<br/>
              My work largley consisted of tedious reporting responsibilities.<br/>
              Before I took a Business Intelligence and Data Mining class,<br/>
              I was executing my tasks just like my predecessors did.<br/>
              But now I was empowered to challenge the status quo<br/>
              and escape the endless cycle of copying and pasting in Microsoft Excel.<br/>
              Drawn from these experiences and strengthened by the momentum the industry gained at that time<br/>
              I decided to redirect my career towards the data space.<br/>
              Hence I wrote my thesis at the department of business informatics.<br/>
              My first full-time job was as a system manager at a media agency.<br/>
              While I was mainly busy with maintaing media tools and reporting tasks <br/>
              I quickly got in touch with the Business Intelligence department.<br/>
              Eventually the opportunity arouse to become a part of them.<br/>
              Starting out I was using relational data base systems <br/>
              to mitigate the reporting efforts of my employer.<br/>
              My tasks started to shift as our infrastructure underwent significant improvements.<br/>
              Data provisioning became less relevant while data integration was gaining importance.<br/>
              This was where learing curve got a lot steeper.<br/>
              I was learning about workflows and technologies I never thought I would be using. <br/>
              And now I am truly grateful to work in an environment <br/>
              that encourages me to constantly learn new things and develop myself.
            </p>
          </article>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
