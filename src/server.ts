import express, { Request, Response } from 'express'


const app = express()
const port = 3001

app.get("/", (req: Request, res: Response) => res.send('Welcome to api'))

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})