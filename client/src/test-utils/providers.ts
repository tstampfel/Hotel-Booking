import {
  createApolloErrorProvider,
  createApolloMockedProvider,
  createApolloLoadingProvider,
} from "apollo-mocked-provider";
import { typeDefs } from "./typeDefs";

export const ApolloMockedProvider = createApolloMockedProvider(typeDefs);
export const ApolloErrorProvider = createApolloErrorProvider();
export const ApolloLoadingProvider = createApolloLoadingProvider();
