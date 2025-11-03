# React_Router_Project

This project is created to learn and strengthen my React-Router-DOM fundamentals, with the help of my instructor [Sr. Hitesh Choudhary](https://github.com/hiteshchoudhary)

## Learnings

1. React-Router-DOM
2. `Outlet` Component of React-Router-DOM
3. Three different ways of Client-Side Routing (using Routers) from complex to simplest. Mentioned in `main.jsx`
4. Defining and Accessing Path Parameters in the URL to which the client send request to access the page/component. I've defined it in `main.jsx` and accessed it in `components/User/User.jsx` by using `useParams()` of React-Router-DOM
5. In the current version of React-Router-DOM (7.9.5), `loader` prop and `useLoaderData()` hook is not accessible by `BrowserRouter` component, instead to the `createBrowserRouter()`.
6. Loader functions of `Routes` have direct access to the `path-parameters` of the URL, allowing us to access them inside the loader.
7. Implemented a feature on my own, where if user goes to "github/" path then my GitHub profile will be displayed, but if the user enters any other username in the URL, like this "github/:username", then GitHub data of that particular user is fetched and displayed, in the exact same layout.
