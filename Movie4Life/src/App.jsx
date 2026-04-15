import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
// NOTERA: Mantine styles är FLYTTADE till main.jsx (där de ska vara!)
// import "@mantine/core/styles.css";
// import "@mantine/carousel/styles.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleMoviePage from "./pages/SingleMoviePage/SingleMoviePage";
import WatchListPage from "./pages/WatchListPage/WatchListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "search/:string", element: <SearchPage /> },
      { path: "movie/:id", element: <SingleMoviePage /> },
      { path: "watchlist", element: <WatchListPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
