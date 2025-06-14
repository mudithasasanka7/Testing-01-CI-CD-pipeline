import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello react heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello react/i);
  expect(headingElement).toBeInTheDocument();
});
