import { Middleware } from '@nuxt/types';

const authorized: Middleware = (ctx) => {
  // get token from backend
  const ok = true;
  if (!ok) {
    return ctx.redirect('/login');
  }
};

export default authorized;
