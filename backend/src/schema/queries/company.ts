import { GraphQLList } from 'graphql'
import { CompanyType } from '../typedefs/company';
import { Company } from '../../Entities/company'

export const GET_ALL_COMPANY = {
    type: new GraphQLList(CompanyType),
    resolve() {
        return Company.find();
    }
}