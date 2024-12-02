import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import EventCards from "./eventcards";
import EventFilter from "./eventfilter";
import "./events.css";

interface Event {
    id: number;
    image: string;
    title: string;
    altText: string;
    date: string;
    time: string;
    location: string;
    sustainabilityType: string;
    link: string;
}

export default function EventPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEventType, setSelectedEventType] = useState("");
    const [sortOption, setSortOption] = useState("Newest First");

    // Fetch events from Firebase
    useEffect(() => {
        const database = getDatabase();
        const eventsRef = ref(database, "events");

        onValue(eventsRef, (snapshot) => {
            const data = snapshot.val();
            if (data && data.events) {
                setEvents(data.events);
                setFilteredEvents(data.events);
            }
        });
    }, []);

    // Filter and sort events
    useEffect(() => {
        let result = [...events];

        // Apply search filter
        if (searchTerm) {
            result = result.filter(
                (event) =>
                    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply event type filter
        if (selectedEventType) {
            result = result.filter((event) => event.sustainabilityType === selectedEventType);
        }

        // Apply sort option
        if (sortOption === "Newest First") {
            result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else {
            result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }

        setFilteredEvents(result);
    }, [events, searchTerm, selectedEventType, sortOption]);

    return (
        <div className="event-page">
            <div className="align-left-container">
                <h1 className="event-header">Upcoming Events</h1>
                <h2>Find upcoming environmental sustainability events happening for Seattle educators!</h2>
                <div className="search-container">
                    <EventFilter
                        setSearchTerm={setSearchTerm}
                        setSelectedEventType={setSelectedEventType}
                        setSortOption={setSortOption}
                        applyFilters={() => {}}
                    />
                </div>
            </div>
            <div className="grid-container">
                {filteredEvents.map((event) => (
                    <EventCards key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
}
