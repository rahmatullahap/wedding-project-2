import { Component, Vue } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component
export default class IndexPage extends Vue {
  loading = false;
  selection = 'timeline';

  icons = ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'];

  variant = 'default';

  title = 'Landing Page';

  header = require(`~/assets/images/header1.png`);

  mounted() {}

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
