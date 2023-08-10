import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render a welcome message', () => {
    // Arrange
    render(<Header />);

    // Act
    const element = screen.getByText(/Welcome to solar farm/i);

    // Assert
    expect(element).toBeInTheDocument();
  });
});
