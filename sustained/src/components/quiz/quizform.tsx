import React, { useEffect, useState } from 'react';
import { RadioGroup, Radio, Button, cn, Progress } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import './quiz.css';
import resourcesData from '../../data/resources.json';
const resources: Resource[] = resourcesData.resources; // initializing resources as an array of resource objects

// defining the props of the resource array 
export interface Resource {
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

const QuizForm = () => {
    const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({}); // keeping track of what is currently being selected -- starting with nothing selected/no default
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // keeping track of what question user is currently on -- starting with question 1
    const [progressPercentage, setProgressPercentage] = useState(0); // setting the progress percentage based on num of questions answered
    const navigate = useNavigate();

    // questions for the quiz
    const questions = [
        {id: 1,
          question: "What grade level do you teach?",
          options: ["9th", "10th", "11th", "12th"]},
        {id: 2,
          question: "What media type do you prefer?",
          options: ["PDF", "Video", "Podcast", "Interactive"]},
        {id: 3,
          question: "What subject/topic area do you teach?",
          options: ["Science", "English", "Math", "History", "Arts", "Foreign Languages", "Other"]},
        {id: 4,
          question: "How long should the material be?",
          options: ["Less than 15 minutes", "15-30 minutes", "30-45 minutes", "45 minutes - 1 hour", "1 hour +"]},
        {id: 5,
          question: "What area of climate change are you interested in?",
          options: ["Causes of climate change", "Solutions to climate change", "Impacts of climate change"]}
    ];

    
    // function to handle changing the selected options
    const handleOptionChange = (value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [currentQuestionIndex + 1]: value
        }));
    };

    // function to match resources based on selected options
    const matchingResources = () => {
        return resources.filter(resource => {
            return (
                (!selectedOptions[1] || resource['grade-level'].includes(selectedOptions[1])) &&
                (!selectedOptions[2] || resource['media-type'] === selectedOptions[2]) &&
                (!selectedOptions[3] || resource['subject-area'].includes(selectedOptions[3])) &&
                (!selectedOptions[4] || resource['time-range'].includes(selectedOptions[4])) &&
                (!selectedOptions[5] || resource.area.includes(selectedOptions[5]))
            );
        }).slice(0, 3);
    };

    // function to go to the next question after previous one has been answered
    const nextQuestion = () => {
        const nextIndex = Math.min(currentQuestionIndex + 1, questions.length - 1);
        setCurrentQuestionIndex(nextIndex);
        if (nextIndex === questions.length - 1) {
            setProgressPercentage(100);
        }
    };

    // function to submit the quiz
    const submitQuiz = () => {
        setProgressPercentage(100);
        const matched = matchingResources();
        navigate('/quiz-results', { state: { selectedOptions, matchedResources: matched } });
    };

    // navigating back to the prev question when the back button is pressed
    const previousQuestion = () => {
        setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    // manages the percentage change as the questions are answered
    useEffect(() => {
        const newPercentage = ((currentQuestionIndex) / questions.length) * 100;
        setProgressPercentage(newPercentage);
    }, [currentQuestionIndex, questions.length]);


    return (
        <div className="quiz-container">
            {progressPercentage < 100 ? (
                <>
                    <div className="question-header">
                        <h2 className="question-text">{questions[currentQuestionIndex].question}</h2>
                        <p className="question-progress"> {currentQuestionIndex + 1}/{questions.length} </p>
                    </div>

                    <div className="progress-bar">
                        <div className="flex flex-col gap-6 w-full max-w-md">
                            <Progress classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-green-600",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60",
                            }}
                            color="success"
                            aria-label="Loading..."
                            value={progressPercentage} />
                        </div>
                    </div>

                    <RadioGroup 
                        value={selectedOptions[currentQuestionIndex + 1] || ""}
                        onValueChange={handleOptionChange}
                        className="radio-group">
                        {questions[currentQuestionIndex].options.map(option => (
                            <Radio
                            color="success"
                            key={option}
                            value={option}
                            className={cn(
                              "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                              "flex-row-reverse w-full xs:max-w-[480px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px]",
                              "cursor-pointer rounded-lg gap-4 p-4 border-2 border-bg-zinc-400",
                              "data-[selected=true]:border-green-600"
                            )}
                          >
                            {option}
                          </Radio>
                        ))}
                    </RadioGroup>

                    <div className="button-container">
                        {currentQuestionIndex > 0 && (
                            <Button className="back-button" onClick={previousQuestion}>
                                Back
                            </Button>
                        )}
                        <Button 
                            className="next-button" 
                            onClick={currentQuestionIndex < questions.length - 1 ? nextQuestion : submitQuiz}
                            disabled={!selectedOptions[currentQuestionIndex + 1]}
                        >
                            {currentQuestionIndex < questions.length - 1 ? "Next" : "Results"}
                        </Button>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default QuizForm;