import { ApolloClient } from 'apollo-client';

export interface ReportAPIClientConfig {
  apiUrl: string;
  subscriptionUrl: string;
}

declare module 'vue/types/vue' {
  interface Vue {
    $backend: ApolloClient<any>;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $backend: ApolloClient<any>;
  }
}

declare module '@nuxt/types' {
  interface Context {
    $backend: ApolloClient<any>;
  }
  interface Configuration {
    backend: ReportAPIClientConfig;
  }
}
