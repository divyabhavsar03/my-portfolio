import satpos_lab1_1 from '../assets/projects_skills/satpos/Lab1_1.png'
import satpos_lab1_2 from '../assets/projects_skills/satpos/Lab1_2.png'
import satpos_lab1_3 from '../assets/projects_skills/satpos/Lab1_3.png'
import satpos_lab1_4 from '../assets/projects_skills/satpos/Lab1_4.png'
import satpos_lab1_5 from '../assets/projects_skills/satpos/Lab1_5.png'
import satpos_lab1_6 from '../assets/projects_skills/satpos/Lab1_6.png'
import satpos_lab2_1 from '../assets/projects_skills/satpos/Lab2_1.png'
import satpos_lab2_2 from '../assets/projects_skills/satpos/Lab2_2.png'
import satpos_lab2_3 from '../assets/projects_skills/satpos/Lab2_3.png'
import satpos_lab2_4 from '../assets/projects_skills/satpos/Lab2_4.png'
import satpos_lab2_5 from '../assets/projects_skills/satpos/Lab2_5.png'
import satpos_lab2_6 from '../assets/projects_skills/satpos/Lab2_6.png'
import satpos_lab2_7 from '../assets/projects_skills/satpos/Lab2_7.png'
import satpos_lab2_8 from '../assets/projects_skills/satpos/Lab2_8.png'
import satpos_lab2_9 from '../assets/projects_skills/satpos/Lab2_9.png'
import satpos_lab3_1 from '../assets/projects_skills/satpos/Lab3_1.png'
import satpos_lab3_2 from '../assets/projects_skills/satpos/Lab3_2.png'
import satpos_lab3_3 from '../assets/projects_skills/satpos/Lab3_3.png'
import satpos_lab3_4 from '../assets/projects_skills/satpos/Lab3_4.png'
import satpos_lab3_5 from '../assets/projects_skills/satpos/Lab3_5.png'
import satpos_lab3_6 from '../assets/projects_skills/satpos/Lab3_6.png'
import satpos_lab3_7 from '../assets/projects_skills/satpos/Lab3_7.png'
import satpos_lab3_8 from '../assets/projects_skills/satpos/Lab3_8.png'
import satpos_lab4_1 from '../assets/projects_skills/satpos/Lab4_1.png'
import satpos_lab4_2 from '../assets/projects_skills/satpos/Lab4_2.png'
import satpos_lab4_3 from '../assets/projects_skills/satpos/Lab4_3.png'
import satpos_lab4_4 from '../assets/projects_skills/satpos/Lab4_4.png'
import satpos_lab4_5 from '../assets/projects_skills/satpos/Lab4_5.png'
import satpos_lab4_6 from '../assets/projects_skills/satpos/Lab4_6.png'
import satpos_lab4_7 from '../assets/projects_skills/satpos/Lab4_7.png'
import satpos_lab4_8 from '../assets/projects_skills/satpos/Lab4_8.png'
import satpos_lab4_9 from '../assets/projects_skills/satpos/Lab4_9.png'
import satpos_lab5_1 from '../assets/projects_skills/satpos/Lab5_1.png'
import satpos_lab5_2 from '../assets/projects_skills/satpos/Lab5_2.png'
import satpos_lab5_3 from '../assets/projects_skills/satpos/Lab5_3.png'
import satpos_lab5_4 from '../assets/projects_skills/satpos/Lab5_4.png'
import satpos_lab5_5 from '../assets/projects_skills/satpos/Lab5_5.png'


