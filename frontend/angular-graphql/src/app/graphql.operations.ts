import { gql } from "apollo-angular"

export const GET_USERS = gql`
   query {
        getAllUsers{
                id
                username
                fullname
                email
                photo
                phone
                companyId
        }
    }
`

export const GET_ALL_COMPANY = gql`
    query{
        getAllCompany{
            id
            name
            email
            logo
            phone
        }
    }
`

export const CREATE_COMPANY = gql`
    mutation CreateCompany($name: String!, $email: String!, $phone: String!, $logo: String!){
        createCompany(name:$name, email:$email, phone:$phone, logo:$logo){
            id
            name
        }
    }
`

export const UPDATE_COMPANY = gql`
    mutation UpdateCompany($id: ID!,$name: String!, $email: String!, $phone: String!, $logo: String!){
        updateCompany(id:$id, name:$name, email:$email, phone:$phone, logo:$logo){
            id
            name
        }
    }
`

export const DELETE_COMPANY = gql`
    mutation UDeleteCompany($id: ID!){
        deleteCompany(id:$id){
            id
            name
        }
    }
`