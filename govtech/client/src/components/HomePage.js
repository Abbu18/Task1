import React from 'react';
import '../styles/HomePageStyles.css'
import HomePageData from './HomePageData';
import officeImg1 from '../assets/office1.jpg';
import officeImg2 from '../assets/office2.jpg';

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1> WHY CHOOSE US </h1>
            <HomePageData
            heading1 = "Innovation and Customization"
            text1 = "We stay at the forefront of emerging technologies. We understand that every business has unique requirements, and we tailor our solutions to meet your specific needs."
            heading2 = "Expertise"
            text2 = "Our team is compramised of skilled developers and automation specialists with 20+ years of experience in implementing and supporting all levels of government agencies."
            heading3 = "Collaboration"
            text3 = "We foster strong partnerships with our clients, working closely with your team to ensure effective communication and project success"
            img1 = {officeImg1}
            img2 = {officeImg2}
            />
        </div>
    )
}

export default HomePage;
