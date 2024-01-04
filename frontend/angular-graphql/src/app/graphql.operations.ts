import { gql } from "apollo-angular"

export const GET_USERS = gql`
   query {
        getAllUsers{
                id
                username
        }
    }
`