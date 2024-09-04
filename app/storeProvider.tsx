"use client";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const STRAPI_URL = process.env.STRAPI_URL;

const client = new ApolloClient({
  uri: `${STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{children}</Provider>;
    </ApolloProvider>
  );
}

export default Providers;
