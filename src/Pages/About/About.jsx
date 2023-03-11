import React from "react"
import "./About.css"
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      className="about-content"
      initial="inital"
      animate="animate"
      exit="exit"
      variants={TransitionVariants}
    >
      <h2>ABOUT</h2>
      <article>
        <p>
          My journey started as a student of economics and business. 
          My interest was piqued by an introductory programming class,
          at a time when I was largely bored by my business courses.
          On the side I was earning some money as a working student.
          My work largley consisted of tedious reporting responsibilities.
          Before I took a Business Intelligence and Data Mining class,
          I was executing my tasks just like my predecessors did.
          But now I was empowered to challenge the status quo
          and escape the endless cycle of copying and pasting in Microsoft Excel.
          Drawn from these experiences and strengthened by the momentum the industry gained at that time
          I decided to redirect my career towards the data space.
          Hence I wrote my thesis at the department of business informatics.
          My first full-time job was as a system manager at a media agency.
          While I was mainly busy with maintaing media tools and reporting tasks 
          I quickly got in touch with the Business Intelligence department.
          Eventually the opportunity arouse to become a part of them.
          Starting out I was using relational data base systems 
          to mitigate the reporting efforts of my employer.
          My tasks started to shift as our infrastructure underwent significant improvements.
          Data provisioning became less relevant while data integration was gaining importance.
          This was where learing curve got a lot steeper.
          I was learning about workflows and technologies I never thought I would be using. 
          And now I am truly grateful to work in an environment 
          that encourages me to constantly learn new things and develop myself.
        </p>
      </article>
    </motion.div>
  );
}
