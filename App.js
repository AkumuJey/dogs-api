import express from "express";
import cors from "cors"

import perRoutes from './pets/routes/pets.routes.js'

const app = express()
const port = 3000

/*Global middleware */
app.use(cors)
app.use(express.json())

/*Routes*/
app.use('/pets', perRoutes)

// Server set up
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

export default app
