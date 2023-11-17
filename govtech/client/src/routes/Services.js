import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ServicesStyles.css';
import UxImg from '../assets/ux.jpg';
import ApiImg from '../assets/API.jpg';
import DataMigImg from '../assets/DataMig.jpg';
import DataClImg from '../assets/DataCleansing.png';
import AuImg from '../assets/Automation.jpg';
import ScrImg from '../assets/Scripting.jpg'
import AnaImg from '../assets/Analytics.png';
import TestImg from '../assets/Testing.jpg';
import ServicesData from '../components/ServicesData';


function Services() {
    return (
        <div>
            <Navbar />
            <div className="services-page">
                <div className='services-title'>
                    <h1>OUR SERVICES</h1>
                </div>
            <ServicesData
                cName='first-des'
                heading1="System Implementations"
                text1="We assist you in implementing new software systems tailored to your specific business needs. Our experienced consultants work closely with your team to understand your requirements, configure the system, and ensure a successful deployment. We offer end-to-end support, from system selection and customization to training and post-implementation maintenance."
                heading2="API Integrations"
                text2="Seamlessly connect and integrate different software systems and services using our API integration expertise. We ensure smooth data exchange and  interoperability, enabling you to leverage the power of multiple platforms and applications."
                img1={UxImg}
                img2={ApiImg}
            />

            <ServicesData
            cName='first-des-reverse'
                heading1="Data Migration"
                text1="We facilitate the smooth transfer of your data from legacy systems to new platforms. Our team employs industry best practices to ensure data integrity, accuracy, and confidentiality throughout the migration process. We handle complex data structures, large volumes of information, and various data formats, ensuring a seamless transition with minimal downtime."
                heading2="Data Cleansing"
                text2="We help you improve data quality and usability by cleansing and transforming your existing data. Our team identifies inconsistencies, duplicates, and errors, and implements robust data cleaning and transformation techniques. This ensures accurate and reliable data for informed decision-making and improved operational efficiency."
                img1={DataMigImg}
                img2={DataClImg}
            />

            <ServicesData
            cName='first-des'
                heading1="Process Automation"
                text1="We design and develop customized automation solutions tailored to your specific business needs. By leveraging industry-leading tools and technologies, we streamline repetitive tasks, eliminate errors, and improve overall workflow efficiency."
                heading2="Scripting and Coding"
                text2="Our team of skilled developers excels in writing clean, scalable, and maintainable code. Whether you require automation scripts, custom software applications, or integration solutions, we have the expertise to deliver high-quality code that meets your requirements."
                img1={AuImg}
                img2={ScrImg}
            />
            <ServicesData
            cName='first-des-reverse'
                heading1="Data Analytics and Insights"
                text1="Leveraging advanced analytics tools, we help government agencies harness the power of data. Our consultants assist in gathering, organizing, and analyzing data to uncover actionable insights, enabling evidence-based decision-making and improved resource allocation for better outcomes."
                heading2="Testing/Quality Assurance"
                text2="We perform rigorous testing and quality assurance to ensure the reliability and functionality of your systems. Our dedicated testing team employs a comprehensive range of methodologies, tools, and techniques to identify and address any issues or bugs, ensuring a stable and reliable system performance."
                img1={AnaImg}
                img2={TestImg}
            />
        </div>
        <Footer />
        </div>
    )
};


export default Services;