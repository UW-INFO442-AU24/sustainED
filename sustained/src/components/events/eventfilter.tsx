import React, { useState } from "react";
import './events.css';

type EventFilterProps = {
    setSearchTerm: (term: string) => void;
    setSelectedEventType: (type: string) => void;
    setSortOption: (option: string) => void;
    applyFilters: () => void;
};

export default function EventFilter({
    setSearchTerm,
    setSelectedEventType,
    setSortOption,
    applyFilters,
}: EventFilterProps) {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        applyFilters();
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEventType(e.target.value);
        applyFilters();
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
        applyFilters();
    };

    return (
        <div className="event-filter-sort-container">
            <input
                className="event-search-bar"
                type="text"
                placeholder="Search events..."
                onChange={handleSearchChange}
            />
            <select className="event-dropdown-button" onChange={handleTypeChange}>
                <option value="">All Types</option>
                <option value="Forestry">Forestry</option>
                <option value="General">General</option>
                <option value="Waste">Waste</option>
                <option value="Conservation">Conservation</option>
            </select>
            <select className="event-sort-button" onChange={handleSortChange}>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
            </select>
        </div>
    );
}
