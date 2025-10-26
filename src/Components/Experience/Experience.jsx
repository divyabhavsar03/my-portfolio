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
                            <h2>Masters in Geomatics Engineering (2024 - 2026)</h2>
                            <h3>University of Calgary, Calgary, Canada <img src="https://flagcdn.com/ca.svg" style={{ width: '24px', height: 'auto', marginLeft: '4px', alignItems: 'center', filter:'none' }} alt='flag-of-canada' /></h3>
                            <h4>Winter 2025: 4/4 GPA | Fall 2024: 3.85/4 GPA</h4>
                        </div>
                    </div>
                    <div className="experience-gtu">
                        <a href="https://gtu.ac.in/" target="_blank" rel="noopener noreferrer"><img src={GTULogo} alt="GTU-logo" /></a>
                        <div className="gtu-details">
                            <h2>Bachelors in Computer Engineering (2019 - 2023)</h2>
                            <h3>Gujarat Technological University, Ahmedabad, India <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="flag-of-india" style={{ width: '24px', height: 'auto', marginLeft: '4px', alignItems: 'center', filter:'none' }} /></h3>
                            <h4>CGPA: 8.95/10 CGPA</h4>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Experience