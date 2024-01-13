import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
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
        companyId: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const { username, fullname, email, photo, phone, companyId} = args;
        await Users.insert({username, fullname, email, photo, phone,companyId});
        return args;
    },
}

export const UPDATE_USER = {
    type: UserType,
    args: {
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        fullname: {type: GraphQLString},
        email: {type: GraphQLString},
        photo: {type: GraphQLString},
        phone: {type: GraphQLString},
        // companyId: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const { id, username, fullname, email, photo, phone} = args;
        //const user = await Users.findOne({username: username})
        return await Users.update({id: id},{username, fullname, email, photo, phone});
    },
}

export const DELETE_USER = {
    type: UserType,
    args: {
       id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(id);
        // await Users.delete({username: username});
        return args;
    },
}