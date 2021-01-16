import { Component, Prop, Vue } from 'vue-property-decorator';
import returnBySouvenirNoDoc from './return-by-souvenir-no.gql';
import { DateFilter } from '~/filters/date';
import {
  ReturnBySouvenirNoMutation,
  ReturnBySouvenirNoMutationVariables
} from '~/operation';

/**
 * add task page
 */
@Component({
  filters: {
    date: DateFilter
  }
})
export default class ReturnAttendanceComponent extends Vue {
  @Prop({ required: true }) dialog: boolean;

  loading = false;
  valid = false;
  souvenirNo = null;

  mounted() {}

  async save() {
    this.loading = true;
    if (this.souvenirNo) {
      try {
        await this.$backend.mutate<
          ReturnBySouvenirNoMutation,
          ReturnBySouvenirNoMutationVariables
        >({
          mutation: returnBySouvenirNoDoc,
          variables: {
            souvenirNo: this.souvenirNo
          }
        });
        this.closeDialog();
      } catch (err) {
        const message = err?.message || err?.toString() || 'error';
        this.$emit('error', message);
      }
    }
    this.loading = false;
  }

  closeDialog() {
    this.souvenirNo = null;
    this.$emit('close');
  }
}
