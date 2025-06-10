import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Item from '../Item';

describe('Item Component', () => {
    test('should show name and ki', () => {
        render(
        <Item
            description="This is a description"
            image="example.jpg"
            name="Goku"
            ki="9000"
        />
        );

        const name = screen.getByText(/Goku/i);
        expect(name).toBeVisible();

        const ki = screen.getByText(/9000/i);
        expect(ki).toBeVisible();
    });

    test('should open dropdown', async () => {
        render(
        <Item
            description="This is a description"
            image="example.jpg"
            name="Goku"
            ki="9000"
        />
        );

        const dropdownButton = screen.getByLabelText(/open dropdown/i);
        await userEvent.type(dropdownButton, "hello")

        const description = screen.getByText(/This is a description/i);
        expect(description).toBeVisible();
    });
});