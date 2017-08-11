import React from 'react'
import { graphql, gql, compose } from 'react-apollo'

const LikePanel = (props) => {
  const handleAddLike = () => {
    props.mutate({
      variables: { 
        ownerId: props.ownerId,
      },
      refetchQueries: [
        {
          query: queryLike,
          variables: {
            ownerId: props.ownerId
          }
        }
      ]
    })
  }

  if (props.data.loading || props.mutate.loading) {
    return <i className="fa fa-spinner fa-spin"></i>
  }
  return (
    <a className="item-description" onClick={handleAddLike}>
      <i className="fa fa-thumbs-o-up _m-r-15" aria-hidden="true"></i> {props.data.allLikes.length}
    </a>
  )
}

const queryLike = gql`
  query ($ownerId: ID!) {
    allLikes(filter: { owner: { id: $ownerId } }) {
      id
    }
  }
`

const mutationAddLike = gql`
  mutation ($ownerId: ID!) {
    createLike (
      ownerId: $ownerId
    ) {
      id
    }
  }
`

export default compose(
  graphql(queryLike, {
    options: (props) => ({
      variables: {
        ownerId: props.ownerId
      }
    }) 
  }),
  graphql(mutationAddLike),
)(LikePanel)