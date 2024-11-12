import React from 'react';

interface EventCardProps {
  event: {
    id: number;
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    sustainabilityType: string;
    link: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <div className="event-card-content">
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Type:</strong> {event.sustainabilityType}</p>
        <a href={event.link} className="learn-more-button" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default EventCard;
