export type ResourceData = {
    title: string
    description: string
    resource_type: string
    published_date: string
    environment_topic: string
    grade_level: number
}

function ResourceCard(props: ResourceData) {
    const title = props.title
    const description = props.description
    const environment_topic = props.environment_topic
    const resource_type = props.resource_type
    const grade_level = props.grade_level
    const published_date = props.published_date

    return (
        <div className="card resource">
            <h1 className="resource">Title: {title}</h1>
            <p>Description: {description}</p>
            <p>Environment Topic: {environment_topic}</p>
            <p>Source: {resource_type}</p>
            <p>Grade Level Comprehension: {grade_level}</p>
            <p>Date: {published_date}</p>
            <button className="export-pdf">Download PDF</button>
        </div>
    )
}

export default ResourceCard