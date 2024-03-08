import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss'

import App from './App';
import Home from './components/pages/Home';
import DigiFormFilter from './components/pages/DigiFormFilter';
import ErrorPage from './components/pages/ErrorPage';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Home />, label: 'Hem' },
			{ path: '/digi-form-filter', element: <DigiFormFilter />, label: 'Digi-form-filter'},
		]
	}
]
interface IRoute {
	path: string;
	label: string;
}
export const Routes: IRoute[] = routes
	.map((route) => route.children)
	.flat()
	.map((route) => {
		return {
			path: route.path,
			label: route.label
		}
	})
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
