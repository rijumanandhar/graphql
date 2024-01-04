import { GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../typedefs/user";
import { Users} from "../../Entities/users"

export const CREATE_USER = {
    type: UserType,
    args: {
        username: {type: GraphQLString},
        fullname: {type: GraphQLString},
        email: {type: GraphQLString},
        photo: {type: GraphQLString},
        phone: {type: GraphQLString},
        // companyId: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const { username, fullname, email, photo, phone} = args;
        await Users.insert({username, fullname, email, photo, phone});
        return args;
    },
}