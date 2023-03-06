import React from 'react';
import { render, screen } from '@testing-library/react';
import Geeks from "./Geeks";

test('renders Geeks correctly', () => {
  render(<Geeks />);
  const targetElement = screen.getByText(/hellow/i);
  expect(targetElement).toBeInTheDocument();
});
