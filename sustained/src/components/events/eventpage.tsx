import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import EventCard from './eventcards';
import './events.css'

const events = [
  {
    id: 1,
    image: '/eventimg/event1.jpg',
    title: 'Washington Conservation Action Carbon Friendly Forestry Conference',
    date: '2024-12-06',
    time: '9:00 AM',
    location: 'Cedarbrook Lodge (18525 36th Ave S, Seattle, WA 98188)',
    sustainabilityType: 'Forestry',
    link: 'https://waconservationaction.org/our-work/areas-of-work/evergreen-forests-old/carbon-conference/'
  },
  {
    id: 2,
    image: '/eventimg/event2.jpg',
    title: "Washington's Outdoor, Environmental, and Sustainability Educators' 2024 Conference",
    date: '2024-11-15',
    time: '12:30 PM',
    location: 'Cispus Learning Center (2142 Cispus Rd, Randle, WA 98377)',
    sustainabilityType: 'General',
    link: 'https://www.e3washington.org/conference'
  },
  {
    id: 3,
    image: '/eventimg/event3.jpg',
    title: "The Next 5 Years: How Food Systems May Contribute to the Success of the Sustainable Development Goals",
    date: '2024-12-05',
    time: '12:30 PM - 1:20 PM',
    location: 'Kane Hall 120 (4069 Spokane Ln NE, Seattle, WA 98105)',
    sustainabilityType: 'Waste',
    link: 'https://sustainability.uw.edu/events?trumbaEmbed=view%3Devent%26eventid%3D177968217'
  },
  {
    id: 4,
    image: '/eventimg/event4.jpg',
    title: "Inclusive Conservation: Impact Evaluation Lessons Including for Debt Relief",
    date: '2025-01-17',
    time: '12:00 PM - 1:30 PM',
    location: 'The Olsen Room (Gowen Hall 1A, Seattle, WA 98105)',
    sustainabilityType: 'Conservation',
    link: 'http://calendar.washington.edu/sea_essuw/177953379/InclusiveConservationImpactEvaluationLessonsIncludingforDebtRelief'
  },
  {
    id: 5,
    image: '/eventimg/event5.jpg',
    title: "Washington Climate Educator Book Club: Intro to Climate Work",
    date: '2024-11-19',
    time: '5:00 PM - 7:00 PM',
    location: 'Virtual',
    sustainabilityType: 'General',
    link: 'https://www.climetime.org/event/washington-climate-educator-book-club/?occurrence=2024-11-19&time=1732035600'
  },
  {
    id: 6,
    image: '/eventimg/event5.jpg',
    title: "Washington Climate Educator Book Club: Climate Change in WA",
    date: '2025-02-25',
    time: '5:00 PM - 7:00 PM',
    location: 'Virtual',
    sustainabilityType: 'General',
    link: 'https://www.climetime.org/event/washington-climate-educator-book-club/?occurrence=2025-02-25&time=1740502800'
  },
  {
    id: 7,
    image: '/eventimg/event5.jpg',
    title: "Washington Climate Educator Book Club: Group Share",
    date: '2025-05-06',
    time: '5:00 PM - 7:00 PM',
    location: 'Virtual',
    sustainabilityType: 'General',
    link: 'https://www.climetime.org/event/washington-climate-educator-book-club/?occurrence=2025-05-06&time=1746550800'
  },
  {
    id: 8,
    image: '/eventimg/event8.jpg',
    title: "Washington Oregon Cascadia Higher Education Sustainability Conference",
    date: '2025-03-05',
    time: '8:00 AM - 3:00 PM',
    location: 'Portland Community College Sylvania Campus (12000 SW 49th Avenue Portland, OR 97219)',
    sustainabilityType: 'General',
    link: 'https://wohesc.org/'
  },
];

const EventPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedType, setSelectedType] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest First');

  const filterEvents = (type: string) => {
      setSelectedType(type);
      if (type === 'All') {
          setFilteredEvents(events);
      } else {
          setFilteredEvents(events.filter(event => event.sustainabilityType === type));
      }
  };

  const sortEvents = (order: string) => {
      setSortOrder(order);
      const sortedEvents = [...filteredEvents].sort((a, b) => {
          if (order === 'Newest First') {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
          } else {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
          }
      });
      setFilteredEvents(sortedEvents);
  };

  return (
      <div className="container">
          <h1>Upcoming Events</h1>
          <p className="subheading">Find upcoming environmental sustainability events for educators in Washington!</p>
          
          <div className="filter-sort-container">
              <Dropdown onSelect={(eventKey) => filterEvents(eventKey || 'All')}>
                  <Dropdown.Toggle style={{ backgroundColor: '#7e6c55', borderColor: '#7e6c55' }}>
                      {selectedType}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item eventKey="All">All</Dropdown.Item>
                      <Dropdown.Item eventKey="Forestry">Forestry</Dropdown.Item>
                      <Dropdown.Item eventKey="General">General</Dropdown.Item>
                      <Dropdown.Item eventKey="Waste">Waste</Dropdown.Item>
                      <Dropdown.Item eventKey="Conservation">Conservation</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>

              <Dropdown onSelect={(eventKey) => sortEvents(eventKey || 'Newest First')}>
                  <Dropdown.Toggle style={{ backgroundColor: '#7e6c55', borderColor: '#7e6c55' }}>
                      {sortOrder}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item eventKey="Newest First">Newest First</Dropdown.Item>
                      <Dropdown.Item eventKey="Oldest First">Oldest First</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </div>

          <div className="grid-container">
              {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
              ))}
          </div>
      </div>
  );
};

export default EventPage;
