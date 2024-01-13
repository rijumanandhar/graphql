import { GraphQLID, GraphQLString } from "graphql";
import { CompanyType } from "../typedefs/company";
import { Company} from "../../Entities/company"

export const CREATE_COMPANY = {
    type: CompanyType,
    args: {
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        logo: {type: GraphQLString},
        phone: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { name, email, logo, phone} = args;
        await Company.insert({name, email, logo, phone});
        return args;
    },
}

export const UPDATE_COMPANY = {
    type: CompanyType,
    args: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        logo: {type: GraphQLString},
        phone: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { id, name, email, logo, phone} = args;
        return await Company.update({id: id},{name, email, logo, phone});
    },
}

export const DELETE_COMPANY = {
    type: CompanyType,
    args: {
       id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Company.delete(id);
        return args;
    },
}