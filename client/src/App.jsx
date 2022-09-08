import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'

function App() {
	return (
		<BrowserRouter>
			<header>
				<Nav />
			</header>
			<main className='uk-container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
