import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS} from './queries/user'
import { CREATE_USER } from "./mutations/user";

const rootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUsers: CREATE_USER,
    }
})

export const schema = new GraphQLSchema({
    query:rootQuery,
    mutation,
});