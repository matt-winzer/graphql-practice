const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

// CUSTOMER TYPE
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
})

// ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  customer: {
    type: CustomerType
  }
})

module.exports = new GraphQLSchema({

})