const express = require('express')
const expressGraphQL = require('express-graphql')
const port = process.env.PORT || 4000

const schema = require('./schema.js')

const app = express()

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(port, () => console.log(`Server running on port: ${port}`))