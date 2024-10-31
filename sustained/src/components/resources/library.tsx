import ResourceCard, { ResourceData } from './ResourceCard';
import resourcesData from './resources.json'
import { useState, useEffect, ReactNode } from 'react';
import Filter from './Filter'

function Library() {
    const resources: ResourceData[] = resourcesData as ResourceData[]
    // Test to filter by resource type
    const [filteredResources, setFilteredResources] = useState<ReactNode>([])
    const [selectedResourceType, setSelectedResourceType] = useState("")

    const resourceList = resources.map(resource =>
        <ResourceCard
            title={resource.title}
            resource_type={resource.resource_type} 
            description={resource.description} 
            published_date={resource.published_date}                
        />
    )

    // Gathers unique resource types
    const resourceTypes: string[] = resources
        .map(resource => resource.resource_type)
        .filter((resourceType, index, self) => {
            return self.indexOf(resourceType) === index;
        })
    
    useEffect(() => {
        // filters the resource list to the user's selection
        if (selectedResourceType === "") {
            setFilteredResources(resourceList)
        } else {
            const filteredData = resources
                .filter(resource => resource.resource_type === selectedResourceType)
                .map(filteredResource => (
                    <ResourceCard
                        title={filteredResource.title}
                        resource_type={filteredResource.resource_type}
                        description={filteredResource.description}
                        published_date={filteredResource.published_date}
                    />
                ));

            setFilteredResources(filteredData);
        }
    }, [selectedResourceType, resourceList, resources])

    return (
        <div>
            <h1>Resource Library</h1>   
            <Filter resourceTypes={resourceTypes} setSelectedResourceType={setSelectedResourceType} />    
            {filteredResources}
        </div>
    );
}
export default Library
