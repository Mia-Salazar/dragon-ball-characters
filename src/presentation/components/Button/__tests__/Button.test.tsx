import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  test('should show text', () => {
    render(
      <Button
        text="send"
        isDisabled={false}
      />
    );

    const buttonText = screen.getByText(/send/i);
    expect(buttonText).toBeVisible();
  });

  test('should be disabled', () => {
    render(
      <Button
        text="send"
        isDisabled={true}
      />
    );

    const buttonText = screen.getByText(/send/i);
    expect(buttonText).toBeDisabled();
  });
});
