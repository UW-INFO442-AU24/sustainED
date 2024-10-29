import ResourceCard, { ResourceData } from './ResourceCard';
import resourcesData from './resources.json'

function Library() {
    const resources: ResourceData[] = resourcesData as ResourceData[]
    
    const resourceList = resources.map(resource => {
        return (
            <ResourceCard
                title={resource.title}
                resource_type={resource.resource_type} 
                description={resource.description} 
                published_date={resource.published_date}                
            />
        )
    })

    return (
        <div>
            <h1>Resource Library</h1>
            {resourceList}
        </div>
    );
}
export default Library