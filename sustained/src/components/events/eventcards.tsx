import React from 'react';

interface EventProps {
  event: {
    id: number;
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    sustainabilityType: string;
  };
}

const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Location: {event.location}</p>
        <p>Sustainability Type: {event.sustainabilityType}</p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default EventCard;