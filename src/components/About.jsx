import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn } from '../variants';
import logo from "../assets/divyaFull.png";

const About = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="about">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                >
                    <img src={logo} alt="divya" className="lg:h-[500px]" />
                </motion.div>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="md:w-3/5"
                >
                    <h2 className="md:text-7xl text-4xl font-bold text-[#442916] mb-6 leading-relaxed">
                        Hello, I'm Divya Shree!
                    </h2>
                    <p className="text-[#966348] text-2xl mb-8">
                        I'm a passionate <span className="text-[#442916]" >software engineer</span> who thrives on solving complex problems and bringing ideas to life through code. 
                        I find joy in the process of creating innovative solutions, whether it's developing intuitive user interfaces, 
                        building robust backend systems, or exploring new technologies. My journey in software engineering is driven 
                        by a relentless curiosity and a love for continuous learning, and I'm always eager to collaborate with others 
                        to turn concepts into impactful digital experiences.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  );
}

export default About;
