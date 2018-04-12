const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const config = require('./config')

mongoose.connect(
  `mongodb://${config.dbUser}:${config.dbPassword}@ds137089.mlab.com:37089/graphql`
)
mongoose.connection.once('open', () => {
  console.log('Connected to database!')
})

const schema = require('./schema/schema')

const app = express()
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(4000, () => {
  console.log('Listening on port 4000')
})
