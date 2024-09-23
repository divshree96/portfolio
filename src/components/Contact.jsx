import React, { useState }  from 'react'
import emailjs from 'emailjs-com';
import hi from '../assets/hi-removebg-preview.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send the email using EmailJS
        emailjs.sendForm(
          'service_4y9dero', // Replace with your Service ID
          'template_cea3bqe', // Replace with your Template ID
          e.target,
          'b8VVYwJXu9kzlVWjJ' // Replace with your Public Key
        )
          .then((result) => {
            alert('Message sent successfully!');
          }, (error) => {
            alert('Failed to send the message, please try again later.');
          });
    
        // Clear form fields after submission
        setFormData({
          email: '',
          subject: '',
          message: ''
        });
    };

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="contact">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-2/5">
                    <img src={hi} alt="about" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="md:text-3xl text-xl font-bold text-[#7b4045] mb-5 leading-normal flex items-center flex-wrap">
                        Thanks for checking out my profile!
                        <span class="text-[#e48a8f]">
                            If you’ve liked what you’ve seen so far, feel free to reach out—I’d love to connect!
                        </span> 
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="p-2 border-b border-[#7b4045] bg-transparent"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="p-2 border-b border-[#7b4045] bg-transparent"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="p-2 border-b border-[#7b4045] bg-transparent"
                        />
                        <button
                            type="submit"
                            className="bg-[#ebbab6] text-[#7b4045] p-2 rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact