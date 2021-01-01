import { Component, Vue, Prop } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Attendance } from '~/store/attendance';

export const REMOVED = 'removed';
export const CANCELED = 'canceled';
export const FAILED = 'failed';

@Component
export default class ConfirmRemoveDialog extends Vue {
  @Prop({ default: false }) open: boolean;
  @Prop({ default: false }) attendance: Attendance;
  @Mutation('attendance/returnBySouvenir') returnBySouvenir: any;

  confirm() {
    if (!this.attendance) {
      this.$emit(CANCELED);
      return;
    }
    this.returnBySouvenir(this.attendance.souvenirNo);
    this.$emit(REMOVED);
  }

  cancel() {
    this.$emit(CANCELED);
  }
}
