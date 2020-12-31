import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { DateFilter } from '~/filters/date';
import { AttendanceData, Guest, Instance } from '~/store/attendance';

/**
 * add task page
 */
@Component({
  filters: {
    date: DateFilter
  }
})
export default class AddAttendanceComponent extends Vue {
  @Prop({ required: true }) dialog: boolean;
  @Prop({ required: false }) guest: Guest;
  @Prop({ required: false }) instance: Instance;
  @Mutation('attendance/add') add: any;

  attendanceData: AttendanceData = {
    count: 1,
    name: ''
  };

  loading = false;
  valid = false;

  mounted() {}

  @Watch('dialog')
  onDialogOpen() {
    if (this.dialog) {
      if (this.guest) {
        // load by guest
      } else if (this.instance) {
        // load by instance
      }
    }
  }

  save() {
    // const attendance: AttendanceData = {
    //   count: 1
    // };
    // this.add({
    //   attendance
    // });
    this.closeDialog();
  }

  closeDialog() {
    this.$emit('close');
  }
}
