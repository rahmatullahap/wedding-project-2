import { Component, Vue, Watch } from 'vue-property-decorator';
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
    { text: 'No Souvenir', value: 'souvenirNo', sortable: true },
    { text: 'Nama', value: 'name' },
    { text: 'Waktu Datang', value: 'createdAt', sortable: false },
    { text: 'Waktu Keluar', value: 'returnedAt', sortable: false },
    { text: 'Alamat', value: 'detail', sortable: false },
    { text: 'Jumlah', value: 'count', sortable: false },
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
  returnDialog = false;

  attendances: Attendance[] = [];

  attendanceCount: number = 0;
  inRoomCount: number = 0;

  mounted() {
    this.changeTitle('Daftar Hadir Tamu');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar hadir tamu',
        disabled: true,
        to: '/admin/attendance'
      }
    ]);
    this.attendances = this.items;
    this.countTotal();
  }

  @Watch('items', { deep: true })
  onItemsChange() {
    this.countTotal();
  }

  countTotal() {
    this.attendanceCount = 0;
    this.inRoomCount = 0;
    for (const att of this.items) {
      this.attendanceCount += parseInt(att.count.toString(), 10);
    }
    for (const inr of this.items.filter((a) => !a.returnedAt)) {
      this.inRoomCount += parseInt(inr.count.toString(), 10);
    }
  }

  addAttendance() {
    this.addDialog = true;
  }

  returnAttendance() {
    this.returnDialog = true;
  }

  close() {
    this.addDialog = false;
    this.returnDialog = false;
  }

  returnGuest(id) {
    this.returnMutation(id);
  }
}
