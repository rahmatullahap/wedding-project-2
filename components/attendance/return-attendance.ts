import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { DateFilter } from '~/filters/date';

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
  @Mutation('attendance/returnBySouvenir') returnBySouvenir: any;

  loading = false;
  valid = false;
  souvenirNo = null;

  mounted() {}

  save() {
    this.returnBySouvenir(this.souvenirNo);
    this.closeDialog();
  }

  closeDialog() {
    this.souvenirNo = null;
    this.$emit('close');
  }
}
