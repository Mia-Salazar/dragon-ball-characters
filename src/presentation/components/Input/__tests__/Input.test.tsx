import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../Input';

describe('Input Component', () => {
  test('should show label', () => {
    const handleChange = vi.fn()
    render(
      <Input
        hasLabel={true}
        id="name"
        onChange={handleChange}
        placeholder="This is a placeholder"
        text="Name" 
        value=""
      />
      );

    const label = screen.getByText(/Name/i);
    expect(label).toBeVisible();
  });

  test('should not show label', () => {
    const handleChange = vi.fn()
    render(
      <Input
        hasLabel={false}
        id="name"
        onChange={handleChange}
        placeholder="This is a placeholder"
        text="Name" 
        value=""
      />
    );

    const label = screen.queryByText(/Name/i);
    expect(label).not.toBeInTheDocument();
  });

  test('should show placeholder', () => {
    const handleChange = vi.fn()
    render(
      <Input
        hasLabel={false}
        id="name"
        onChange={handleChange}
        placeholder="This is a placeholder"
        text="Name" 
        value=""
      />
    );

    const placeholder = screen.getByPlaceholderText('This is a placeholder')
    expect(placeholder).toBeVisible();
  });

  test('should fire onChange', async () => {
    const handleChange = vi.fn()
    render(
      <Input
        hasLabel={true}
        id="name"
        onChange={handleChange}
        placeholder="This is a placeholder"
        text="Name" 
        value=""
      />
    );

    const label = screen.getByText(/Name/i);
    await userEvent.type(label, "hello")

    expect(handleChange).toHaveBeenCalled()
  });
});
