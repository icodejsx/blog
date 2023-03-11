import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  url: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clezktqfq11s301uj42jf53gv/master",
  cache: new InMemoryCache(),
});

export default client;
