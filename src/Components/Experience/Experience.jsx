import './Experience.css'
import React from 'react'
import uofcLogo from '../../assets/UofCLogo.png'
import GTULogo from '../../assets/GTULogo2.png'

const Experience = () => {
  return (
    <div id='experience' className='experience'>
                <div className="experience-title">
                    <h1>Experience</h1>
                </div>
                <div className="experience-section">
                    <div className="experience-uofc">
                        <a href="https://ucalgary.ca/" target="_blank" rel="noopener noreferrer"><img src={uofcLogo} alt="UCalgary Logo" /></a>
                        <div className="uofc-details">
                            <h2>Teaching Assistant</h2>
                            <h3>University of Calgary, Calgary, Canada <img src="https://flagcdn.com/ca.svg" style={{ width: '24px', height: 'auto', marginLeft: '4px', alignItems: 'center', filter:'none' }} alt='flag-of-canada' /></h3>
                            <h4>ENGG 680: Introduction to Digital Engineering</h4>
                            <h4>Assisting Dr. Hongzhou Yang in the course by supporting lab sessions, helping students with questions, grading, and encouraging academic learning.</h4>
                        </div>
                    </div>
                    <div className="experience-linestar">
                        <a href="https://gtu.ac.in/" target="_blank" rel="noopener noreferrer"><img src={GTULogo} alt="linestar-logo" /></a>
                        <div className="linestar-details">
                            <h2>Shopify Content Assistant</h2>
                            <h3>LineStar Utility Supply, Calgary, Canada <img src="https://flagcdn.com/ca.svg" style={{ width: '24px', height: 'auto', marginLeft: '4px', alignItems: 'center', filter:'none' }} alt='flag-of-canada' /></h3>
                            <h4>Assisting in setting up and managing the Shopify online store.
Performing product entry, descriptions, images, variants, and basic SEO optimization.
Conducting website review and suggested improvements for usability and content.
Gaining hands-on experience in office workflow, time, and project management.
Collaborating with the team, improving communication and professional skills.</h4>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Experience