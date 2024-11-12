import { useState } from 'react';

export type FilterData = {
    resourceTypes: string[];
    environmentTopics: string[];
    gradeLevels: number[];
    setSelectedResourceType: (resourceType: string) => void;
    setSelectedEnvironmentTopic: (environment_topic: string) => void;
    setSelectedGradeLevel: (grade_level: number) => void;
    filterRequest: (request: boolean) => void;
    userSearch: (search: string) => void;
};

export default function Filter(props: FilterData) {
    const { resourceTypes, environmentTopics, gradeLevels } = props;

    const [selectedResourceType, setSelectedResourceTypeState] = useState("");
    const [selectedEnvironmentTopic, setSelectedEnvironmentTopicState] = useState("");
    const [selectedGradeLevel, setSelectedGradeLevelState] = useState(0);
    const [userSearch, setUserSearch] = useState<string>("");

    const handleResourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedResourceTypeState(event.target.value);
    };

    const handleEnvironmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEnvironmentTopicState(event.target.value);
    };

    const handleGradeLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGradeLevelState(Number(event.target.value));
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserSearch(event.target.value.toLowerCase());
    }

    const submitFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setSelectedResourceType(selectedResourceType);
        props.setSelectedEnvironmentTopic(selectedEnvironmentTopic);
        props.setSelectedGradeLevel(selectedGradeLevel);
        props.userSearch(userSearch)
        props.filterRequest(true);
    };

    return (
        <div>
            <h2>Filter By:</h2>
            {/* Resource Types */}
            <label htmlFor="resourceTypeFilter">Resource Type: </label>
            <select id="resourceTypeFilter" onChange={handleResourceChange} >
                <option value="">All</option>
                {resourceTypes.sort().map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            {/* Environment Topics */}
            <label htmlFor="environmentTopicFilter">Environment Topic: </label>
            <select id="environmentTopicFilter" onChange={handleEnvironmentChange} >
                <option value="">All</option>
                {environmentTopics.sort().map((topic) => (
                    <option key={topic} value={topic}>
                        {topic}
                    </option>
                ))}
            </select>
            {/* Grade levels */}
            <label htmlFor="gradeLevelFilter">Grade Level Comprehension: </label>
            <select id="gradeLevelFilter" onChange={handleGradeLevelChange} >
                <option value="0">All</option>
                {gradeLevels.sort((a, b) => a - b).map((level) => (
                    <option key={level} value={level}>
                        {level}
                    </option>
                ))}
            </select>
            {/* search component */}
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" name="library_search"
                placeholder='Search by title'
                onChange={handleSearch}
            />
            
            <button type="button" onClick={submitFilter}>Filter</button>
        </div>
    );
}