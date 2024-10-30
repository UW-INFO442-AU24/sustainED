export type FilterData = {
    resourceTypes: string[]
    setSelectedResourceType: (resourceType: string) => void
}

export default function Filter(props: FilterData) {
    const resourceTypes = props.resourceTypes

    // sort by resource type
    const handleResourceChange = (event: any) => {
        const value = event.target.value;
        props.setSelectedResourceType(value) // allows Library to filter
    }

    return (
        <div>
            <label htmlFor="resourceTypeFilter">Filter by Resource Type: </label>
            <select id="resourceTypeFilter" onChange={handleResourceChange}>
                <option key="all" value="">All</option>
                {resourceTypes.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
}
