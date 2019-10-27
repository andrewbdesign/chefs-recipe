const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  // GraphQLInt,
  GraphQLString,
  // GraphQLSchema,
  // GraphQLList,
} = graphql;

const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    id: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get('http://localhost:4000').then(res => res.data);
      },
    },
  },
});
