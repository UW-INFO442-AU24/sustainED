import ResourceCard, { ResourceData } from './ResourceCard';
import resourcesData from './resources.json'
import { useState, useEffect, ReactNode } from 'react';
import Filter from './Filter'

function Library() {
    const resources: ResourceData[] = resourcesData as ResourceData[]  

    const [filteredResources, setFilteredResources] = useState<ReactNode>([])
    const [selectedResourceType, setSelectedResourceType] = useState<String>("")
    const [selectedEnvironmentTopic, setSelectedEnvironmentTopic] = useState<String>("")
    const [selectedGradeLevel, setSelectedGradeLevel] = useState<number>(0)


    // Gathers unique resource types, environment topic, and grade levels
    const resourceTypes: string[] = resources
        .map(resource => resource.resource_type)
        .filter((resourceType, index, self) => {
            return self.indexOf(resourceType) === index;
        })
    
    const environment_topics: string[] = resources
        .map(resource => resource.environment_topic)
        .filter((environment_topic, index, self) => {
            return self.indexOf(environment_topic) === index;
        })

    const grade_levels: number[] = resources
        .map(resource => resource.grade_level)
        .filter((grade_level, index, self) => {
            return self.indexOf(grade_level) === index;
        })

    useEffect(() => {
        let filteredData : ResourceData[] = resources

        if (selectedResourceType) {
            filteredData = filteredData.filter(resource => resource.resource_type === selectedResourceType);
        }
        
        if (selectedEnvironmentTopic) {
            filteredData = filteredData.filter(resource => resource.environment_topic === selectedEnvironmentTopic);
        }
        
        if (selectedGradeLevel > 0) {
            filteredData = filteredData.filter(resource => resource.grade_level === selectedGradeLevel);
        }

        const resourceCards = filteredData.map(filteredResource => (
            <ResourceCard
                title={filteredResource.title}
                resource_type={filteredResource.resource_type}
                description={filteredResource.description}
                published_date={filteredResource.published_date}
                environment_topic={filteredResource.environment_topic}
                grade_level={filteredResource.grade_level}
            />
        ));

        setFilteredResources(resourceCards);
    }, [selectedResourceType, selectedEnvironmentTopic, selectedGradeLevel])

    return (
        <div>
            <h1>Resource Library</h1>   
            <Filter 
                resourceTypes={resourceTypes} setSelectedResourceType={setSelectedResourceType}
                environmentTopics={environment_topics} setSelectedEnvironmentTopic={setSelectedEnvironmentTopic}
                gradeLevels={grade_levels} setSelectedGradeLevel={setSelectedGradeLevel}
            />    
            {filteredResources}
        </div>
    );
}
export default Library
