import { gql } from "@apollo/client"

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    removeClient(id: $id) {
      id,
      name,
      phone,
      email
    }
  }
`

export const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id,
      name,
      email
      phone
    }
  }
`