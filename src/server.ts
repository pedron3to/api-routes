import fastify from 'fastify'
import { knexProvider } from './database'
import crypto from 'node:crypto'

const app = fastify()
app.get('/hello', async () => {
  const transaction = await knexProvider('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333')
})
