import fastify from 'fastify'

const app = fastify()
app.get('/hello', () => {
  return 'Hello!'
})

app.listen({ port: 3333 }, () => {
  console.log('Server is running on http://localhost:3333')
})
