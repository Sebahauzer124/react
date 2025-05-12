import { createBrowserRouter } from "react-router-dom";
import { Category, Home, Item } from "../pages";
import { MainLayout } from "../layout/MainLayout";

//Cuando en la ruta se agrega los dos puntos (:) quiere decir que esa ruta comtiene un URL Param

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export const MainRouter = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
