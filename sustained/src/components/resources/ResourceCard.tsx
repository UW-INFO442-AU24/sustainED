export type ResourceData = {
    resource_type: string
    title: string
    description: string
    published_date: string // can't use Date, typescript issue?
}

function ResourceCard(props: ResourceData) {
    const resource_type = props.resource_type
    const title = props.title
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