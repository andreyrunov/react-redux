import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
	const list = useSelector((state) => state.list)
	const dispatch = useDispatch()

	function handleClick() {
		axios(`http://localhost:3001/cats`).then((response) => {
			dispatch({
				type: 'ADD_CATS',
				payload: response.data,
			})

			// console.log(response.data)
			// setList((prev) => {
			// 	return [...response.data, prev]
			// })
		})
	}

	return (
		<div>
			<button
				onClick={handleClick}
				className='uk-button uk-button-secondary uk-button-large'
			>
				Get cats
			</button>
			<ul className='uk-list'>
				{list.map((cat) => (
					<li key={cat.id}>
						<div className='uk-card uk-card-default uk-card-body'>
							<div className='foto'>
								<img src={cat.url} alt={cat.id} />
							</div>
							<button className='uk-button uk-button-default'>💛</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home
