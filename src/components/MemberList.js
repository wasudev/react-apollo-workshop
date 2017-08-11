import React from 'react'
import axios from 'axios'

import MemberItem from './MemberItem'
import './helper.css'

class MemberList extends React.Component {
  state = {
    loading: true,
    allMembers: []
  }

  componentDidMount() {
    axios.post('https://api.graph.cool/simple/v1/cj57mktdeuv3b0118yimnc16w', {
      query: `
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
            likes {
              id
            }
            comments {
              id
            }
          }
        }
      `,
      variables: null,
      operationName: ''
    })
      .then(res => {
        this.setState({
          loading: false,
          allMembers: res.data.data.allMembers
        })
      })
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }
    return (
      <div className="container is-fluid _p-t-30">
        <div className="columns is-multiline">
          {
            this.state.allMembers.map(member =>  
              <div key={`${member.id}`} className="column is-3">
                <MemberItem {...member} />
              </div>
            )
          } 
        </div>
      </div>
    )
  }
}

export default MemberList
