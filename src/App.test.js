import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sri Lanka Tourism title', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to Sri Lanka Tourism/i);
  expect(heading).toBeInTheDocument();
});
