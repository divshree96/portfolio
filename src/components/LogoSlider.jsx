import React from 'react';
import './Logoslider.css';
import java from '../assets/java-removebg-preview.png'
import spring from '../assets/spring-removebg-preview.png'
import springboot from '../assets/spring-boot-removebg-preview.png'
import php from '../assets/php-removebg-preview.png'
import python from '../assets/python-removebg-preview.png'
import javascript from '../assets/javascript-removebg-preview.png'
import css from '../assets/css-removebg-preview.png'
import html from '../assets/html-removebg-preview.png'
import react from '../assets/react-removebg-preview.png'
import nodejs from '../assets/nodejs-removebg-preview.png'
import mongodb from '../assets/mongodb-removebg-preview.png'
import mysql from '../assets/mysql-removebg-preview.png'
import docker from '../assets/docker-removebg-preview.png'
import dynamodb from '../assets/dynamodb-removebg-preview.png'
import elastic from '../assets/elastic-removebg-preview.png'
import gcp from '../assets/gcp-removebg-preview.png'
import github from '../assets/github-removebg-preview.png'
import graphql from '../assets/graphql-removebg-preview.png'
import jenkins from '../assets/jenkins-removebg-preview.png'
import kubernetes from '../assets/kubernetees-removebg-preview.png'
import linux from '../assets/linux-removebg-preview.png'
import maven from '../assets/maven-removebg-preview.png'
import nextjs from '../assets/nextjs-removebg-preview.png'
import redis from '../assets/redis-removebg-preview.png'
import sql from '../assets/sql-removebg-preview.png'
import typescript from '../assets/typescript-removebg-preview.png'

const LogoSlider = () => {
  return (
    <>
        <div className="mt-12 mb-32 md:px-14 px-4 max-w-screen-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#442916] mb-12">Technologies I Work With</h2>
            <div className="overflow-hidden">
                <div className="flex space-x-10 animate-slide">
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        <img className='h-24' src={java} alt="image1" />
                        <img className='h-24' src={spring} alt="image2" />
                        <img className='h-24' src={springboot} alt="image3" />
                        <img className='h-24' src={php} alt="image4" />
                        <img className='h-24' src={python} alt="image5" />
                        <img className='h-24' src={javascript} alt="image6" />
                        <img className='h-24' src={css} alt="image7" />
                        <img className='h-24' src={html} alt="image8" />
                        <img className='h-24' src={react} alt="image9" />
                        <img className='h-24' src={nodejs} alt="image10" />
                        <img className='h-24' src={mongodb} alt="image11" />
                    </React.Fragment>
                ))}
                </div>
            </div>
        </div>
        <div className="mt-32 mb-32 md:px-14 px-4 max-w-screen-3xl mx-auto">
            <div className="overflow-hidden">
                <div className="flex space-x-10 animate-slideReverse">
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        <img className='h-24' src={mysql} alt="image15" />
                        <img className='h-24' src={docker} alt="image16" />
                        <img className='h-24' src={dynamodb} alt="image17" />
                        <img className='h-24' src={elastic} alt="image18" />
                        <img className='h-24' src={gcp} alt="image19" />
                        <img className='h-24' src={github} alt="image20" />
                        <img className='h-24' src={graphql} alt="image21" />
                        <img className='h-24' src={jenkins} alt="image22" />
                        <img className='h-24' src={kubernetes} alt="image23" />
                        <img className='h-24' src={linux} alt="image24" />
                        <img className='h-24' src={maven} alt="image25" />
                        <img className='h-24' src={nextjs} alt="image15" />
                        <img className='h-24' src={redis} alt="image16" />
                        <img className='h-24' src={sql} alt="image17" />
                        <img className='h-24' src={typescript} alt="image18" />
                    </React.Fragment>
                ))}
                </div>
            </div>
        </div>
    </>
    
  )
}

export default LogoSlider