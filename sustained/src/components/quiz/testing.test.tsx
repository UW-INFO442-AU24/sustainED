import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter for testing
import QuizResults from './QuizResults';

describe('QuizResults Tested', () => {
  it('should display the Retake Quiz button', () => {
    // mocking matchedResources passed in state
    const locationState = { matchedResources: [] }; // No resources, fallback message
    
    render(
      <MemoryRouter initialEntries={[{ pathname: '/quiz-results', state: locationState }]}>
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
      <MemoryRouter initialEntries={[{ pathname: '/quiz-results', state: locationState }]}>
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

