import createServer from './server'

const app = createServer()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
