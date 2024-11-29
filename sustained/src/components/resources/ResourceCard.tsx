import { FavoriteButton } from "./FavoriteButton"
import MyDocument from "./ExportPDF"
import { PDFDownloadLink } from '@react-pdf/renderer';

export type ResourceData = {
    title: string
    description: string
    resource_type: string
    published_date: string
    environment_topic: string
    grade_level: number
    image: string
}

function ResourceCard(props: ResourceData) {
    const title = props.title
    const description = props.description
    const environment_topic = props.environment_topic
    const resource_type = props.resource_type
    const grade_level = props.grade_level
    const published_date = props.published_date
    const image = props.image

    return (
        <div className="col-sm-1 col-md-6">
            <div className="card resource">
                <img src={image} className="resource-img" alt="library resource background"></img>
                <h1 className="resource">{title}</h1>
                <p>{description}</p>
                <p><strong>Environment Topic:</strong> {environment_topic}</p>
                <p><strong>Source:</strong> {resource_type}</p>
                <p><strong>Grade Level Comprehension:</strong> {grade_level}</p>
                <p><strong>Date:</strong> {published_date}</p>
                <div>
                    <PDFDownloadLink className="pdf-download" aria-label="Download a PDF"
                        document={MyDocument(props.title, props.description, props.published_date)}>
                            Download PDF
                    </PDFDownloadLink>
                    {/* <FavoriteButton /> */}
                </div>
            </div>
        </div>
    )
}

export default ResourceCard