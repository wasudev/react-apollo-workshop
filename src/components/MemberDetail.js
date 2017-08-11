import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './helper.css'
import CommentPanel from './CommentPanel'

class MemberDetail extends React.Component {
  state = {
    loading: true,
    member: {
      videoUrl: ''
    }
  }
  componentDidMount() {
    axios.post('https://api.graph.cool/simple/v1/cj57mktdeuv3b0118yimnc16w', {
      query: `
        query ($id: ID!) {
          member: Member(id: $id) {
            videoUrl
          }
        }
      `,
      variables: {
        id: this.props.match.params.id
      },
      operationName: ''
    })
      .then(res => {
        this.setState({
          loading: false,
          member: res.data.data.member
        })
      })
  }
  render() {
    if(this.state.loading) {
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
              <source src={this.state.member.videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className="column is-3">
            <CommentPanel memberId={this.props.match.params.id} />
          </div>
        </div>
      </div>
    )
  }
}

export default MemberDetail