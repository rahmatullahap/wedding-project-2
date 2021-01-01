import { createInstance, LOCALSTORAGE } from 'localforage';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

export interface BackendAPIClientConfig {
  apiUrl: string;
  subscriptionUrl: string;
}

export interface EdgeCentralClientConfig {
  token: string;
}

export class BackendAPIClient {
  private store: LocalForage;

  private _token: string;

  /* eslint-disable no-useless-constructor */
  constructor(private config: BackendAPIClientConfig) {
    this.store = createInstance({
      name: 'ec-client',
      driver: LOCALSTORAGE
    });
  }

  async getToken(): Promise<string> {
    const config = await this.store.getItem<EdgeCentralClientConfig>('config');
    return config?.token;
  }

  async createApolloClient(): Promise<ApolloClient<any>> {
    // HTTP connection to the API
    const httpLink = createHttpLink({
      uri: this.config.apiUrl,
      fetch: async (input: RequestInfo, init: any) => {
        const token = await this.getToken();
        const url = this.config.apiUrl || input;
        // set authorization header
        if (init.headers && init.headers.set) {
          init.headers.set('Authorization', `Bearer ${token}`);
        } else {
          init.headers = init.headers || ({} as any);
          init.headers.Authorization = `Bearer ${token}`;
        }
        return fetch(url, init);
      }
    });

    // subscriptions link
    const token = await this.getToken();
    const wsClient = new SubscriptionClient(
      this.config.subscriptionUrl,
      {
        reconnect: true,
        connectionParams: {
          token
        }
      },
      WebSocket
    );
    const wsLink = new WebSocketLink(wsClient);

    // Cache implementation
    const cache = new InMemoryCache();

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink
    );

    // Create apollo client
    return new ApolloClient({
      link,
      cache
    });
  }
}
