import React from 'react'
import { graphql, gql, compose } from 'react-apollo'
import moment from 'moment'

import './CommentPanel.css'

class CommentPanel extends React.Component {
  state = {
    author: '',
    message: ''
  }

  handlePost = () => {
    this.props.createComment({
      variables: { 
        author: this.state.author,
        message: this.state.message,
        ownerId: this.props.memberId
      },
      refetchQueries: [
        {
          query: queryComments,
          variables: {
            memberId: this.props.memberId 
          }
        }
      ]
    })
    .then(() => {
      // this.props.queryComments.refetch()
      this.setState({
        author: '',
        message: ''
      })
    })
  }

  render() {
    if (this.props.queryComments.loading) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        <div className="comment-panel">
          {
            this.props.queryComments.allComments.map(comment => 
              <article key={comment.id} className="message is-info _m-b-15">
                <div className="message-body">
                  {comment.author}: {comment.message}  
                  <div className="comment-message-timestamp">
                    {moment(`${comment.createdAt}`, moment.ISO_8601).fromNow()} 
                  </div>                
                </div>
              </article>
            )
          }
        </div>
        <div>
          <div className="field">
            <input className="input" type="text" placeholder="Name" value={this.state.author} onChange={(e) => {this.setState({ author: e.target.value })}} /> 
          </div>
          <div className="field">
            <textarea className="textarea" placeholder="What in your mind" value={this.state.message} onChange={(e) => {this.setState({ message: e.target.value })}} /> 
          </div>
          <div className="field">
            <button className="button is-primary" onClick={this.handlePost}>
              Post
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const queryComments = gql`
  query ($memberId: ID!) {
    allComments(filter: { owner: { id: $memberId } }, orderBy: createdAt_DESC) {
      id
      author
      message
      createdAt
    }
  }
`

const createComment = gql`
  mutation ($author: String!, $message: String!, $ownerId: ID!) {
    createComment (
      author: $author
      message: $message
      ownerId: $ownerId
    ) {
      author
      message
    }
  }
`

export default compose(
  graphql(queryComments, {
    name: 'queryComments',
    options: (props) => ({
      variables: { 
        memberId: props.memberId
      }
    }),
    // options: { pollInterval: 5000 },
  }),
  graphql(createComment, {
   name: 'createComment'
  }),
  )(CommentPanel)