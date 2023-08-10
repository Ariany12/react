import { render, screen } from '@testing-library/react';
import Errors from './Errors';

describe('Errors', () => {
  it('should render a list item for each provided error', () => {
    // ARRANGE
    const errors = ['Error message 1', 'Error message 2'];

    render(<Errors errors={errors} />);

    // ACT
    const messageElement = screen.getByText(/The following errors were found/i);
    const listItemElements = screen.getAllByRole('listitem');

    // ASSERT
    expect(messageElement).toBeInTheDocument();
    expect(listItemElements).toHaveLength(2);

    errors.forEach((error) => {
      const errorListItem = screen.getByText(error);
      expect(errorListItem).toBeInTheDocument();
    });
  });

  it('should not render content if there are no error messages', () => {
    const { container } = render(<Errors errors={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
