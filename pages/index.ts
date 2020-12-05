import { Component, Vue } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component({
  layout: 'app'
})
export default class IndexPage extends Vue {
  mounted() {
    this.$router.push({ path: '/tasks' });
  }
}
