export type FilterData = {
    resourceTypes: string[]
    setSelectedResourceType: (resourceType: string) => void
}

export default function Filter(props: FilterData) {
    const resourceTypes = props.resourceTypes

    let selectedResourceType : string

    // sort by resource type
    const handleResourceChange = (event: any) => {
        selectedResourceType = event.target.value;
    }

    const submitFilter = (event: any) => {
        props.setSelectedResourceType(selectedResourceType)
    }

    return (
        <div>
            <label htmlFor="resourceTypeFilter">Filter by Resource Type: </label>
            <select id="resourceTypeFilter" onChange={handleResourceChange}>
                <option value="">All</option>
                {resourceTypes.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <button type="submit" onClick={submitFilter}>Filter</button>
        </div>
    );
}