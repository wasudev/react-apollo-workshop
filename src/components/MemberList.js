import React from 'react'
import { graphql, gql } from 'react-apollo'

import MemberItem from './MemberItem'
import './helper.css'

const MemberList = (props) => { 
  if (props.data.loading) {
    return <h1>Loading</h1>
  }
  if(props.data.error) {
    console.log(props.data.error)
    return <h1>Error</h1>
  }
  return (
    <div className="container is-fluid _p-t-30">
      <div className="columns is-multiline">
        {
          props.data.allMembers.map(member =>  
            <div key={`${member.id}`} className="column is-3">
              <MemberItem {...member} />
            </div>
          )
        } 
      </div>
    </div>
  )
}

const query = gql`
  query {
    allMembers {
      id
      name
      nickname
      age
      dob
      fbAcc
      igAcc
      hobby
      favorite
      comments {
        id
      }
    }
  }
`

export default graphql(query)(MemberList)
