import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import type * as ReactRouterDom from 'react-router-dom';

import Home from '../Home';

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof ReactRouterDom>();
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('Home Component', () => {
    beforeEach(() => {
        mockedUseNavigate.mockClear();
    });

    test('should fill the form', async () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>  
        );

        const name = screen.getByText(/name/i);
        await userEvent.type(name, "hello")

        const from = screen.getByPlaceholderText(/from/i);
        await userEvent.type(from, "1")

        const to = screen.getByPlaceholderText(/to/i);
        await userEvent.type(to, "1")

        const button = screen.getByText("Search");
        expect(button).toBeEnabled()
    });

    test('should be redirected when cliking on submit button', async () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter> 
        );

        const name = screen.getByText(/name/i);
        await userEvent.type(name, "hello")

        const from = screen.getByPlaceholderText(/from/i);
        await userEvent.type(from, "1")

        const to = screen.getByPlaceholderText(/to/i);
        await userEvent.type(to, "1")

        const button = screen.getByText("Search");
        await userEvent.click(button);

        expect(mockedUseNavigate).toHaveBeenCalledWith('/results?name=hello&from=1&to=1');
    });
});