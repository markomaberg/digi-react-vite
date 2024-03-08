import { Outlet } from 'react-router-dom';
import { DigiTypography } from '@digi/arbetsformedlingen-react';

import './App.scss'

import Header from './components/framework/Header';

function App() {

  return (
    <DigiTypography>
			<div className="app">
				<Header />
				<main className="app__main">
					<Outlet />
				</main>
			</div>
		</DigiTypography>
  );
}

export default App;