const satposAssets = [
    {
        s_no:"01",
        s_name:"LEAST-SQUARES ESTIMATION WITH GPS",
        s_desc:"Estimated the receiver's position using Least Squares Estimation, achieving results closely matching the true coordinates — validating the accuracy of the implementation. Explored the impact of satellite geometry on positioning, confirming that horizontal accuracy is generally better than vertical. Analyzed GPS error distribution (Gaussian nature), DOP values, and position errors in both ECEF and Local Level Frame (NEU). Visualizations like plots and histograms were used to assess accuracy, precision, and variability. Also examined how measurement noise and standard deviation influence the overall positioning performance. This lab provided strong insights into GPS behavior, highlighting the significance of DOP values and statistical analysis in satellite-based positioning.",
        w_img: [satpos_lab1_1, satpos_lab1_2, satpos_lab1_3, satpos_lab1_4, satpos_lab1_5, satpos_lab1_6]
    },
    {
        s_no:"02",
        s_name:"GPS SATELLITE COORDINATE COMPUTATION AND ANALYSIS",
        s_desc:"Estimated satellite positions using various ephemeris files, including almanac, broadcast, brdcbest, brdc24hr, predicted ultra-rapid, observed ultra-rapid, and precise ephemeris. Computed satellite trajectories, elevation, and azimuth angles to generate Sky Plots and DOP values, highlighting the link between satellite geometry and positioning accuracy. Satellite coordinates were derived using both the best matching epoch time and the first ephemeris record. Position errors were calculated using the precise ephemeris as reference, and statistical analysis showed that brdcbest, observed, and predicted files offered higher accuracy and reliability compared to others. This lab enhanced real-world understanding of precise positioning and the critical role of accurate ephemeris data.",
        w_img: [satpos_lab2_1, satpos_lab2_2, satpos_lab2_3, satpos_lab2_4, satpos_lab2_5, satpos_lab2_6, satpos_lab2_7, satpos_lab2_8, satpos_lab2_9]
    },
    {
        s_no:"03",
        s_name:"CYCLE SLIP DETECTION AND PSEUDORANGE MULTIPATH ASSESSMENT USING DIFFERENT RECEIVERS",
        s_desc:"Analyzed how receiver quality and antenna placement affect cycle slip detection and multipath errors. The NovAtel receiver, being high-end, showed fewer cycle slips and lower multipath effects compared to the u-blox, which exhibited frequent slips and higher errors. Testing in two environments—courtyard and rooftop—revealed that multipath was more severe in the courtyard due to obstructions, while the rooftop had better signal quality. CMC analysis further confirmed NovAtel's superior ability to mitigate multipath errors. This lab demonstrated the critical role of using high-quality GNSS receivers and proper antenna placement in reducing satellite positioning errors.",
        w_img: [satpos_lab3_1, satpos_lab3_2, satpos_lab3_3, satpos_lab3_4, satpos_lab3_5, satpos_lab3_6, satpos_lab3_7, satpos_lab3_8]
    },
    {
        s_no:"04",
        s_name:"STATIC, SINGLE POINT AND DIFFERENTIAL GPS POSITIONING",
        s_desc:"Estimated the Rover's position using three approaches: Single Point Positioning (SPP) without corrections, Pseudorange-based Single Difference Positioning, and Single Difference using Elevation Weight Matrix. This lab provided a clear understanding of both standalone and differential GNSS techniques, highlighting how various error sources impact positioning accuracy. A detailed comparison through plots and tables demonstrated the effectiveness of each method. Additionally, the lab covered important GNSS concepts like the difference between code and phase differencing techniques, number of observations vs unknowns, and why triple differencing is not typically used. Overall, this exercise deepened the understanding of practical and theoretical aspects of differential GNSS and its role in achieving precise positioning.",
        w_img: [satpos_lab4_1, satpos_lab4_2, satpos_lab4_3, satpos_lab4_4, satpos_lab4_5, satpos_lab4_6, satpos_lab4_7, satpos_lab4_8, satpos_lab4_9]
    },
    {
        s_no:"05",
        s_name:"CANADIAN SPATIAL REFERENCE SYSTEM PRECISE POINT POSITIONING (CSRS-PPP) SERVICE",
        s_desc:"This lab demonstrated the use of the Canadian Spatial Reference System - Precise Point Positioning (CSRS-PPP) service to achieve highly accurate GNSS positioning. An observation file was uploaded to the CSRS-PPP portal, and the estimated positions were compared with Single Point Positioning (SPP) results and the true coordinates. The PPP method achieved exceptional accuracy with only 6.8 mm of error, thanks to the use of precise satellite orbits, clock corrections, and atmospheric models, while SPP showed a significantly higher error of over 3.2 meters. The lab also explored real-world applications such as GPS Meteorology, which plays a vital role in weather forecasting and climate monitoring. Overall, this lab provided deeper insights into advanced GNSS processing techniques, their error characteristics, and their potential for both precise positioning and atmospheric research.",
        w_img: [satpos_lab5_1, satpos_lab5_2, satpos_lab5_3, satpos_lab5_4, satpos_lab5_5]
    },
]
 
export default satposAssets;