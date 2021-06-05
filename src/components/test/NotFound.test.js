import { render } from '@testing-library/react';
import NotFound from '../elements/NotFound/NotFound';
import React from "react";
import '@testing-library/jest-dom/extend-expect';

test('renders h1', () => {
  const { getByText } = render(<NotFound />);
  const h1 = getByText(/Whooops. This page doesn't exist/)
  expect(h1).toHaveTextContent("Whooops. This page doesn't exist");
});