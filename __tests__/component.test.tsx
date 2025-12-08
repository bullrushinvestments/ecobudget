import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });
  });

  test('renders loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: true, data: [], error: null });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message on failure', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: [], error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('renders content when data is available', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: ['item1', 'item2'], error: null });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/item1/i)).toBeInTheDocument();
    expect(await screen.findByText(/item2/i)).toBeInTheDocument();
  });

  test('handles user interaction with content', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: ['item1'], error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/item1/i));
    expect(await screen.findByText(/selected item1/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: ['item1'], error: null });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /item1/i });
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(await screen.findByText(/selected item1/i)).toBeInTheDocument();
  });

  test('validates edge cases for empty data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: [], error: null });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });
  });

  test('renders loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: true, data: [], error: null });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message on failure', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: [], error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('renders content when data is available', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: ['item1', 'item2'], error: null });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/item1/i)).toBeInTheDocument();
    expect(await screen.findByText(/item2/i)).toBeInTheDocument();
  });

  test('handles user interaction with content', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: ['item1'], error: null });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/item1/i));
    expect(await screen.findByText(/selected item1/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: ['item1'], error: null });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /item1/i });
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(await screen.findByText(/selected item1/i)).toBeInTheDocument();
  });

  test('validates edge cases for empty data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ isLoading: false, data: [], error: null });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
  });
});