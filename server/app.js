const express = require('express')
const morgan = require('morgan')
const path = require('path')

const cors = require('cors')

const router = require('express').Router()
const app = express()

const PORT = process.env.DB_PORT ?? 3001

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(process.env.PWD, 'public')))

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
