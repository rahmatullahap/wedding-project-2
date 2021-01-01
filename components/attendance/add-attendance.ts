import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
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
  @State((state) => state.attendance.instances) instances: Instance[];

  attendanceData: AttendanceData = {
    count: 1,
    name: ''
  };

  loading = false;
  valid = false;
  type: 'guest' | 'instance' = null;

  mounted() {}

  @Watch('dialog')
  onDialogOpen() {
    if (this.dialog) {
      if (this.guest) {
        // load by guest
        this.attendanceData.guest = this.guest;
        this.attendanceData.instance = this.guest.instance;
        this.attendanceData.name = this.guest.name;
        this.attendanceData.address = this.guest.address;
        this.type = 'guest';
      } else if (this.instance) {
        // load by instance
        this.attendanceData.instance = this.instance;
        this.type = 'instance';
      }
    }
  }

  save() {
    const attendance: AttendanceData = {
      count: this.attendanceData.count,
      address: this.attendanceData.address,
      guest: this.attendanceData.guest,
      instance: this.attendanceData.instance,
      name: this.attendanceData.name,
      souvenirNo: this.attendanceData.souvenirNo
    };
    this.add(attendance);
    this.closeDialog();
  }

  closeDialog() {
    this.type = null;
    this.attendanceData = {
      count: 1,
      name: ''
    };
    this.$emit('close');
  }
}
