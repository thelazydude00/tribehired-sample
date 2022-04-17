import express from 'express'
import { commentRoutes, postRoutes } from './routes'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(postRoutes)
app.use(commentRoutes)

export default app