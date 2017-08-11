# Schema

## Mutation
```
mutation createLike($ownerId: ID!) {
    createLike (
      ownerId: $ownerId
    ) {
      id
    }
  }
```

## Query

```
query allLikes($ownerId: ID!){
  allLikes(filter: { owner: { id: $ownerId } ) {
    id
  }
}
```