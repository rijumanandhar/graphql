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
export const GET_USERS_BY_COMPANY = gql`
   query GetUserByCompany($companyId:Int!){
        getAllUSerByCompany(companyId:$companyId){
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

export const CREATE_USER = gql`
    mutation CreateUser(
        $username: String!, 
        $name: String!, 
        $email: String!, 
        $phone: String!, 
        $photo: String!, 
        $companyId: Int!)
        {
            createUser(username:$username,fullname:$name,email:$email,phone:$phone,photo:$photo,companyId:$companyId){
                fullname
            }
        }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!,$username: String!, $name: String!, $email: String!, $phone: String!, $photo: String!, $companyId: Int!)
    {
        updateUser(id:$id, username:$username,fullname:$name, email:$email, phone:$phone, photo:$photo, companyId:$companyId){
            fullname
        }
    }
`

export const DELETE_USER = gql`
    mutation UDeleteUser($id: ID!){
        deleteUser(id:$id){
            id
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

export const GET_COMPANY_NAME_ID = gql`
     query{
        getAllCompany{
            id
            name
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