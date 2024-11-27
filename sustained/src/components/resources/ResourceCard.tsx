import { FavoriteButton } from "./FavoriteButton";

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
        <div className="col-sm-1 col-md-6">
            <div className="card resource">
                <h1 className="resource">{title}</h1>
                <p>{description}</p>
                <p><strong>Environment Topic:</strong> {environment_topic}</p>
                <p><strong>Source:</strong> {resource_type}</p>
                <p><strong>Grade Level Comprehension:</strong> {grade_level}</p>
                <p><strong>Date:</strong> {published_date}</p>
                <div>
                    <button className="export-pdf" aria-label="Export as PDF">Download PDF</button>
                    <FavoriteButton />
                </div>
            </div>
        </div>
    )
}

export default ResourceCard