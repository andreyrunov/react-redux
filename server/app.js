require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const axios = require('axios')
const cors = require('cors')

const router = require('express').Router()
const app = express()

const PORT = process.env.DB_PORT ?? 3001

let list = []

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(process.env.PWD, 'public')))

router
	.route('/')
	.get((req, res) => {
		res.json(list)
	})
	.post((req, res) => {
		const { title, description } = req.body
		if (title && description) {
			const newPost = {
				id: uuid(),
				title,
				description,
			}
			list.push(newPost)
			return res.status(201).json(newPost)
		}
		return res.sendStatus(406)
	})

app.get('/cats', async (req, res) => {
	try {
		const response = await axios(
			`https://api.thecatapi.com/v1/images/search?limit=3&page1&order=Desc`
		)
		console.log(response)
		const result = response.map((el) => ({ id: el.id, url: el.url }))
		list = [...result, ...list]
		res.json(response)
	} catch (err) {
		res.sendStatus(400)
	}
})

app.use('/api', router)

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
