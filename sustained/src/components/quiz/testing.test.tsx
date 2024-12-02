import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter for testing
import QuizResults from './QuizResults';
import QuizForm, { Resource } from './quizform';
import resourcesData from '../../data/resources.json';

describe('QuizResults Tested', () => {
  it('should display the Retake Quiz button', () => {
    // mocking matchedResources passed in state
    const locationState = { matchedResources: [] }; // No resources, fallback message
    
    render(
      <MemoryRouter initialEntries={[{ pathname: '/quiz-results', state: locationState }]} future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <QuizResults />
      </MemoryRouter>
    );

    // check if the Retake Quiz button is in the document
    const retakeButton = screen.getByText(/Retake Quiz!/i);
    expect(retakeButton).toBeInTheDocument();
  });

  it('should trigger the go back action when the Retake Quiz button is clicked', () => {
    const locationState = { matchedResources: [] }; // No resources, fallback message
    
    render(
      <MemoryRouter initialEntries={[{ pathname: '/quiz-results', state: locationState }]} future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <QuizResults />
      </MemoryRouter>
    );
    
    // mock window.history.back to check if it's called
    const mockHistoryBack = jest.spyOn(window.history, 'back').mockImplementation(() => {});
    
    // simulate clicking the "Retake Quiz!" button
    const retakeButton = screen.getByText(/Retake Quiz!/i);
    fireEvent.click(retakeButton);
    
    // check if window.history.back() was called
    expect(mockHistoryBack).toHaveBeenCalled();
    
    // clean up mock
    mockHistoryBack.mockRestore();
  });
});


// mock the resources data
const resources: Resource[] = resourcesData.resources;

describe('QuizForm', () => {
  test('ensures resources are randomized each time the quiz is taken', () => {
    // utility function to extract IDs for easier comparison
    const getResourceIds = (resources: Resource[]) => resources.map(resource => resource.id);

    // mock selectedOptions with all questions answered
    const selectedOptions = {
      1: '10th',
      2: 'PDF',
      3: 'Science',
      4: '15-30 minutes',
      5: 'Impacts of climate change',
    };

    // mock matchingResources function from QuizForm
    const mockMatchingResources = (resources: Resource[], options: Record<number, string>) => {
      const filteredResources = resources.filter(resource => {
        return (
          (!options[1] || resource['grade-level'].includes(options[1])) &&
          (!options[2] || resource['media-type'] === options[2]) &&
          (!options[3] || resource['subject-area'].includes(options[3])) &&
          (!options[4] || resource['time-range'].includes(options[4])) &&
          (!options[5] || resource.area.includes(options[5]))
        );
      });

      // Fisher-Yates shuffle
      for (let i = filteredResources.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredResources[i], filteredResources[j]] = [filteredResources[j], filteredResources[i]];
      }

      return filteredResources.slice(0, 3);
    };

    // get matched resources twice
    const firstShuffle = mockMatchingResources(resources, selectedOptions);
    const secondShuffle = mockMatchingResources(resources, selectedOptions);

    // compare their order using IDs
    const firstIds = getResourceIds(firstShuffle);
    const secondIds = getResourceIds(secondShuffle);

    // ensure that the arrays are not identical in order
    expect(firstIds).not.toEqual(secondIds);
  });
});