import geo_proj1 from './projects_skills/1.jpg'
import geo_proj2 from './projects_skills/2.jpg'
import geo_proj3 from './projects_skills/3.jpg'
import geo_proj4 from './projects_skills/4.jpg'
import geo_proj5 from './projects_skills/5.jpg'
import geo_proj6 from './projects_skills/6.jpg'

const geomaticsAssets = [
    {
        s_no:"01",
        s_name:"Calgary Watershed Analysis",
        s_desc:"This project was done in ArcGIS Pro. Here I made use of GeoProcessing Tool called Hydrology. This project analyzes Calgary’s watershed and stream networks using GIS and remote sensing. By getting the Digital Elevation Model (DEM), I identified sinks, flow direction, flow accumulation, and stream networks extracting the key watershed basins for hydrological analysis. Using ArcGIS Pro, I applied raster processing, stream ordering, and basin delineation to visualize water flow and its impact on the environment. This study aids in flood risk assessment, urban planning, and water resource management. ",
        w_img: geo_proj1
    },
    {
        s_no:"02",
        s_name:"Calgary Land Use Land Cover Classification",
        s_desc:"This project analyzes Land Use Land Cover (LULC) changes in Calgary over a 10 year period using GIS tools and ArcGIS Pro. I compared the classified raster images of Calgary from two different years 2014 and 2024, and applied Categorical Change Detection to identify the changes or transformation in land cover. Using ArcGIS Pro, I processed satellite imagery, ran change detection analysis, and generated a classified raster highlighting area of change. This study helps in urban development planning, environmental monitoring, and resource management. ",
        w_img: geo_proj2
    },
    {
        s_no:"03",
        s_name:"Jasper Wildfire Change Detection",
        s_desc:"This map represents Jasper National Park, Alberta, Canada, highlighting land cover changes caused by wildfires over time. Using remote sensing and GIS techniques, I conducted change detection analysis to identify burned areas. The legend illustrates the extent of wildfire impact, helping in environmental monitoring, and disaster assessment.",
        w_img: geo_proj3
    },
    {
        s_no:"04",
        s_name:"Calgary Fire Station Buffer",
        s_desc:"This project analyzes the Fire Stations Coverage in Calgary using GIS spatial analysis. By mapping fire station locations and road networks, I applied the buffer tool to determine service areas. A 3.5 km buffer per station showed that nearly the entire city is covered, ensuring efficient emergency response. The blue areas show the coverage, whereas the red areas show the lack of coverage. This study helps in urban planning, optimizing emergency services, and identifying potential coverage gaps. ",
        w_img: geo_proj4
    },
    {
        s_no:"05",
        s_name:"India Average Rainfall",
        s_desc:"This project analyzes India's average annual rainfall from the year 2019 to 2024 using CHRS PERSIANN-CCS rainfall data and GIS spatial analysis. I processed yearly precipitation TIFF datasets, set spatial references (WGS 1984), and used raster calculations in ArcGIS Pro to compute multi-year rainfall averages. The final map visualizes rainfall distribution patterns, aiding in climate analysis, water resource management, and environmental studies.",
        w_img: geo_proj5
    },
    {
        s_no:"06",
        s_name:"Vapi Land Use Land Cover Classification",
        s_desc:"This project analyzes Land Use and Land Cover (LULC) in Vapi, India using satellite imagery and GIS classification techniques. I processed composite imagery, extracted the study area, and applied supervised classification using the Support Vector Machine (SVM) algorithm in ArcGIS Pro. After classification, I converted the raster to a polygon dataset, merged similar classes using the dissolve tool, and calculated the area for each land cover type. This study provides insights into urban expansion, environmental changes, and resource management. ",
        w_img: geo_proj6
    },
]
 
export default geomaticsAssets;