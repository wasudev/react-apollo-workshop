import React from 'react'
import { graphql, gql } from 'react-apollo'
import { Link } from 'react-router-dom'

import './helper.css'
import CommentPanel from './CommentPanel'

const MemberDetail = (props) => { 
  if(props.data.loading) {
    return <h1>Loading</h1>
  }  
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-1 is-offset-2">
          <Link to='/' className="button">
            <i className="fa fa-chevron-left"></i>
          </Link>
        </div>
        <div className="column is-3">
          <video width="100%" height="auto" controls>
            <source src={props.data.Member.videoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="column is-3">
          <CommentPanel memberId={props.match.params.id} />
        </div>
      </div>
    </div>
  )
}

const queryMember = gql`
  query ($id: ID!) {
    Member(id: $id) {
      id
      name
      nickname
      age
      dob
      fbAcc
      igAcc
      hobby
      favorite
      videoUrl
    }
  }
`

export default graphql(queryMember, {    
    options: (props) => ({
      variables: { 
        id: props.match.params.id
      }
    })
  })(MemberDetail)