import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import App from './App';

test('renders Tasmanian Trouts text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tasmanian Trouts/);
  expect(linkElement).toBeInTheDocument();
});


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByRole(/Radar/)).toBeInTheDocument();
  });
});