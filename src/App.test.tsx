import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Counter', () => {
  it('shows initial counter value', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Counter' })).toBeInTheDocument();
    expect(screen.getByLabelText('counter-value')).toHaveTextContent('0');
  });

  it('increments counter after clicking +', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByLabelText('counter-value')).toHaveTextContent('1');
  });
});
