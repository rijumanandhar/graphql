import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        fullname: {type: GraphQLString},
        email: {type: GraphQLString},
        photo: {type: GraphQLString},
        phone: {type: GraphQLString},
        // companyId: {type: GraphQLID},
    })
})