import React, { useState } from 'react'
import axios from 'axios'
import './Home.css'

function Home() {
	// const list = [
	// 	{
	// 		id: '0XYvRd7oD',
	// 		width: 1204,
	// 		height: 1445,
	// 		url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
	// 	},
	// 	{
	// 		id: '0XYvRd7oD12',
	// 		width: 1204,
	// 		height: 1445,
	// 		url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
	// 	},
	// 	{
	// 		id: '0XYvRd7oD1212',
	// 		width: 1204,
	// 		height: 1445,
	// 		url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
	// 	},
	// ]
	const [list, setList] = useState([])

	function handleClick() {
		axios(`https://api.thecatapi.com/v1/images/search?limit=3&page1&order=Desc`)
		.then(response => {
			console.log(response)
			setList(response.data)
		})
	}

	return (
		<div>
			<button onClick={handleClick}	className='uk-button uk-button-secondary uk-button-large'>
				Get cats
			</button>
			<ul className='uk-list'>
				{list.map((cat) => (
					<li key={cat.id}>
						<div className='uk-card uk-card-default uk-card-body'>
							<div className='foto'>
								<img src={cat.url} alt={cat.id} />
							</div>
							<button class='uk-button uk-button-default'>💛</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home
