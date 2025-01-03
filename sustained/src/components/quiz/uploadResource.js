// this is a script to import all the resources from the json file into the firebase database--to update the databae thorugh this script
// add a new resource object with all the areas filled, then run uploadResource.js in terminal

import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDtU3f3BcOrfcbUuGiu228NMy8Wnl3jkmw",
    authDomain: "sustained-f16ac.firebaseapp.com",
    databaseURL: "https://sustained-f16ac-default-rtdb.firebaseio.com",
    projectId: "sustained-f16ac",
    storageBucket: "sustained-f16ac.firebasestorage.app",
    messagingSenderId: "924904245250",
    appId: "1:924904245250:web:1eb36f88596233163bbf1b"
};
  
// initialize firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// JSON data
const jsonData = {
    "resources": [
        {
            "id": 1,
            "title": "EN-Roads Climate",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Interactive",
            "subject-area": ["Science", "English", "Math", "History", "Arts", "Foreign Languages", "Other"],
            "time-range": ["30-45 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://en-roads.climateinteractive.org/scenario.html?v=24.10.0",
            "image": "https://lh7-us.googleusercontent.com/d0AhgSlOAwYaSBb8vSozUI-3eozBp0aKVo1iFpeNeCI8B7_qcxab8LkASlCD_gBrRyJgLFwwTXMqeDOIFtgypIUiLizpc1U9oKO-mzPCikn0usXVmVqPpRzmPoaflFYzyYJVLeXBcN8u9BQsKKxYIw"
        }, 
        {
            "id": 2,
            "title": "Powering Sustainability: The Good News on Energy, the Environment and Our Future",
            "grade-level": ["11th", "12th"],
            "media-type": "PDF", 
            "subject-area": ["Other", "Science"],
            "time-range": ["45 minutes - 1 hour"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://cgs.la.psu.edu/wp-content/uploads/sites/27/2020/12/psu_sustainability_12feb16B.pdf", 
            "image": "https://i.pinimg.com/736x/7c/30/9a/7c309a2dd4de666b64eabbe87b8e2b7e.jpg" 
        },
        {
            "id": 3,
            "title": "Diversity of Climate Change",
            "grade-level": ["9th", "10th"],
            "media-type": "PDF",
            "subject-area": ["Science", "Other"],
            "time-range": ["15-30 minutes"],
            "area": ["Causes of climate change", "Solutions to climate change", "Impacts of climate change"], 
            "external-link": "https://wdfw.wa.gov/sites/default/files/2020-11/diversityofclimatechange.pdf",
            "image": "https://bloximages.newyork1.vip.townnews.com/bigcountrynewsconnection.com/content/tncms/assets/v3/editorial/c/5c/c5c8aa28-a2cd-11eb-a3bc-735f436ed4f8/60806c9d334b8.image.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize"
        },
        {
            "id": 4,
            "title": "Sea Level Rise Climate Change Demo Educator Guide",
            "grade-level": ["9th", "10th"],
            "media-type": "PDF",
            "subject-area": ["Science"],
            "time-range": ["30-45 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://climate.mit.edu/til-about-sea-level-rise-part-1-educator-guide",
            "image": "https://climate.mit.edu/sites/default/files/2020-07/HeaderBG.jpg"
        },
        {
            "id": 5,
            "title": "A public health expert’s guide to climate change",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["Other"],
            "time-range": ["15-30 minutes"],
            "area": ["Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://climate.mit.edu/podcasts/e6-public-health-experts-guide-climate-change",
            "image": "https://news.mit.edu/sites/default/files/styles/term_page__news_article/public/images/202408/MIT-Future-African-01-press.jpg?itok=0ULNUXs_"
        },
        {
            "id": 6,
            "title": "Energy storage: keeping the lights on with a clean electric grid",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["Science"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Solutions to climate change"], 
            "external-link": "https://climate.mit.edu/podcasts/e7-energy-storage-keeping-lights-clean-electric-grid",
            "image": "https://dynamic-assets.hitachienergy.com/is/image/hitachiabbpowergrids/hitachi-energy-transmission-towers-2436x810:64-25?wid=1440&hei=563&fmt=png-alpha&fit=crop%2C1"
        },
        {
            "id": 7,
            "title": "TIL about cleaning up clean tech",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["Other"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Solutions to climate change"], 
            "external-link": "https://climate.mit.edu/podcasts/e9-til-about-cleaning-clean-tech",
            "image": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itUG4rTJjWyU/v0/-1x-1.webp"
        },
        {
            "id": 8,
            "title": "TIL about national security",
            "grade-level": ["11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["History"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Impacts of climate change"], 
            "external-link": "https://climate.mit.edu/podcasts/til-about-national-security",
            "image": "https://www.thoughtco.com/thmb/2YrcmHc8Di2V3aZbG1IFVR7E1cA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1273601403-149f62036fbc4b5ea325de3e8f9fdfe0.jpg"
        },
        {
            "id": 9,
            "title": "Our Planet",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Video", 
            "subject-area": ["Science"],
            "time-range": ["45 minutes - 1 hour"],
            "area": ["Impacts of climate change"],
            "external-link": "https://www.netflix.com/title/80049832",
            "image": "https://i.vimeocdn.com/video/915942475-e3e9cb5e87fe26cb1cf5c69d6c09bda3799e142c1ee4e281d3f0c46cfe6aaf99-d_640?f=webp"     
        },
        {
            "id": 10,
            "title": "Eyes on the Earth",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Interactive", 
            "subject-area": ["Science", "History"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://eyes.nasa.gov/apps/earth/#/",
            "image": "https://science.nasa.gov/wp-content/uploads/2024/06/eyes3.jpg?w=2560&format=webp"   
        },
        {
            "id": 11,
            "title": "Global Ice Viewer",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Interactive", 
            "subject-area": ["Science"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://climate.nasa.gov/interactives/global-ice-viewer/?intent=021",
            "image": "https://science.nasa.gov/wp-content/uploads/2024/05/giv.jpg?w=2560&format=webp"      
        },
        {
            "id": 12,
            "title": "Norway’s Ålfotbreen Glacier Melting",
            "grade-level": ["9th", "10th"],
            "media-type": "Interactive", 
            "subject-area": ["Science", "History"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://climate.nasa.gov/images-of-change/?intent=131&id=880#880-norways-%C3%A5lfotbreen-glacier-melting-faster-in-recent-summers",
            "image": "https://science.nasa.gov/wp-content/uploads/2024/05/ioc-promo.jpg?w=2560&format=webp"      
        },
        {
            "id": 13,
            "title": "How Do We Know About Earth's Past Climate?",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Interactive", 
            "subject-area": ["Science", "History"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://climate.nasa.gov/explore/evidence-for-earths-past-climate/?intent=021",
            "image": "https://science.nasa.gov/wp-content/uploads/2024/05/download.jpg?w=2560&format=webp"      
        },
        {
            "id": 14,
            "title": "Climate Mitigation",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Interactive",
            "subject-area": ["Science", "Other"],
            "time-range": ["Less than 15 minutes", "15-30 minutes"],
            "area": ["Solutions to climate change"],
            "external-link": "https://onlinepublichealth.gwu.edu/how-to-reduce-climate-change/",
            "image": "https://onlinepublichealth.gwu.edu/wp-content/uploads/sites/47/2021/03/worldClassFaculty_desktop_767.jpg"
        },
        {
            "id": 15,
            "title": "Exploring Snowflake Geometry",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Math"],
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://spacemath.gsfc.nasa.gov/Modules/6Module11.html",
            "image": "https://www.nasa.gov/wp-content/uploads/2023/07/nasa-symbol.png?w=1920"
        },
        {
            "id": 16,
            "title": "SAGE III Explores Aerosol Math",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Math"],
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://spacemath.gsfc.nasa.gov/SAGE/SAGEbook.pdf",
            "image": "https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/2023/12/SAGEIII2768.jpg?w=4096&format=jpeg&fit=clip&crop=faces%2Cfocalpoint"
        },
        {
            "id": 17,
            "title": "Exploring States of Matter with Phase Diagrams",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Math"],
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://spacemath.gsfc.nasa.gov/Modules/8Module11.html ",
            "image": "https://www.nasa.gov/wp-content/uploads/2023/03/a2384_composite_v3.jpg?w=1024"
        }, 
        {
            "id": 18,
            "title": "Exploring Human Impacts on Climate",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Math"],
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://spacemath.gsfc.nasa.gov/Modules/8Module8.html",
            "image": "https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/internal_resources/2716/power-station-374097-1920.jpeg?w=4096&format=jpeg&fit=clip&crop=faces%2Cfocalpoint"
        },
        {
            "id": 19,
            "title": "Artworks from Benjamin Von Wong",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Visual Art",
            "subject-area": ["Arts"], 
            "time-range": ["Less than 15 minutes", "15-30 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://unforgettablelabs.com/",
            "image": "https://www.thisiscolossal.com/wp-content/uploads/2022/03/00_TurnOffThePlasticTap_VonWong_4.jpg"
        },
        {
            "id": 20,
            "title": "Artworks by Maya Lin",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Visual Art",
            "subject-area": ["Arts"],
            "time-range": ["Less than 15 minutes", "15-30 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://www.pacegallery.com/exhibitions/maya-lin-nature-knows-no-boundaries/",
            "image": "https://www.pacegallery.com/media/images/_65A9977.width-2000.webp"
        },
        {
            "id": 21,
            "title": "AR5 Synthesis Report: Climate Change 2014",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["History", "Science"],
            "time-range": ["1 hour +"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.ipcc.ch/site/assets/uploads/2018/02/SYR_AR5_FINAL_full.pdf",
            "image": "https://www.iamconsortium.org/wp-content/uploads/2020/04/ipcc-scaled-900x.jpg"
        },
        {
        "id": 22,
        "title": "THE LONG-TERM STRATEGY OF THE UNITED STATES Pathways to Net-Zero Greenhouse Gas Emissions by 2050" ,
        "grade-level": ["11th", "12th"],
        "media-type": "PDF",
        "subject-area": ["History"],
        "time-range": ["30-45 minutes"],
        "area": ["Impacts of climate change", "Solutions to climate change"],
        "external-link": "https://www.whitehouse.gov/wp-content/uploads/2021/10/US-Long-Term-Strategy.pdf",
        "image": "https://www.state.gov/wp-content/uploads/2021/11/LongTermStrategy-2.png"
        },
        {
            "id": 23,
            "title": "President Biden's Historic Climate Agenda",
            "grade-level": ["10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["History"],
            "time-range": ["30-45 minutes"],
            "area": ["Solutions to climate change"],
            "external-link": "https://www.whitehouse.gov/climate/",
            "image": "https://www.whitehouse.gov/wp-content/uploads/2022/04/Biden-BABA.jpeg?resize=1950,1300"
        }, 
        {
            "id": 24,
            "title": "Clean Energy 101 Playlist",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Video",
            "subject-area": ["History"],
            "time-range": ["Less than 15 minutes"], 
            "area": ["Solutions to climate change"],
            "external-link": "https://www.youtube.com/playlist?list=PLACD8E92715335CB2", 
            "image": "https://www.energy.gov/sites/default/files/styles/full_article_width/public/teacher_helping_kids_0.jpg?itok=nYggRs01"
        }, 
        {
            "id": 25, 
            "title": "Consejos para ahorrar dinero y energía en su hogar", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Foreign Languages"], 
            "time-range": ["30-45 minutes"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.energy.gov/sites/default/files/2017/12/f46/EnergySaver%20Guide-2017-Spanish-web.pdf", 
            "image": "https://www.energy.gov/sites/default/files/styles/full_article_width/public/2021-08/ahorre-energia.png?itok=t8MLako-"
        }, 
        {
            "id": 26,
            "title": "Conocimiento de Energía: Principios Esenciales y Conceptos Fundamentales para la Educación de Energía", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Foreign Languages"],
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.energy.gov/eere/education/articles/conocimiento-de-energia",
            "image": "https://www.energy.gov/sites/default/files/styles/full_article_width/public/Conocimiento_frontcover_2.PNG?itok=FoaQMCRt"
        },
        {
            "id": 27,
            "title": "From Water Efficiency to Energy Savings",
            "grade-level": ["11th", "12th"],
            "media-type": "Video",
            "subject-area": ["History", "Science"], 
            "time-range": ["45 minutes - 1 hour", "1 hour +"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://betterbuildingssolutioncenter.energy.gov/webinars/downstream-savings-water-efficiency-energy-savings",
            "image": "https://www.energy.gov/sites/default/files/2024-10/Energy_Logo_Preview_Image.jpg"
        },
        {
            "id": 28,
            "title": "Hydrothermal Liquefaction of Algae", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Visual Art", 
            "subject-area": ["History", "Science", "Other"],
            "time-range": ["Less than 15 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://www.energy.gov/eere/bioenergy/bioenergizeme-infographic-hydrothermal-liquefaction-algae",
            "image": "https://www.energy.gov/sites/default/files/styles/full_article_width/public/first%20place_cropped_0.jpg?itok=kmsdOsT4"
        },
        {
            "id": 29,
            "title": "Solar Decathlon Building Science Education Series",
            "grade-level": ["10th", "11th", "12th"],
            "media-type": "Video",
            "subject-area": ["History", "Science", "Other"], 
            "time-range": ["1 hour +"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.solardecathlon.gov/education/building-science",
            "image": "https://www.solardecathlon.gov/sites/default/files/assets/images/11977.JPG"
        },
        {
            "id": 30,
            "title": "Climate Action in Language Education",
            "grade-level": ["9th", "10th", "11th", "12th"], 
            "media-type": "Interactive",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.teachingenglish.org.uk/training/climate-action-language-education",
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TE%20size%20Climate%20GettyImages-135205464.png.webp?itok=l14K_5Oq"
        },
        {
            "id": 31,
            "title": "The Climate Connection - Episode 1: Taking the temperature", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes"],
            "area": ["Impacts of climate change", "Causes of climate change", "Solutions to climate change"],
            "external-link": "https://www.teachingenglish.org.uk/professional-development/podcasts/climate-connection/climate-connection-episode-1-taking",
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Landscape_07.jpeg.webp?itok=NegwCoOb"
        },
        {
            "id": 32,
            "title": "The Climate Connection episode 2: Speaking youth - to power",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://www.teachingenglish.org.uk/professional-development/podcasts/climate-connection/climate-connection-episode-2-speaking-youth", 
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Graphic_02-LOW-RES.jpeg.webp?itok=1eZPutV7"
        },
        {
            "id": 33,
            "title": "The Climate Connection - Episode 3: Language recycling",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes"], 
            "area": ["Impacts of climate change", "Causes of climate change", "Solutions to climate change"], 
            "external-link": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Graphic_07_low-res.jpeg.webp?itok=EQCy9on3", 
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Graphic_07_low-res.jpeg.webp?itok=EQCy9on3"
        },
        {
            "id": 34,
            "title": "The Climate Connection - Episode 4: Where there's a CLIL there's a way",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://www.teachingenglish.org.uk/professional-development/podcasts/climate-connection/climate-connection-episode-4-where-theres-clil", 
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Landscape_12_low-res_1.jpeg.webp?itok=THEqs3E2"
        },
        {
            "id": 35,
            "title": "The Climate Connection - Episode 5: Greenhouse classes",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://www.teachingenglish.org.uk/professional-development/podcasts/climate-connection/climate-connection-episode-5-greenhouse", 
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Graphic_01.jpeg.webp?itok=twz9r4ny"
        },
        {
            "id": 36,
            "title": "The Climate Connection - Episode 6: Global schooling",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English", "Foreign Languages"],
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://www.teachingenglish.org.uk/professional-development/podcasts/climate-connection/climate-connection-episode-6-global-schooling", 
            "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/TheClimateConnection_Graphic_09_low_res.jpeg.webp?itok=QGoaGua2"
        }, 
        {
            "id": 37,
            "title": "CCR Ep 97: Crafting Personal Climate Change Stories",
            "grade-level": ["10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["English"], 
            "time-range": ["30-45 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://citizensclimatelobby.org/blog/podcast/episode-96-crafting-compelling-personal-climate-change-stories/",
            "image": "https://citizensclimatelobby.org/wp-content/uploads/2024/07/lead-pic-768x470.jpg"
        }, 
        {
            "id": 38,
            "title": "CCR Ep: 92 There's Something Funny about Climate Change", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast",
            "subject-area": ["History"], 
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://citizensclimatelobby.org/blog/podcast/episode-92-theres-something-funny-about-climate-change/", 
            "image": "https://citizensclimatelobby.org/wp-content/uploads/2024/02/lead-image-dog-in-sunglasses-768x512.jpeg"
        }, 
        {
            "id": 39,
            "title": "CCR Ep 88: The College Carbon Fee and Dividend Climate Change Movement",
            "grade-level": ["9th", "10th", "11th", "12th"], 
            "media-type": "Podcast",
            "subject-area": ["History"], 
            "time-range": ["15-30 minutes", "30-45 minutes"], 
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://citizensclimatelobby.org/blog/podcast/episode-88-the-college-carbon-fee-and-dividend-climate-change-movement/",
            "image": "https://citizensclimatelobby.org/wp-content/uploads/2023/09/Screenshot-2023-09-28-at-11.41.50-AM-768x512.png"
        }, 
        {
            "id": 40,
            "title": "CCR Ep 86: Harnessing Local Political Power for Climate Change Solutions",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Podcast", 
            "subject-area": ["History"], 
            "time-range": ["15-30 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://citizensclimatelobby.org/blog/podcast/episode-86-harnessing-local-political-power-for-climate-change-solutions/", 
            "image": "https://citizensclimatelobby.org/wp-content/uploads/2023/07/DaneMyers.jpg"
        }, 
        {
            "id": 41,
            "title": " CCR Ep 85: Economics, Justice, and Carbon Price Solutions", 
            "grade-level": ["9th", "10th", "11th", "12th"], 
            "media-type": "Podcast", 
            "subject-area": ["History"], 
            "time-range": ["15-30 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://citizensclimatelobby.org/blog/podcast/episode-85-economics-justice-and-carbon-price-solutions/",
            "image": "https://citizensclimatelobby.org/wp-content/uploads/2023/06/Nokwanda-Maseko2-e1687480288925-768x437.jpg"
        }, 
        {
            "id": 42,
            "title": "Weathered - Earth's Extremes",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Video", 
            "subject-area": ["Science"], 
            "time-range": ["15-30 minutes"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.pbs.org/show/weathered/", 
            "image": "https://kcet.brightspotcdn.com/dims4/default/a89d352/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fimage.pbs.org%2Fcontentchannels%2FQ1qPSp8-show-mezzanine16x9-Dku3d2k.jpg"
        }, 
        { 
            "id": 43, 
            "title": "Changing Planet", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Video",
            "subject-area": ["Science"],
            "time-range": ["45 minutes - 1 hour"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.pbs.org/show/changing-planet/", 
            "image": "https://m.media-amazon.com/images/M/MV5BMGMxMGU1OTktY2I1NC00NzQ3LTljM2ItZTUxN2QxNTYyODZiXkEyXkFqcGc@._V1_.jpg"
        }, 
        {
            "id": 44,
            "title": "Princess Momonoke (1997)",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Video",
            "subject-area": ["Foreign Languages", "Other", "Science", "Arts"],
            "time-range": ["1 hour +"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.max.com/movies/princess-mononoke/e31c2dc2-cb8b-416e-9eda-769be3bb3a6b",
            "image": "https://m.media-amazon.com/images/I/81Xh5jukUkL._AC_UF1000,1000_QL80_.jpg"
        }, 
        {
            "id": 45,
            "title": "Before the Flood (2016)",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Video",
            "subject-area": ["Science", "History"],
            "time-range": ["45 minutes - 1 hour", "1 hour +"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.disneyplus.com/movies/before-the-flood/3oY6tZ6FqpMf",
            "image": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32ED67229B3C9BBCF74144E339497529D7507362B22358DB891A24DA771917E0/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 46,
            "title": "What is Climate Change?",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Science"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Causes of climate change"],
            "external-link": "https://www.un.org/sites/un2.un.org/files/fastfacts-what-is-climate-change.pdf",
            "image": "https://unfashionalliance.org/wp-content/uploads/2020/09/gca_mod.png"
        }, 
        {
            "id": 47,
            "title": "Climate change: causes, consequences and possible actions",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Science"],
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Causes of climate change", "Impacts of climate change"],
            "external-link": "https://www.leopoldina.org/fileadmin/redaktion/Publikationen/Infomaterial/Factsheet_Klimawandel_1.1_EN_web.pdf",
            "image": "https://www.leopoldina.org/fileadmin/redaktion/Publikationen/Infomaterial/13-Graphics-Factsheet-Climate_Change-tipping_points.png"
        },
        {
            "id": 48, 
            "title": "Causes, Consequences, and Solutions to Climate Change",
            "grade-level": ["10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Science"],
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.utoledo.edu/nsm/chemistry/pdfs/A%20Jorgensen%20Presentation.pdf",
            "image": "https://www.utoledo.edu/al/psychology/images/wolfe_hill_fall.jpg"
        },
        {
            "id": 49,
            "title": "Causes and effects of Climate Change",
            "grade-level": ["9th", "10th", "11th"],
            "media-type": "PDF",
            "subject-area": ["Science", "Other"],
            "time-range": ["Less than 15 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change"],
            "external-link": "https://www.un.org/en/climatechange/science/causes-effects-climate-change#collapseOne",
            "image": "https://cdn.unenvironment.org/2021-11/COP_negotation.jpeg"
        }, 
        {
            "id": 50,
            "title": "Why Women are Key to Climate Action",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Other", "History"],
            "time-range": ["Less than 15 minutes"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.un.org/en/climatechange/science/climate-issues/women",
            "image": "https://www.un.org/sites/un2.un.org/files/gender-climate-women-horizontal.jpg"
        },
        {
            "id": 51,
            "title": "Causes of Climate Change", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Science"],
            "time-range": ["Less than 15 minutes"], 
            "area": ["Causes of climate change"],
            "external-link": "https://climate.ec.europa.eu/climate-change/causes-climate-change_en", 
            "image": "https://ecfr.eu/wp-content/uploads/2023/12/437822350-scaled-1280x720-c-center.jpg"
        }, 
        {
            "id": 52,
            "title": "Climate Change 101: Climate Science Basics ",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Science", "Other"],
            "time-range": ["Less than 15 minutes", "15-30 minutes"],
            "area": ["Causes of climate change"],
            "external-link": "https://climatehealthconnect.org/wp-content/uploads/2016/09/Climate101.pdf",
            "image": "https://ec.europa.eu/eurostat/documents/8131531/16820858/Bas+Meelker_AdobeStock_281417615_RV.jpg/c578d5c5-f309-3231-d89a-8b7f69a1f18a?t=1684918383297"
        },
        {
            "id": 53,
            "title": "Is That True?",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["English"],
            "time-range": ["15-30 minutes", "30-45 minutes", "45 minutes - 1 hour"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://serc.carleton.edu/NAGTWorkshops/oceanography/activities/72605.html", 
            "image": "https://cdn.serc.carleton.edu/images/integrate/teaching_materials/ngss/workshop_participants_456.webp"
        }, 
        {
            "id": 54,
            "title": "Climate Super Solutions",
            "grade-level": ["9th", "10th", "11th", "12th"], 
            "media-type": "PDF", 
            "subject-area": ["English"], 
            "time-range": ["15-30 minutes", "30-45 minutes"], 
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://ncse.ngo/climate-solutions",
            "image": "https://pbs.twimg.com/media/GcjBU9pXkAATkU3?format=jpg&name=4096x4096"
        }, 
        {
            "id": 55,
            "title": "The Redford Center - Youth Activism",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["English", "History"],
            "time-range": ["15-30 minutes", "30-45 minutes"], 
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.redfordcenter.org/wp-content/uploads/2023/01/Lesson-8-final.pdf",
            "image": "https://yt3.googleusercontent.com/6w7O7VwmmKl8iqFluDkFuOSuUaCGxHgRCS56ac1R3je3sC7TLVpuOerOG0dpTqm96q3bgAnU=s900-c-k-c0x00ffffff-no-rj"
        }, 
        {
            "id": 56,
            "title": "The Redford Center – Community Power",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["English", "History"], 
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.redfordcenter.org/wp-content/uploads/2023/01/Lesson-9-final.pdf",
            "image": "https://yt3.googleusercontent.com/6w7O7VwmmKl8iqFluDkFuOSuUaCGxHgRCS56ac1R3je3sC7TLVpuOerOG0dpTqm96q3bgAnU=s900-c-k-c0x00ffffff-no-rj"
        }, 
        {
            "id": 57,
            "title": "Understanding Ocean and Coastal Acidification",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "Interactive",
            "subject-area": ["Science", "English"],
            "time-range": ["15-30 minutes", "30-45 minutes"],
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://noaa.maps.arcgis.com/apps/MapSeries/index.html?appid=adec7620009d439c85109ab9aa1ea227",
            "image": "https://news.fsu.edu/wp-content/uploads/2024/03/2024-NOAA-News-Graphic.jpg"
        },
        {
            "id": 58,
            "title": "Climate Change in Vermont: Measuring Predicted Impacts",
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["English", "Science", "History"], 
            "time-range": ["30-45 minutes", "45 minutes - 1 hour"], 
            "area": ["Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://www.nps.gov/common/uploads/teachers/lessonplans/MABI%20EmergingScience-501-ClimateChange.pdf",
            "image": "https://www.nps.gov/common/uploads/grid_builder/mabi/crop16_9/EAF81364-EDEA-30E7-064C71DF23CA5886.jpg?width=1300&quality=90&mode=crop"
        }, 
        {
            "id": 59,
            "title": "Fossil Teeth: Changing Climates and Evolutionary Responses", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type":"PDF", 
            "subject-area": ["History", "Science"], 
            "time-range": ["30-45 minutes", "15-30 minutes"],
            "area": ["Impacts of climate change"],
            "external-link": "https://www.nps.gov/teachers/classrooms/fossil-teeth-changing-climates-and-evolutionary-responses-preserved-in-the-fossil-record-lesson-plan-by-geoscientist-in-the-park-gina-roberti.htm",
            "image": "https://www.nps.gov/common/uploads/grid_builder/hafo/crop16_9/218DA59A-DEE9-C9EE-4FA45AFE4597906C.jpg?width=640&quality=90&mode=crop"
        }, 
        {
            "id": 60,
            "title": "Art + Science: Contemporary Artists on Climate Change", 
            "grade-level": ["9th", "10th", "11th", "12th"], 
            "media-type": "PDF",
            "subject-area": ["Arts"],
            "time-range": ["Less than 15 minutes", "15-30 minutes"],
            "area": ["Causes of climate change","Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.sbma.net/sites/default/files/attachment/Art%20%2B%20Science_%20Contemporary%20Artists%20on%20Climate%20Change.pdf",
            "image": "https://cdn.sanity.io/images/cxgd3urn/production/01b5dd59b8a3c9f3af718f1016075122e8b90838-2000x1363.jpg?rect=125,307,1750,1050&w=1200&h=720&q=85&fit=crop&auto=format"
        },
        {
            "id": 61,
            "title": "ART AND CLIMATE CHANGE: CONTEMPORARY ARTISTS RESPOND TO GLOBAL CRISIS",
            "grade-level": ["10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Arts"], 
            "time-range": ["15-30 minutes", "30-45 minutes"], 
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.christophervolpe.com/wp-content/uploads/2022/01/Art_and_Climate_Change_Contemporary_Arti-1.pdf",
            "image": "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/680xAUTO_original_article_2021_08_611faced85e25.jpeg"
        }, 
        {
            "id": 62,
            "title": "ARTS + ENVIRONMENT", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF", 
            "subject-area": ["Arts"], 
            "time-range": ["15-30 minutes", "30-45 minutes"], 
            "area": ["Causes of climate change", "Impacts of climate change", "Solutions to climate change"], 
            "external-link": "https://ww2.americansforthearts.org/sites/default/files/2024-10/ARTS%20%2B%20ENVIRONMENT.pdf", 
            "image": "https://i.ytimg.com/vi/8j_4_GNRSug/sddefault.jpg"
        },
        {
            "id": 63,
            "title": "HOW TO PROMOTE CLIMATE CHANGE THROUGH ART", 
            "grade-level": ["9th", "10th", "11th", "12th"],
            "media-type": "PDF",
            "subject-area": ["Arts"], "time-range":["30-45 minutes", "45 minutes - 1 hour"],
            "area": ["Impacts of climate change", "Solutions to climate change"],
            "external-link": "https://www.progettareineuropa.com/ineu23/wp-content/uploads/2023/11/How-to-promote-climate-change-through-art-Spreads.pdf",
            "image": "https://th-thumbnailer.cdn-si-edu.com/-IJ46q8XgForRnGHWmg_OodVKzY=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a7/dd/a7dd4409-2692-4048-8f84-007dc9e14ac6/landscape_of_change.jpg"
        }
    ]
};

// specify the database reference where you want to import the data
const databaseRef = ref(database, "/resources");

// write the JSON data to the database
set(databaseRef, jsonData)
  .then(() => {
    console.log("Data imported successfully!");
  })
  .catch((error) => {
    console.error("Error importing data:", error);
  });
