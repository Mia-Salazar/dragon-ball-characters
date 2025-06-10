# Dragon Ball characters

## Live
The web is live [here]()

## Comands
To run the application:
```console
npm run dev
```

To run tests:
```console
npm run test
```

## API
The API used is Dragon Ball API. You can read [the documentation here](https://web.dragonball-api.com/documentation)

## Technologies
- React: Library used for the whole application
- Typescript: For logic
- Vitest & testing library: for testing
- CSS: for styling grouping styled by type
- React Query: To cache responses

## Decissions
- Architecture & Scalability: I've implemented a layered architecture to ensure clear separation of concerns, significantly boosting scalability and readability.
- CSS Organization: Styling properties are grouped by type for enhanced CSS readability and maintainability.
- Data Management: React Query is integrated for robust caching, automatic re-fetching, and streamlined error management, improving performance and resilience.
- Iconography: FontAwesome is used for all icons, ensuring consistency and easy customization.
- Accessibility: I've prioritized accessibility using semantic HTML and appropriate ARIA labels for broader usability.
- Version Control: The project is managed on the main branch for simplicity, with commits highlighting key features and milestones.
- Code Consistency: All interface properties and component props are organized alphabetically to maintain high code quality and consistency.

## Architecture
<pre>
src/
├── app/                     # Setup general (React Query Provider, router, etc.)
│   └── providers            # Providers needed, such as React Query Provider
├── application/             # Use cases
├── assets/                  # Assets, for example, images
├── data/                    # Functions that call endpoints
├── domain/                  # Domain types and rules
├── data/                    # Acceso a datos (API, storage, etc.)
│   └── characterApi.ts      # fetchCharacters, findCharacter, etc.
├── presentation/            # UI + hooks
│   ├── hooks/               # Custom hooks
│   └── components/          # React Components
│   └── pages/               # React Pages
</pre>

## TODO

- Add more tests
- Improve error management
- Improve format and standarize it
- Use branches for each feature
- Improve naming on CSS styles and components
