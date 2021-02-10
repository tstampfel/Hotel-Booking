import { ApolloClient, DocumentNode } from "@apollo/client";

export async function Query(
  client: ApolloClient<object>,
  variables: any,
  documentNode: DocumentNode
) {
  return await client.query({
    query: documentNode,
    variables,
  });
}

export async function Mutate(
  client: ApolloClient<object>,
  documentNode: DocumentNode
) {
  return await client.mutate({
    mutation: documentNode,
  });
}
