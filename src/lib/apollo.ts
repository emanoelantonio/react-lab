import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vekw6q1fw301un6mszhaaq/master',
  cache: new InMemoryCache()
})