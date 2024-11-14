import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardFooter, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import './quiz.css';

// define the Resource type to match the data structure
interface Resource {
    id: number;
    title: string;
    "grade-level": string[];
    "media-type": string;
    "subject-area": string[];
    "time-range": string[];
    area: string[];
    "external-link": string;
    image: string;
}

const QuizResults = () => {
    const location = useLocation();
    const { matchedResources } = location.state as { matchedResources: Resource[] } || {}; // retrieve matched resources from state
    const navigate = useNavigate(); 

    console.log('Received matched resources:', matchedResources); // Add this line for debugging

    return (
        <div className='result-container'>
            <h2 className='qr-title'><b>Quiz Results</b></h2>
            <p className='subtitle'>Here are some recommended resources for you:</p>

            {matchedResources.length > 0 ? (
                <div className='cards-container'>
                    {matchedResources.map((resource) => (
                        <Card key={resource.id} isFooterBlurred className="resource-card">
                            <img
                                alt="resource background"
                                className="z-0 w-full h-full object-cover"
                                src={resource.image}
                            />
                            <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <div className="flex flex-col">
                                        <h4 className="text-white/90 font-medium text-xxl">{resource.title}</h4>
                                        <p className="text-small text-white/60">Type: {resource["media-type"]}</p>
                                        <p className="text-small text-white/60">Grade Level: {resource["grade-level"].join(", ")}</p>
                                    </div>
                                </div>
                                <Button radius="full" size="sm" as="a" href={resource["external-link"]} target="_blank" rel="noopener noreferrer">
                                    View
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <p className='no-resources'>No matching resources found, try adjusting your answers to get better results!</p>
            )}

            <Button className="restart-button" onClick={() => window.history.back()}>
                Retake Quiz!
            </Button>
            <Button className="home-button" onClick={() => navigate('/home')}>
                Home
            </Button>
        </div>
    );
};

export default QuizResults;