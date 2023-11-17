import React from 'react'
import Footer from '../components/Footer';
import "../styles/Home.css";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MyHero from '../assets/myHero.jpg';
import HomePage from '../components/HomePage';

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero
            hName = 'hero'
            heroImg = {MyHero}
            title = "PROFESSIONAL TECHNOLOGY ASSISTANCE"
            text = "We empower digital success in the public sector."
            />
            <HomePage/>
            <Footer/>
        </div>
    )
}

export default Home;


 /* <div className='home'>
                <div 
                className="headerContainer">
                    <h1>WHY CHOOSE US</h1>
                    <br></br>
        

                    <h2>Expertise</h2>
                    <p>Our team is compramised of skilled developers and automation specialists with 20+ years of experience in implementing and supporting all levels of government agencies.</p>
                    <Link to="Reviews">
                    <button>CLIENT REVIEWS</button>
                    </Link>
                

                    <h2>Innovation and Customization</h2>
                    <p>We stay at the forefront of emerging technologies. We understand that every business has unique requirements, and we tailor our solutions to meet your specific needs.</p>
                    <Link to="Reviews">
                    <button>SERVICES</button>
                    </Link>

                    <h2>Collaboration</h2>
                    <p>We foster strong partnerships with our clients, working closely with your team to ensure effective communication and project success.</p>
                    <Link to="Reviews">
                    <button>CONTACT US</button>
                    </Link>
                    
                   
                </div>
            </div>
             <Footer /> */