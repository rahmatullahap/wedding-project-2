import { Component, Vue } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component
export default class IndexPage extends Vue {
  loading = false;
  selection = 'timeline';

  icons = ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'];
  items = [
    {
      color: 'red lighten-2',
      icon: 'mdi-star'
    },
    {
      color: 'purple darken-1',
      icon: 'mdi-book-variant'
    },
    {
      color: 'green lighten-1',
      icon: 'mdi-airballoon'
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer'
    }
  ];

  variant = 'default';

  title = 'Landing Page';

  mounted() {}

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
