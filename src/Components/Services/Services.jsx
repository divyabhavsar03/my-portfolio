import React from 'react'
import './Services.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import arrow_icon from '../../assets/arrow_icon.svg'
import webdevAssets from '../../assets/webdev'
import geomaticsAssets from '../../assets/geomatics'
import satposAssets from '../../assets/satPos';

const Services = () => {
  return (
    <div id='project' className='services'>
      <div className="services-title">
        <h1>My Projects</h1>
      </div>
      <h1>Web Development</h1>
      <div className="services-container">
        {webdevAssets.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>

            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              className="project-carousel"
            >
              {service.w_img.map((imgSrc, idx) => (
                <div key={idx}>
                  <img src={imgSrc} alt={`project ${index} img ${idx}`} />
                </div>
              ))}
            </Carousel>

            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>

      <h1>Satellite Positioning</h1>
      <div className="services-container" style={{gridTemplateColumns:"1fr", justifyContent:"center"}}>
        {satposAssets.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
          
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              className="project-carousel"
            >
              {service.w_img.map((imgSrc, idx) => (
                <div key={idx}>
                  <img src={imgSrc} alt={`project ${index} img ${idx}`} />
                </div>
              ))}
            </Carousel>

            <p style={{maxWidth:"1000px", alignItems:"center"}}>{service.s_desc}</p>
          </div>
        ))}
      </div>

      <h1>Geomatics</h1>
      <div className="services-container">
        {geomaticsAssets.map((service, index) => {
          return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <img className='geoImg' src={service.w_img} alt="" />
            <p>{service.s_desc}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services