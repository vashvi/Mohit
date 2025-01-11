import React from 'react'
import "./About.css"
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { Link } from 'react-scroll';


export default function About() {
  return (
    <div className='about' id='about'>
        <motion.section 
        variants={fadeIn({ direction: "right", delay: 0.2 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className='left'>
          <img src='WhatsApp Image 2025-01-11 at 12.04.53_8523c418.jpg' alt='vashvi'/>    
        </motion.section>
        <motion.section 
                variants={fadeIn({ direction: "left", delay: 0.2 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className='right'>
          <div>
            <span>I AM A RESEARCH ANALYST</span>
            <h1>Hi! My name is <span>Mohit Gupta</span></h1>
            <h3>I am a passionate college student pursuing my bachelor's in Biotechnology, with a strong interest in scientific exploration. Alongside my studies, I work as a Research Analyst, combining academic knowledge with practical research skills to analyze data, uncover insights, and contribute to impactful solutions in science and beyond.</h3>
            <button><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>What I do</Link></button>
          </div>       
        </motion.section>
    </div>
  )
}
