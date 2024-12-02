import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(
//     // ignores the warn messages for v7 of react-router
//     <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
//       <App />
//     </BrowserRouter>
//   );
//   const linkElement = screen.getByText(/SustainED/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  
  expect(getByText(/Sustained/i)).toBeInTheDocument();
});
