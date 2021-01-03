import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EventComponent extends Vue {
  loading = false;
  selection = 1;

  mounted() {}

  getSrc(path) {
    return require(`~/${path}`);
  }

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
