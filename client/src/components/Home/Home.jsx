import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { addList } from '../../redux/actions/list.actions'
import { addToFavourite } from '../../redux/actions/favourites.actions'

function Home() {
	const { list, favourites } = useSelector((state) => state)
	const dispatch = useDispatch()

	function handleClick() {
		axios(`http://localhost:3001/cats`).then((response) => {
			dispatch(addList(response.data))
		})
	}

	function handleFavourites(id) {
		dispatch(addToFavourite(id))
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
							<button
								onClick={() => handleFavourites(cat.id)} // чтобы передавать данные используем callback
								className='uk-button uk-button-default'
							>
								{favourites.includes(cat.id) ? '❤️' : '💛'} {/* условный рендеринг:
								если id отрисовываемого кота есть в favourites, то рисуем красное сердечко, если нет - желтое */}
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home
