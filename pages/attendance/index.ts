import { Component, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { DateFilter } from '~/filters/date';
import { Attendance } from '~/store/attendance';

/**
 * list of tasks page
 */
@Component({
  layout: 'app',
  filters: {
    date: DateFilter
  }
})
export default class AttendancePage extends Vue {
  @Mutation('dashboard/changeTitle') private changeTitle: any;
  @Mutation('dashboard/changeBreadcrumbs') private changeBreadcrumbs: any;
  @Mutation('attendance/return') returnMutation: any;
  @State((state) => state.attendance.list) items: Attendance[];
  headers = [
    { text: 'Nama', value: 'name' },
    { text: 'Waktu Datang', value: 'createdAt', sortable: false },
    { text: 'Waktu Keluar', value: 'returnedAt', sortable: false },
    { text: 'Alamat', value: 'address', sortable: false },
    {
      text: '',
      align: 'center',
      value: 'status',
      sortable: true,
      width: 75
    },
    { text: '', align: 'right', value: 'action', sortable: false, width: 140 }
  ];

  loading = false;
  addDialog = false;

  attendances: Attendance[] = [];

  mounted() {
    this.changeTitle('Daftar Hadir Tamu');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar hadir tamu',
        disabled: true,
        to: '/attendance'
      }
    ]);
    this.attendances = this.items;
  }

  addAttendance() {
    this.addDialog = true;
  }

  close() {
    this.addDialog = false;
  }

  returnGuest(id) {
    this.returnMutation(id);
  }
}
