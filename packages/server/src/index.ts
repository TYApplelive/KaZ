import express from 'express'
import { add } from '@packages/utils'

const app = express()

app.get('/', (req, res) => {
  const result = add(1, 2)
  res.send(`Hello from backend server! 1 + 2 = ${result}`)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
