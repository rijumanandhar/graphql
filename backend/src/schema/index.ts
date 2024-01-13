import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_ALL_USERS_BY_COMPANY} from './queries/user'
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./mutations/user";
import { GET_ALL_COMPANY } from "./queries/company";
import { CREATE_COMPANY, DELETE_COMPANY, UPDATE_COMPANY } from "./mutations/company";

const rootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllUSerByCompany: GET_ALL_USERS_BY_COMPANY,
        getAllCompany: GET_ALL_COMPANY,
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER,
        createCompany: CREATE_COMPANY,
        deleteCompany: DELETE_COMPANY,
        updateCompany: UPDATE_COMPANY,
    }
})

export const schema = new GraphQLSchema({
    query:rootQuery,
    mutation,
});