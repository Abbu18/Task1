import Navbar from '../components/Navbar';
import '../styles/ReviewsStyles.css';
import first from '../assets/cs-1.png';
import second from '../assets/cs-2.png';
import third from '../assets/cs-3.gif';
import fourth from '../assets/cs-4.png';
import fifth from '../assets/cs-5.png';
import Footer from '../components/Footer';
import ReviewsData from '../components/ReviewsData'

function Reviews() {
    return (
        <div>
            <Navbar />
            <div className='reviews-page'>
                <div className='rev-title'>
                    <h1>CLIENTS SERVED</h1>
                </div>
                <ReviewsData
                    img1={first}
                    img2={second}
                    img3={third}
                    img4={fourth}
                    img5={fifth}
                    heading1="Jim Egan | Fire Captain, Gwinnett County"
                    text1="The GovTech Professionals team greatly assisted us in improving both customer and employee experiences. Through custom enhancements and scripting, they optimized Accela Citizen Access and Accela back office. This resulted in remarkable user-friendliness and an increase in employee efficiency."
                    heading2="Rahul Bhosle | Managing Partner"
                    text2="Worked with GovTech Professionals on Accela projects in NYC for DOHMH and FDNY. The team went above and beyond to make sure the customers were happy with the final product. Their expertise in data migration, reporting, configuration, and scripting ensured a seamless transition. Highly recommended."
                    heading3="Eric Pease | Process and Technology Manager, Gwinnett County"
                    text3="The GovTech Professional team was an integral part of the projects due to their experience and expertise in Accela. Their Accela developers worked closely with Business Analysts and Client Product Owners to help lead the projects in the right direction using out-of-box features where applicable and must-have customizations for quick go-to-market needs. The team was well versed in Agile methodology and followed Scrum for all client projects. The data migration effort was the core building block for project success, bringing in ‘departments data’ accurately, securely and per compliance into the new platform."
                    heading4="Mandar Patil | Project Manager"
                    text4="GovTech Professionals assisted in large scale Accela implementations at FDACS & FDNY. The efforts involved requirement gathering to design development to training and support - a complete end to end project roll-out."
                    text5="The GovTech Professional team was an integral part of the projects due to their experience and expertise in Accela. Their Accela developers worked closely with Business Analysts and Client Product Owners to help lead the projects in the right direction using out-of-box features where applicable and must-have customizations for quick go-to-market needs. The team was well versed in Agile methodology and followed Scrum for all client projects. The data migration effort was the core building block for project success, bringing in ‘departments data’ accurately, securely and per compliance into the new platform."
                    text6="All of the GovTech Pros were highly professional, had excellent managerial skills, and were happy to work closely with a variety of teams to mentor and train. The group was always ready to lend a helping hand and work shoulder to shoulder with leadership to achieve departments/organizations goals and targets. Disciplined, professional, and a trustworthy partner."
                />
            </div>
            <Footer />
        </div>
    )
}

export default Reviews;


/* import First from '../assets/CS-1.webp';
import second from '../assets/CS-2.webp';
import third from '../assets/CS-3.webp';
import fourth from '../assets/CS-4.webp'; 
import fifth from '../assets/CS-5.webp';
import '../assets/styles/Reviews.css' */
/*
<Navbar/>
<div className='title'>
<h1>Clients Served</h1>
 <img src={First} className="first" alt='Logo'/> 
 <img src={second} className="second" alt='Logo' />
 <img src={third}  className="third" alt='Logo'/>
 <img src={fourth} className="fourth" alt='Logo'/>
 <img src={fifth}  className="fifth" alt='Logo' />
 <h2>Jim Egan | Fire Captain, Gwinnett County</h2>
 <p>The GovTech Professionals team greatly assisted us in improving both customer and employee experiences. Through custom enhancements and scripting, they optimized Accela Citizen Access and Accela back office. This resulted in remarkable user-friendliness and an increase in employee efficiency. </p>
 

 <h2>Rahul Bhosle | Managing Partner</h2>
 <p>Worked with GovTech Professionals on Accela projects in NYC for DOHMH and FDNY. The team went above and beyond to make sure the customers were happy with the final product. Their expertise in data migration, reporting, configuration, and scripting ensured a seamless transition. Highly recommended.</p>
 
 <h2>Eric Pease | Process and Technology Manager, Gwinnett County</h2>
 <p>The GovTech Professional team was an integral part of the projects due to their experience and expertise in Accela. Their Accela developers worked closely with Business Analysts and Client Product Owners to help lead the projects in the right direction using out-of-box features where applicable and must-have customizations for quick go-to-market needs. The team was well versed in Agile methodology and followed Scrum for all client projects. The data migration effort was the core building block for project success, bringing in ‘departments data’ accurately, securely and per compliance into the new platform.</p>
  
 <h2>Mandar Patil | Project Manager</h2>
  <p>GovTech Professionals assisted in large scale Accela implementations at FDACS & FDNY. The efforts involved requirement gathering to design development to training and support - a complete end to end project roll-out.

     The GovTech Professional team was an integral part of the projects due to their experience and expertise in Accela. Their Accela developers worked closely with Business Analysts and Client Product Owners to help lead the projects in the right direction using out-of-box features where applicable and must-have customizations for quick go-to-market needs. The team was well versed in Agile methodology and followed Scrum for all client projects. The data migration effort was the core building block for project success, bringing in ‘departments data’ accurately, securely and per compliance into the new platform.

    All of the GovTech Pros were highly professional, had excellent managerial skills, and were happy to work closely with a variety of teams to mentor and train. The group was always ready to lend a helping hand and work shoulder to shoulder with leadership to achieve departments/organizations goals and targets. Disciplined, professional, and a trustworthy partner.

   </p>

</div>

*/