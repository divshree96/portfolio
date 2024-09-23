import React from 'react'
import validity from '../assets/validity.webp'
import amazon from '../assets/amazon.png'

const Work = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="work">
        <h2 className="text-4xl font-bold text-center text-[#442916] border-b mb-12">Work Experience</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/3">
                <img src={validity} alt="about" />
            </div>
            <div className="md:w-1/2">
                <h2 className="md:text-4xl text-xl font-bold text-[#e2898e] mb-5 leading-normal flex items-center flex-wrap">Software Engineering Intern</h2>
                <h3 class="md:text-2xl text-xl font-bold text-[#e8aba4] mb-5 leading-normal flex items-center flex-wrap">Aug 2023 - Aug 2024</h3>
                <p className="text-[#966348] text-lg mb-7">
                    During my time at Validity, I significantly enhanced the efficiency and performance of the Everest platform. 
                    I streamlined account and subscription management by updating multiple API endpoints in PHP, resulting in a 20% reduction in API 
                    response time and improved data consistency across systems. I led the migration and cleanup of deprecated MySQL database tables, 
                    optimizing complex SQL queries and data processing logic, which reduced query execution time by 15%. I also productionized critical 
                    API endpoints and utilized Docker and Kubernetes for deployment through Jenkins CI/CD pipelines. To ensure robust testing and minimize 
                    manual efforts, I created and updated API test cases in Postman and UI automation tests in Cypress, increasing test coverage. Additionally, 
                    I contributed to expanding features and enhancing the user interface using JavaScript, improved data validation with Python-scripted cron jobs, 
                    and resolved complex issues, leading to a 40% reduction in customer-reported incidents. This work not only improved system performance but also 
                    elevated the overall user experience.
                </p>
            </div>
        </div>
        {/* 2nd part */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
            <div className="md:w-1/3">
                <img src={amazon} alt="about" />
            </div>
            <div className="md:w-1/2">
                <h2 className="md:text-4xl text-xl font-bold text-[#e2898e] mb-5 leading-normal flex items-center flex-wrap">Software Support Engineer</h2>
                <h3 class="md:text-2xl text-xl font-bold text-[#e8aba4] mb-5 leading-normal flex items-center flex-wrap">Jul 2020 - Aug 2022</h3>
                <p className="text-[#966348] text-lg mb-7">
                    During my tenure as a Software Support Engineer at Amazon, I played a pivotal role in optimizing the MVC-based microservices 
                    of the Seller Central Platform using Java and Spring Boot. This work significantly enhanced the efficiency of inbound and inventory 
                    shipment handling at Amazon Fulfillment Centers. I successfully managed the migration of over 40 applications deployed on AWS EC2 instances, 
                    ensuring a smooth transition and addressing legacy API deprecation across all phases of the software development lifecycle. Additionally, 
                    I spearheaded the upgrade of 9 applications from JDK8 to JDK11, collaborating with cross-functional teams to achieve a 5% reduction in latency,
                    improved system security, and enhanced performance and reliability. My contributions also included developing comprehensive unit tests using 
                    Junit and Mockito frameworks, which increased line and branch coverage from 80% to over 90% across 15+ service codebases. I further demonstrated 
                    my technical expertise by restructuring 9 mission-critical applications, upgrading from Horizonte 4.x to 5.3.0, and leveraging the AWS Cloud 
                    Development Kit (CDK) to deploy updated infrastructure on AWS, thereby reinforcing the robustness and scalability of Amazon's core services.
                </p>
            </div>
        </div>
        {/* 3rd part */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/3">
                <img src={amazon} alt="about" />
            </div>
            <div className="md:w-1/2">
                <h2 className="md:text-4xl text-xl font-bold text-[#e2898e] mb-5 leading-normal flex items-center flex-wrap">Tech Ops Associate</h2>
                <h3 class="md:text-2xl text-xl font-bold text-[#e8aba4] mb-5 leading-normal flex items-center flex-wrap">Jul 2019 - Jul 2020</h3>
                <p className="text-[#966348] text-lg mb-7">
                    During my role as a Tech Ops Associate at Amazon, I played a key part in developing XML configurations and Python scripts to 
                    enable web crawling and data scraping functionalities for the Amazon Confirmed Fit widget. This process allowed for the extraction 
                    of large volumes of data, which I subsequently sanitized and stored in Amazon RedShift for further analysis. I also engineered a 
                    Python-Django operational tracking dashboard, integrating it seamlessly with AWS RedShift and S3. This dashboard provided over 80 
                    distinct views and saved the team approximately three hours of work per week. My proactive approach and rapid adaptation to internal 
                    systems and tasks earned me recognition, and I was honored as a top 3 recipient out of 100 for the “Pure Performer” and “Rising Star” 
                    awards for my contributions and swift project delivery.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Work