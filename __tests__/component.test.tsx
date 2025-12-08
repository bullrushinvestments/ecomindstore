import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock data and dependencies
jest.mock('./SomeExternalDependency', () => ({
  useProductData: jest.fn(() => ({ products: [], loading: false })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/welcome to our store/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [], loading: true }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('displays error message when data fetching fails', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [], loading: false, error: 'Failed to fetch' }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('allows user to add product to cart', async () => {
    const mockAddToCart = jest.fn();
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [{ id: '123', name: 'Test Product' }], loading: false, addToCart: mockAddToCart }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(mockAddToCart).toHaveBeenCalledWith('123');
  });

  test('displays product details when a product is clicked', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [{ id: '123', name: 'Test Product' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/test product/i));
    await waitFor(() => expect(screen.getByText(/product details/i)).toBeInTheDocument());
  });

  test('is accessible with proper ARIA labels and roles', () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [{ id: '123', name: 'Test Product' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('button', { name: /add to cart/i })).toHaveAttribute('aria-label', 'Add Test Product to Cart');
  });

  test('handles edge cases such as empty product list', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [], loading: false }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock data and dependencies
jest.mock('./SomeExternalDependency', () => ({
  useProductData: jest.fn(() => ({ products: [], loading: false })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/welcome to our store/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [], loading: true }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('displays error message when data fetching fails', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [], loading: false, error: 'Failed to fetch' }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('allows user to add product to cart', async () => {
    const mockAddToCart = jest.fn();
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [{ id: '123', name: 'Test Product' }], loading: false, addToCart: mockAddToCart }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(mockAddToCart).toHaveBeenCalledWith('123');
  });

  test('displays product details when a product is clicked', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [{ id: '123', name: 'Test Product' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/test product/i));
    await waitFor(() => expect(screen.getByText(/product details/i)).toBeInTheDocument());
  });

  test('is accessible with proper ARIA labels and roles', () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [{ id: '123', name: 'Test Product' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('button', { name: /add to cart/i })).toHaveAttribute('aria-label', 'Add Test Product to Cart');
  });

  test('handles edge cases such as empty product list', async () => {
    (useProductData as jest.Mock).mockImplementation(() => ({ products: [], loading: false }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});