import Vue from 'vue';
import { Plugin } from '@nuxt/types';
import { BackendAPIClient } from './backend-api';

const backendApiPlugin: Plugin = async (ctx, inject) => {
  // configurations
  const apiUrl = '<%= options.apiUrl %>';
  const subscriptionUrl = '<%= options.subscriptionUrl %>';

  // configure clients
  const backendClient = new BackendAPIClient({
    apiUrl,
    subscriptionUrl
  });
  const client = await backendClient.createApolloClient();

  // inject edge central helper functions
  ctx.$backend = client;
  ctx.app.$backend = client;
  Vue.prototype.$backend = client;

  // inject into vue hooks
  inject('$backend', client);
};

export default backendApiPlugin;
