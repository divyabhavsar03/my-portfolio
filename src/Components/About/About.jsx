import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.png'
import htmlImg from '../../assets/projects_skills/HTML5_Logo.png'
import reactImg from '../../assets/projects_skills/React-icon.png'
import cssImg from '../../assets/projects_skills/CSS3_logo.png'
import jsImg from '../../assets/projects_skills/JavaScript-logo.png'
import phpImg from '../../assets/projects_skills/Php-logo.png'
import mysqlImg from '../../assets/projects_skills/mysql-logo.png'
import mongodbImg from '../../assets/projects_skills/MongoDB_Logo.png'
import pythonImg from '../../assets/projects_skills/Python-logo.png'
import cppImg from '../../assets/projects_skills/cpp-logo.png'
import cImg from '../../assets/projects_skills/C-logo.png'
import arcgisImg from '../../assets/projects_skills/arcgispro.png'
import satposImg from '../../assets/projects_skills/satpos.jpg'
import photogramImg from '../../assets/projects_skills/photogram.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hey! I'm <span className="highlight-now">Divya Bhavsar</span> — a passionate <span className="highlight-geo">Geomatics Engineering</span> Master's student at the <span className="highlight-projects">University of Calgary</span>, with a strong foundation in <span className="highlight-code">Computer Engineering</span> from India. I'm deeply fascinated by the science of <span>positioning</span>, <span>mapping</span>, and digital technologies — and I strive to bring them together through <span>code</span> and <span>geospatial intelligence</span>.<br /><br />

              With a <span className="highlight-projects">GPA of 4.0</span> in my Winter term and <span className="highlight-projects">distinction in my Bachelor's</span>, I've always believed that <span>learning deeply</span> is more powerful than learning fast. My academic and project journey has taken me through the precise world of <span>GNSS Satellite Positioning</span>, the geometry-rich concepts of <span>Photogrammetry</span>, and hands-on <span>GIS analysis</span> using <span>ArcGIS Pro</span>.<br /><br />

              📍 In <span>Satellite Positioning</span>, I've developed <span>Python</span>-based tools to process <span>RINEX</span> data, analyze <span>satellite trajectories</span>, estimate receiver locations using <span>SPP/PPP</span>/<span>Single Differencing</span>, and even generated <span>sky plots</span> to visualize satellite geometry. From <span>CSRS-PPP</span> to <span>multipath error evaluations</span>, I've gone deep into the core of precise positioning.<br /><br />

              📷 In <span>Photogrammetry</span>, I've worked with <span>relief displacement</span>, <span>collinearity equations</span>, <span>bundle adjustment</span>, and designed full <span>flight plans</span> to simulate aerial surveys — even working hands-on with <span>normal matrix design</span> and <span>least squares methods</span>.<br /><br />

              🌐 I'm also a skilled <span>full-stack web developer</span> with several projects under my belt — including an <span>Airbnb Clone</span>, <span>MERN E-Commerce Platform</span>, and <span>university websites</span>. I love blending logic with UI/UX design, using tools like <span>React.js</span>, <span>Node.js</span>, and <span>MongoDB</span>.<br /><br />

              🛰️ On the <span>GIS</span> side, I've conducted <span>LULC classification</span>, <span>wildfire change detection</span>, <span>watershed analysis</span>, and <span>fire station buffer modeling</span> using <span>ArcGIS Pro</span> and satellite data — turning spatial data into actionable insights.<br /><br />

              🧠 With tools like <span>Python (Pandas, NumPy, Matplotlib)</span>, <span>SQL</span>, <span>VBA-powered Excel Dashboards</span>, and modern development stacks, I love taking complex data and turning it into clear, usable solutions.<br />
            </p>
            <p>
              Currently, I'm looking for meaningful opportunities in <span>Geomatics</span>, <span>GNSS</span>, <span>GIS Development</span>, or <span>Web Engineering</span> where I can contribute technically while growing professionally.<br /><br />

              Let's create something impactful together! 🚀
            </p>
          </div>
        </div>
      </div>

      <table className='skills-table'>
        <tr>
          <th>Frontend</th>
          <td><img src={htmlImg} title='HTML' alt="" /></td>
          <td><img src={cssImg} title='CSS' alt="" /></td>
          <td><img src={reactImg} title='React JS' alt="" /></td>
          <td><img src={jsImg} title='JavaScript' alt="" /></td>
        </tr>

        <tr>
          <th>Backend</th>
          <td><img src={mongodbImg} title='mongodb' alt="" /></td>
          <td><img src={phpImg} title='php' alt="" /></td>
          <td><img src={mysqlImg} title='MySQL' alt="" /></td>
        </tr>

        <tr>
          <th>Coding</th>
          <td><img src={pythonImg} title='Python' alt="" /></td>
          <td><img src={cppImg} title='Turbo C++' alt="" /></td>
          <td><img src={cImg} title='C' alt="" /></td>
        </tr>

        <tr>
          <th>Geomatics</th>
          <td><img src={arcgisImg} title='ArcGIS Pro' alt="" /></td>
          <td><img src={pythonImg} title='Python' alt="" /></td>
          <td><img src={satposImg} title='Satellite Positioning' alt="" /></td>
          <td><img src={photogramImg} title='Photogrammetry' alt="" /></td>
        </tr>
      </table>
    </div>
  )
}

export default About