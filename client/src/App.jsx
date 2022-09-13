import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		axios(`http://localhost:3001/api`).then((response) => {
			dispatch({
				type: 'INIT_LIST',
				payload: response.data,
			})
		})
	}, [])
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
