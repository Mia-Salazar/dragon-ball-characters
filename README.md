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

To generate a build:
```console
npm run build
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
- I have used this architecture in order to keep layers separated and improve scalability and readbility
- For ordering CSS I have grouped styling properties by type
- I have added React Query to improve cache and error management
- I have used FontAwesome for icons
- I have used semantic HTML and ARIA labels to improve accessibility
- I have used only the main branch for simplicity adding commit on important highlights

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
- Add code formater
- Use branches for each feature
