import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';

describe('Nav', () => {
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
  };

  it('should render three links', () => {
    renderComponent();

    // Act
    const listItemElements = screen.getAllByRole('listitem');

    // Assert
    expect(listItemElements).toHaveLength(3);
  });

  it('should render home, view panels, and add panel links', () => {
    renderComponent();

    // Act
    const homeLink = screen.getByRole('link', { name: /home/i });
    const viewPanelsLink = screen.getByRole('link', { name: /view panels/i });
    const addPanelLink = screen.getByRole('link', { name: /add a panel/i });

    // Assert
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    expect(viewPanelsLink).toBeInTheDocument();
    expect(viewPanelsLink).toHaveAttribute('href', '/list');

    expect(addPanelLink).toBeInTheDocument();
    expect(addPanelLink).toHaveAttribute('href', '/add');
  });
});
