import { render, screen, fireEvent } from 'test-utils';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Low' } });

    await screen.findByText(/Lowell/);
  });

  it('Closing search results after press Escape', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Low' } });
    await screen.findByText(/Lowell/);

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', keyCode: 27, charCode: 27 });
    !(await screen.findByText(/Lowell/));
  });
});
