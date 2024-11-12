import React, { useState } from 'react';
import EventCard from './eventcards';
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

interface EventData {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  sustainabilityType: string;
}

const events: EventData[] = [
  {
    id: 1,
    image: '/eventimg/event1.jpg',
    title: 'Washington Conservation Action Carbon Friendly Forestry Conference',
    date: '2024-12-06',
    time: '9:00 AM',
    location: 'Cedarbrook Lodge (18525 36th Ave S, Seattle, WA 98188)',
    sustainabilityType: 'Forestry'
  },
  {
    id: 2,
    image: '/eventimg/event2.jpg',
    title: "Washington's Outdoor, Environmental, and Sustainability Educators' 2024 Conference",
    date: '2024-11-15',
    time: '12:30 PM',
    location: 'Cispus Learning Center (2142 Cispus Rd, Randle, WA 98377)',
    sustainabilityType: 'General'
  },
  {
    id: 3,
    image: '/eventimg/event3.jpg',
    title: "The Next 5 Years: How Food Systems May Contribute to the Success of the Sustainable Development Goals",
    date: '2024-12-05',
    time: '12:30 PM - 1:20 PM',
    location: 'Kane Hall 120 (4069 Spokane Ln NE, Seattle, WA 98105)',
    sustainabilityType: 'Waste'
  },
  {
    id: 4,
    image: '/eventimg/event4.jpg',
    title: "Inclusive Conservation: Impact Evaluation Lessons Including for Debt Relief",
    date: '2025-01-17',
    time: '12:00 PM - 1:30 PM',
    location: 'The Olsen Room (Gowen Hall 1A, Seattle, WA 98105)',
    sustainabilityType: 'Conservation'
  },
];

const EventPage: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>(events);

  const filterEvents = (type: string) => {
    const filtered = type === 'All' ? events : events.filter(event => event.sustainabilityType === type);
    setFilteredEvents(filtered);
  };

  const sortEventsByDate = () => {
    const sorted = [...filteredEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setFilteredEvents(sorted);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-left mb-4">Upcoming Sustainability Events</h1>

      <div className="d-flex justify-content-between mb-3">
        <DropdownButton id="filter-dropdown" title="Filter by Type" variant="secondary">
          <Dropdown.Item onClick={() => filterEvents('All')}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => filterEvents('Forestry')}>Forestry</Dropdown.Item>
          <Dropdown.Item onClick={() => filterEvents('General')}>General</Dropdown.Item>
          <Dropdown.Item onClick={() => filterEvents('Waste')}>Waste</Dropdown.Item>
          <Dropdown.Item onClick={() => filterEvents('Conservation')}>Conservation</Dropdown.Item>
        </DropdownButton>

        <Button variant="secondary" onClick={sortEventsByDate}>Sort by Date</Button>
      </div>

      <Row xs={1} md={2} lg={2} className="g-4">
        {filteredEvents.map((event) => (
          <Col key={event.id}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventPage;
