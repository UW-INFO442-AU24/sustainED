import React, { useState } from "react";
import EventFavoriteButton from "./EventFavoriteButton";

export type Event = {
    id: number;
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    sustainabilityType: string;
    link: string;
};

export default function EventCards({ event }: { event: Event }) {
    return (
        <div className="event-card">
            <img className="event-image" src={event.image} alt={event.title} />
            <div className="event-details">
                <h2>{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Type: </strong>{event.sustainabilityType}</p>
                <a
                    href={event.link}
                    className="learn-more-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More
                </a>
            </div>
            <div className="favorite-button-container">
                <EventFavoriteButton event={event} />
            </div>
        </div>
    );
}
