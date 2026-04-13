import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'


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
