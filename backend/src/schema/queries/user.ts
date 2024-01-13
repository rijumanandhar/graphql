import { GraphQLInt, GraphQLList } from 'graphql'
import {UserType} from '../typedefs/user'
import {Users} from '../../Entities/users'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

export const GET_ALL_USERS_BY_COMPANY = {
    type: new GraphQLList(UserType),
    args: {
        companyId: {type: GraphQLInt},
     },
    resolve(parent: any, args: any) {
        return Users.find({
            where: {
                companyId: args.companyId,
            },
        })
    }
}