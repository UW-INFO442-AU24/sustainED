import React, { useEffect, useState } from 'react';
import { RadioGroup, Radio, Button, cn, Progress } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, get} from 'firebase/database';
import './quiz.css';

// defining the props of the resource array 
export interface Resource {
    area: string[];
    "external-link": string;
    "grade-level": string[];
    id: number;
    image: string;
    "media-type": string;
    "subject-area": string[];
    "time-range": string[];
    title: string;
}

const QuizForm = () => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({}); // keeping track of what is currently being selected -- starting with nothing selected/no default
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // keeping track of what question user is currently on -- starting on question 1
    const [progressPercentage, setProgressPercentage] = useState(0); // setting the progress percentage based on num of questions answered -- starting at 0%
    const [matchedResources, setMatchedResources] = useState<Resource[]>([]); // keeping track of resources that are matched based on the selected options in the quiz
    const [resources, setResources] = useState<Resource[]>([]);  // state to store resources fetched from Firebase
    const navigate = useNavigate(); // to navigate to diff page

    // questions for the quiz
    const questions = [
        {id: 1,
          question: "What grade level do you teach?",
          options: ["9th", "10th", "11th", "12th"]},
        {id: 2,
          question: "What media type do you prefer?",
          options: ["PDF", "Video", "Visual Art", "Podcast", "Interactive"]},
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

    // fetch resources from Firebase Realtime Database
    useEffect(() => {
        const fetchResources = async () => {
          try {
            const db = getDatabase();
            const resourcesRef = ref(db, '/resources');
            const snapshot = await get(resourcesRef);
            if (snapshot.exists()) {
              const data = snapshot.val();
              const resourcesArray: Resource[] = Object.values(data);
              setResources(resourcesArray);
            } else {
              console.log("No data available to fetch");
            }
          } catch (error) {
            console.error("Error fetching resources:", error);
          }
        };
        fetchResources();
      }, []);  
    

    // function to match resources based on selected options
    const matchingResources = (resources: Resource[], selectedOptions: Record<string, string>) => {
        const flatResources = resources[0]; 
        if (!Array.isArray(flatResources)) {
            console.error("Expected a flat array inside resources[0], but got:", flatResources);
            return [];
        }

        const matchedResources = flatResources.filter(resource => {
            const isMatch = (
                (!selectedOptions['5'] || (resource.area && resource.area.includes(selectedOptions['5']))) &&
                (!selectedOptions['1'] || (resource['grade-level'] && resource['grade-level'].includes(selectedOptions['1']))) &&
                (!selectedOptions['2'] || (resource['media-type'] && resource['media-type'] === selectedOptions['2'])) &&
                (!selectedOptions['3'] || (resource['subject-area'] && resource['subject-area'].includes(selectedOptions['3']))) &&
                (!selectedOptions['4'] || (resource['time-range'] && resource['time-range'].includes(selectedOptions['4'])))
            );
            console.log(`Resource ${resource.id} match: ${isMatch}`); // debugging
            return isMatch;        
        });
        
        // fisher-Yates shuffle
        for (let i = matchedResources.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [matchedResources[i], matchedResources[j]] = [matchedResources[j], matchedResources[i]];
        }
    
        return matchedResources.slice(0, 3);
    };

    // function to handle changing the selected options
    const handleOptionChange = (value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [currentQuestionIndex + 1]: value
        }));
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
        const matched = matchingResources(resources, selectedOptions as Record<string, string>);
        console.log('Matched resources after submitting quiz:', matched);
        setMatchedResources(matched);
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
                        <div className="flex flex-col gap-6 w-full max-w-full">
                            <Progress classNames={{
                                base: "max-w-full",
                                track: "drop-shadow-lg border border-default",
                                indicator: "bg-green-600",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
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
                        disabled={!selectedOptions[(currentQuestionIndex + 1).toString()]}
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