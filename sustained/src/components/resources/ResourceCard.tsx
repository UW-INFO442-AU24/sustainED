export type ResourceData = {
    title: string
    resource_type: string
    description: string
    published_date: string
}

function ResourceCard(props: ResourceData) {
    const title = props.title
    const resource_type = props.resource_type
    const description = props.description
    const published_date = props.published_date

    return (
        <div className="card">
            <h1>Title: {title}</h1>
            <h2>Source: {resource_type}</h2>
            <p>Date: {published_date}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default ResourceCard