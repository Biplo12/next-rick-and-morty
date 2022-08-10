import { client } from "../graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";
import GlobalStyles from "../components/global.styled";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />

      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
