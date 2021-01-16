import { Component, Vue, Watch } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import getTotalGuestDoc from './get-total-guest.gql';
import getAttendancesDoc from './get-attendances.gql';
import { DateFilter } from '~/filters/date';
import {
  Attendance,
  GetAttendancesQuery,
  GetAttendancesQueryVariables,
  GetTotalGuestQuery,
  GetTotalGuestQueryVariables
} from '~/operation';

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

  options = {
    page: 1,
    itemsPerPage: 10
  };

  totalItems = 0;

  errorToast = false;
  errorMessage = '';
  successToast = false;
  successMessage = '';

  keywords = '';

  attendanceKeywordsTimer: NodeJS.Timeout;

  async mounted() {
    this.changeTitle('Daftar Hadir Tamu');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar hadir tamu',
        disabled: true,
        to: '/admin/attendance'
      }
    ]);
    await this.loadAttendances();
    await this.countTotal();
  }

  @Watch('keywords')
  onKeywordChange() {
    // Items have already been requested
    if (this.loading) return;

    // cancel pending call
    clearTimeout(this.attendanceKeywordsTimer);

    // delay new call 500ms
    this.attendanceKeywordsTimer = setTimeout(async () => {
      await this.loadAttendances();
    }, 500);
  }

  @Watch('pagination')
  async pagination() {
    await this.loadAttendances();
  }

  async countTotal() {
    this.attendanceCount = 0;
    this.inRoomCount = 0;
    this.loading = true;
    try {
      const { data } = await this.$backend.query<
        GetTotalGuestQuery,
        GetTotalGuestQueryVariables
      >({
        query: getTotalGuestDoc,
        fetchPolicy: 'network-only',
        variables: {
          onBuilding: true
        }
      });
      this.inRoomCount = data?.attendance?.totalGuest?.totalInBuilding || 0;
      this.attendanceCount = data?.attendance?.totalGuest?.total || 0;
    } catch (error) {}
    this.loading = false;
  }

  async loadAttendances() {
    this.loading = true;
    try {
      const { data } = await this.$backend.query<
        GetAttendancesQuery,
        GetAttendancesQueryVariables
      >({
        query: getAttendancesDoc,
        fetchPolicy: 'network-only',
        variables: {
          keyword: this.keywords,
          skip: (this.options.page - 1) * this.options.itemsPerPage,
          limit: this.options.itemsPerPage
        }
      });
      this.attendances = data?.attendance?.search?.results || [];
      this.totalItems = data?.attendance?.search?.count;
    } catch (error) {}
    this.loading = false;
  }

  addAttendance() {
    this.addDialog = true;
  }

  returnAttendance() {
    this.returnDialog = true;
  }

  async close() {
    this.addDialog = false;
    this.returnDialog = false;
    await this.loadAttendances();
    await this.countTotal();
  }

  error(message: string) {
    this.errorToast = true;
    this.errorMessage = message;
  }

  // editGuest(id) {

  // }
}
