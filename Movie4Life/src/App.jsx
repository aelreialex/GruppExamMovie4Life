import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage/LandingPage'


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <LandingPage />},
			{ path: "search/:string", element: <SearchPage /> },
			{ path: "movie/:id", element: <SingleMoviePage />},
      { path: "watchlist", element: <WatchListPage />}
		]
	}
])


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
