import { Component, Vue } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component
export default class IndexPage extends Vue {
  loading = false;
  selection = 1;

  icons = ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'];

  variant = 'default';

  title = 'Landing Page';

  items = [
    {
      src: require(`~/assets/images/cover_event.jpg`)
    }
  ];

  mounted() {}

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
