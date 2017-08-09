import React from 'react'
import { graphql, gql } from 'react-apollo'

import MemberItem from './MemberItem'

const MemberList = (props) => { 
  if (props.data.loading) {
    return <h1>Loading</h1>
  }
  if(props.data.error) {
    return <h1>Error</h1>
  }
  return (
    <div className="container is-fluid">
      <div className="columns is-multiline">
        {
          props.data.allMembers.map(member =>  
            <div key={`${member.id}`} className="column is-one-quarter">
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
      nickname: nickName
      age
      dob
      fbAcc
      igAcc
      hobby
      like
    }
  }
`

export default graphql(query)(MemberList)
