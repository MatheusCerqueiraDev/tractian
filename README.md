# Getting started with Tractian Assets dashboard

This project was created with React Js.
Once we know this I have tried to implemented SSR with Babel for this project
cause of my eye problem at 19/11 I dind't ha the perfect time to implement it to production (started it yesterday 27/11).
But i came really close to be implemented it is commented in gitignore but the files are:

- /tractian/.babelrc
- /tractian/src/services/server.tsx
- src/services/useDataSSR.ts
- line 14 of public/index.html

I have implemented a few concepts:

- Using StyleSheet from styled components so we can pass our style through server rendering
  -- /server.tsx line 20 & 57 and line 14 of public/index.html
- Caveats redenring on server
- Data loding context( when load data from server and when to load frfom client)
- Rendering API data in server
- SSR enhacing with context
- Routing with SSR

You will see some React imports in the top of each index file
it is so because we need this for workflow behind the scens with Babel SSR.

I have another example for SSR in React [here](https://github.com/MatheusCerqueiraDev/React-SSR)...

## Learn More

This project has a few technologies and concepts for his engineering:

- React Js 18.02
- Typescript
- React Router DOM v6
- SASS
- Ant Design
- Axios
- Jest
- Testing Library
- Highcharts
- Highcharts React Official
- Styled Components (for JS in CSS)

- BEM
- DRY
- KISS
- Learn Once - Write anywhere
- PWA
- SSR
- Data loading Context
- WebSockets

## Need To be noticed

For className declarations the project has a standart following the BEM concept:
`className={styles["trt-..."]}`
This way permit us to handle a unique `key: string` for CSS classes
So we can concat Ant Design classes with our own class...

I've created common componets based on Ant design components You can find them in:

- /src/common/components

The web app has his default layout and no URL match page:

- /src/layout
- /src/pages/noMatch

You can find the layout Context and the application context in:

- src/layout/context
- src/common/context

Not all but a few components has comments:

- App.tsx
- /src/services/server.ts
- /common/components/DotedCarousel/DotedCarousel.tsx
- /common/components/Modal/Modal.tsx
- /layout/DrawerContent/components/DrawerAccordeon/DrawerAccordeon.tsx
- /layout/Header/Header.module.scss
- /layout/Header/Header.tsx
- /styles/colors.module.scss

I have the full faith that the project could be better with I had a better study time, Highchart seems a little deprecated and is more verbose than Ant "native" charts [@antv/g2plot](https://g2.antv.antgroup.com) all other was very simple to handle nothing hard at all.
With the non persistence API is a little more harder to create something visually like
visual feedbacks or even for state, prop or management actions, I am really familiar with those actions using forms or click all types of callback, async and step actions.

Hope that we see us soon,

Best regards.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
