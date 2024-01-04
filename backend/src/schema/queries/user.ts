import { GraphQLList } from 'graphql'
import {UserType} from '../typedefs/user'
import {Users} from '../../Entities/users'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}