# Getting started with Tractian Assets dashboard

This project was created with React Js and Typescript.

Project URL: https://dashboard-tractian.herokuapp.com/

## Learn More

This project has a few technologies and concepts for his engineering:

- React Js 18.02
- Typescript
- React Router DOM v6
- Heroku
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
- SSR (unsuccessfully but I've tried with Babel.. learned [here.](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?autoplay=true&seekTo=154))
- Data loading Context
- WebSockets

## Need To be noticed

For className declarations the project has a standart following the BEM concept:
`className={styles["trt-..."]}`
This way permit us to handle a unique `key: string` for CSS classes
So we can concat Ant Design classes with our own class...

I've created common componets based on Ant design components You can find them in:

- /src/common/components
  Table dind't go so weel because of SCSS compile...

The web app has his default layout and no URL match page:

- /src/layout
- /src/pages/noMatch

You can find the layout Context and the application context in:

- src/layout/context
- src/common/context

I have the full faith that the project could be better with I had a better study time, Highchart seems really deprecated and is more verbose than Ant "native" charts [@antv/g2plot](https://g2.antv.antgroup.com) all other was very simple to handle nothing hard at all.
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
