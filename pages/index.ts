import { Component, Vue, Watch } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component
export default class IndexPage extends Vue {
  loading = false;
  selection = 'event';

  icons = ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'];

  variant = 'default';

  title = 'Landing Page';

  items = [
    {
      src: require(`~/assets/images/cover_event.jpg`)
    }
  ];

  mounted() {}

  @Watch('selection')
  onSelectionChange() {
    if (this.selection === 'about') {
      this.items = [
        {
          src: require(`~/assets/images/cover_about.jpg`)
        }
      ];
    }

    if (this.selection === 'pray' || this.selection === 'event') {
      this.items = [
        {
          src: require(`~/assets/images/cover_event.jpg`)
        }
      ];
    }
  }

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
