const express = require('express')
const morgan = require('morgan')
const path = require('path')
const axios = require('axios')
const cors = require('cors')

const router = require('express').Router()
const app = express()

const PORT = process.env.DB_PORT ?? 3001

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(process.env.PWD, 'public')))

app.get('/cats', async (req, res) => {
	try {
		const response = await axios(
			`https://api.thecatapi.com/v1/images/search?limit=3&page1&order=Desc`
		)
        res.json(response.data)
	} catch (err) {
		res.sendStatus(400)
	}
})

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
