import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<nav className='uk-navbar-container'>
			<div className='uk-navbar-left'>
				<ul className='uk-navbar-nav'>
					<li className='uk-active'>
						<Link to='/'>Home</Link>
					</li>
					<li className='uk-active'>
						<Link to='/profile'>Profile</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
