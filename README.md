# Schema

## Mutation
```
mutation ($ownerId: ID!) {
    createLike (
      ownerId: $ownerId
    ) {
      id
    }
  }
```

## Query

```
query ($ownerId: ID!){
  allLikes(filter: { owner: { id: $ownerId } ) {
    id
  }
}
```
