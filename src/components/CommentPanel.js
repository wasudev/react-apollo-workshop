import React from 'react'
import axios from 'axios'
import moment from 'moment'

import './CommentPanel.css'

class CommentPanel extends React.Component {
  state = {
    loading: true,
    author: '',
    message: '',
    comments: []
  }

  componentDidMount() {
    this.getMember(this.props.memberId)  
  }

  getMember = (memberId) => {
    axios.post('https://api.graph.cool/simple/v1/cj57mktdeuv3b0118yimnc16w', {
      query: `
        query ($memberId: ID!) {
          allComments(filter: { owner: { id: $memberId } }, orderBy: createdAt_DESC) {
            id
            author
            message
            createdAt
          }
        }
      `,
      variables: {
        memberId
      },
      operationName: ''
    })
      .then(res => {
        this.setState({
          loading: false,
          comments: res.data.data.allComments
        })
      })
  }

  handlePost = () => {
    axios.post('https://api.graph.cool/simple/v1/cj57mktdeuv3b0118yimnc16w', {
      query: `
        mutation createComment($author: String!, $message: String!, $ownerId: ID!) {
          createComment (
            author: $author
            message: $message
            ownerId: $ownerId
          ) {
            author
            message
          }
        }
      `,
      variables: {
        author: this.state.author,
        message: this.state.message,
        ownerId: this.props.memberId
      },
      operationName: ''
    })
      .then(res => {
        this.setState({
          author: '',
          message: ''
        })
        this.getMember(this.props.memberId)
      })
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        <div className="comment-panel">
          {
            this.state.comments.map(comment => 
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

export default CommentPanel