import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtU3f3BcOrfcbUuGiu228NMy8Wnl3jkmw",
    authDomain: "sustained-f16ac.firebaseapp.com",
    databaseURL: "https://sustained-f16ac-default-rtdb.firebaseio.com",
    projectId: "sustained-f16ac",
    storageBucket: "sustained-f16ac.firebasestorage.app",
    messagingSenderId: "924904245250",
    appId: "1:924904245250:web:1eb36f88596233163bbf1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Event data
const eventData = {
    events: [
        {
            id: 1,
            image: 'https://waconservationaction.org/wp-content/uploads/2024/07/Carbon-Conference-Graphic-1536x869.png',
            title: 'Washington Conservation Action Carbon Friendly Forestry Conference',
            date: '2024-12-06',
            time: '9:00 AM',
            location: 'Cedarbrook Lodge (18525 36th Ave S, Seattle, WA 98188)',
            sustainabilityType: 'Forestry',
            link: 'https://waconservationaction.org/our-work/areas-of-work/evergreen-forests-old/carbon-conference/'
        },
        {
            id: 2,
            image: 'https://static1.squarespace.com/static/615cd21ed76a6a2942cc3b78/t/66ce4667768fae189075c71e/1724794475497/E3%2Band%2BOSWA%2BConference%2BNovember%2B2024.jpg?format=1500w',
            title: "Washington's Outdoor, Environmental, and Sustainability Educators' 2024 Conference",
            date: '2024-11-15',
            time: '12:30 PM',
            location: 'Cispus Learning Center (2142 Cispus Rd, Randle, WA 98377)',
            sustainabilityType: 'General',
            link: 'https://www.e3washington.org/conference'
        },
        {
            id: 3,
            image: 'https://www.trumba.com/i/DgDT-vzrlQkIkTY9RBfNJIe%2A.jpg?w=800&h=450',
            title: "The Next 5 Years: How Food Systems May Contribute to the Success of the Sustainable Development Goals",
            date: '2024-12-05',
            time: '12:30 PM - 1:20 PM',
            location: 'Kane Hall 120 (4069 Spokane Ln NE, Seattle, WA 98105)',
            sustainabilityType: 'Waste',
            link: 'https://sustainability.uw.edu/events?trumbaEmbed=view%3Devent%26eventid%3D177968217'
        },
        {
            id: 4,
            image: 'https://www.trumba.com/i/DgBtMGVnNsrKJpqQO%2A3Jonc5.jpg?w=800&h=322',
            title: "Inclusive Conservation: Impact Evaluation Lessons Including for Debt Relief",
            date: '2025-01-17',
            time: '12:00 PM - 1:30 PM',
            location: 'The Olsen Room (Gowen Hall 1A, Seattle, WA 98105)',
            sustainabilityType: 'Conservation',
            link: 'http://calendar.washington.edu/sea_essuw/177953379/InclusiveConservationImpactEvaluationLessonsIncludingforDebtRelief'
        },
        {
            id: 5,
            image: 'https://www.climetime.org/wp-content/uploads/logo_5-year-mark-color-383px.jpg',
            title: "Washington Climate Educator Book Club: Intro to Climate Work",
            date: '2024-11-19',
            time: '5:00 PM - 7:00 PM',
            location: 'Virtual',
            sustainabilityType: 'General',
            link: 'https://www.climetime.org/event/washington-climate-educator-book-club/?occurrence=2024-11-19&time=1732035600'
        },
        {
            id: 6,
            image: 'https://www.climetime.org/wp-content/uploads/logo_5-year-mark-color-383px.jpg',
            title: "Washington Climate Educator Book Club: Climate Change in WA",
            date: '2025-02-25',
            time: '5:00 PM - 7:00 PM',
            location: 'Virtual',
            sustainabilityType: 'General',
            link: 'https://www.climetime.org/event/washington-climate-educator-book-club/?occurrence=2025-02-25&time=1740502800'
        },
        {
            id: 7,
            image: 'https://www.climetime.org/wp-content/uploads/logo_5-year-mark-color-383px.jpg',
            title: "Washington Climate Educator Book Club: Group Share",
            date: '2025-05-06',
            time: '5:00 PM - 7:00 PM',
            location: 'Virtual',
            sustainabilityType: 'General',
            link: 'https://www.climetime.org/event/washington-climate-educator-book-club/?occurrence=2025-05-06&time=1746550800'
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fdqxrmMt4Wce1u9ZOtiV0O8r_lBKD_92hA&s',
            title: "Washington Oregon Cascadia Higher Education Sustainability Conference",
            date: '2025-03-05',
            time: '8:00 AM - 3:00 PM',
            location: 'Portland Community College Sylvania Campus (12000 SW 49th Avenue Portland, OR 97219)',
            sustainabilityType: 'General',
            link: 'https://wohesc.org/'
        },
        {
          id: 9,
          image: 'https://www.trumba.com/i/DgBtMGVnNsrKJpqQO%2A3Jonc5.jpg?w=800&h=322',
          title: "Disparities in Disconnections: Utility Access in the Age of Climate Change",
          date: '2025-02-21',
          time: '12:00 PM - 1:30 PM',
          location: 'The Olsen Room - Gowen Hall 1A',
          sustainabilityType: 'General',
          link: 'https://sustainability.uw.edu/events?trumbaEmbed=view%3Devent%26eventid%3D177953380'
        },
        {
          id: 10,
          image: 'https://www.trumba.com/i/DgAq67RLiHjT7oJF7mUz6CEw.jpg?w=500&h=332',
          title: "2025 Ecological Restoration Symposium Local Scales for Global Impacts",
          date: '2025-04-01',
          time: 'All Day',
          location: 'Center for Urban Horticulture (3501 NE 41st St., Seattle, WA)',
          sustainabilityType: 'General',
          link: 'https://botanicgardens.uw.edu/education/adults/conferences-symposia/ecological-restoration-symposium/'
        },
    ]
};

// Specify the database reference
const databaseRef = ref(database, "events");

// Upload data to Firebase
set(databaseRef, eventData)
    .then(() => {
        console.log("Events imported successfully!");
    })
    .catch((error) => {
        console.error("Error importing events:", error);
    });
