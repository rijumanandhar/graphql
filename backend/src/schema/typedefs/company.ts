import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from 'graphql'

export const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        logo: {type: GraphQLString},
        phone: {type: GraphQLString},
    })
})