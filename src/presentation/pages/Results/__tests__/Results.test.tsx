import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Results from '../Results';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ name: 'go', from: '', to:'' }),
  };
});

vi.mock('../../../hooks/useSearchCharacterQuery', () => ({
  useSearchCharacterQuery: () => {
    return {
      data: {
        items: [
          {
            id: 1,
            name: 'Goku',
            description: 'El protagonista de la serie',
            image: 'https://dragonball-api.com/characters/goku_normal.webp',
            ki: '9000'
          },
        ],
      },
      isLoading: false,
      isError: false,
    };
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
});

describe('Results Page Component', () => {
  test('should show character information', async () => {
    render(
			<QueryClientProvider client={createTestQueryClient()}>
				<MemoryRouter>
					<Results />
				</MemoryRouter>
			</QueryClientProvider>
    );

    const name = await screen.findByText(/Goku/i);
    expect(name).toBeVisible();

    const ki = screen.getByText(/9000/i);
    expect(ki).toBeVisible();

    const results = screen.getByText(/1 results found:/i);
    expect(results).toBeVisible()
  });
});