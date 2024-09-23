import React from 'react'
import northeastern from '../assets/northeastern-removebg-preview.png'
import xavier from '../assets/XavierRanchi-removebg-preview.png'

const Education = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="education">
        <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold text-[#442916] mb-2">Education</h2>
            <p className="text-[#e2898e] italic font-medium mx-auto px-4">"Intellectual growth should commence at birth and cease only at deadth" - Albert Einstein</p>
        </div>
        {/* pricing cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols2 gap-10 mt-20 md:w-11/12 mx-auto'>
            <div className='gradientBg py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                <h3 className='text-3xl font-bold text-center text-[#442916]'>Northeastern University</h3>
                <div className='flex justify-center items-center'>
                    <img src={northeastern} alt="about" className='w-1/2' />
                </div>
                <h3 className='text-3xl font-bold text-center text-[#7b4045]'>
                    Master's in Computer Software Engineering
                </h3>
                <h4 className='text-xl font-bold text-center text-[#e48a8f]'>
                    2022 - 2024
                </h4>
                <p className='text-[#966348] text-lg mt-4'>
                    <span className='font-bold'>Course Work : </span>
                    Concepts of Object-Oriented Design, Data Structures and Algorithms, Enterprise Software Design,
                    Web Design and User Experience, Cloud Computing and Network Technologies, Software Quality Control and Management,
                    Advanced Big Data App/Indexing, and Design Patterns
                </p>
            </div>
            <div className='gradientBg py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                <h3 className='text-3xl font-bold text-center text-[#442916]'>St. Xavier's College</h3>
                <div className='flex justify-center items-center'>
                    <img src={xavier} alt="about" className='w-1/2 h-[350px]' />
                </div>
                <h3 className='text-3xl font-bold text-center text-[#7b4045]'>
                    Bachelor of Science in Information Technology
                </h3>
                <h4 className='text-xl font-bold text-center text-[#e48a8f]'>
                    2015 - 2018
                </h4>
                <p className='text-[#966348] text-lg mt-4'>
                    <span className='font-bold'>Course Work : </span>
                    Concepts of Object-Oriented Programming with Java & C/C++, Data Structures and Algorithms, 
                    Web Development with HTML, CSS & JavaScript, Computer System Architecture, Operating System, 
                    Computer Networks, Discrete Structure, Database Management System, Software Engineering,
                    Internet Technologies, Artifical Intelligence, Operational Research, Theory of Computation, 
                    and Ecommerce and PHP Development
                </p>
            </div>
        </div>
    </div>
  )
}

export default Education