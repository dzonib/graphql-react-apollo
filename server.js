const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')


const app = express()

// allow cross-origin

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


const port = process.env.PORT || 5000


app.listen(port, () => console.log(`Server started on port ${port}`))