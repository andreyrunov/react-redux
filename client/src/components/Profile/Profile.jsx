import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const { favourites, list } = useSelector((state) => state)
  return (
		<ul className='uk-list'>
			{list
				.filter((el) => favourites.includes(el.id))
				.map((cat) => (
					<li key={cat.id}>
						<div className='uk-card uk-card-default uk-card-body'>
							<div className='foto'>
								<img src={cat.url} alt={cat.id} />
							</div>
							<button className='uk-button uk-button-default'>{favourites.includes(cat.id) ? '❤️' : '💛'}</button>
						</div>
					</li>
				))}
		</ul>
	)
}
export default Profile