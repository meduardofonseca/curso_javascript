import express from 'express'
import breeds from '../controllers/dogbreed.controller.js'

const routes = express.Router()

routes.get('/breed', breeds.getAny)
routes.get('/breed/:id', breeds.getByPk)

export default routes