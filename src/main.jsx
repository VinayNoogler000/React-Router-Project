import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, About, Contact, GitHub, User} from "../components/index";

// 1st Way of Creating Routes (Client-Side) - Complex Version:
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <GitHub />
//       },
//     ]
//   }
// ]);

// 2nd Way of Creating Routes (Client-Side) - Easier Version:
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//        <Route path="" element={<Home/>}></Route>
//        <Route path="about" element={<About/>}></Route>
//        <Route path="contact" element={<Contact/>}></Route>
//        <Route path="github" element={<GitHub/>}></Route>
//     </Route>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}

    {/* 3rd Way of Creating Routes (Client-Side) - Easiest Way */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="github" element={<GitHub/>} />
          <Route path="user/:id" element={<User/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
