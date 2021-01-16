import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import getGuestsDoc from '../../pages/admin/guests/get-guests.gql';
import addAttendanceDoc from './add-attendance.gql';
import { DateFilter } from '~/filters/date';
import {
  AddAttendanceMutation,
  AddAttendanceMutationVariables,
  AttendanceData,
  GetGuestsQuery,
  GetGuestsQueryVariables,
  Guest
} from '~/operation';

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

  attendanceData: AttendanceData = {
    count: 1,
    name: ''
  };

  loading = false;
  valid = false;
  type: 'guest' | 'instance' = null;

  guestKeywordsTimer: NodeJS.Timeout;
  isGuestLoading = false;
  selectedGuest: Guest = null;
  searchGuest: string = '';
  guests: Guest[] = [];

  /**
   * filter guest list based on search query
   *
   * @param {GuestDetail} p
   * @param {string} queryText
   * @returns
   * @memberof AddGuestQueueDialog
   */
  filterGuest() {
    // Items have already been requested
    if (this.isGuestLoading) return;

    // cancel pending call
    clearTimeout(this.guestKeywordsTimer);

    // delay new call 500ms
    this.guestKeywordsTimer = setTimeout(async () => {
      await this.loadGuests(this.searchGuest);
    }, 500);
  }

  mounted() {}

  onGuestChange() {
    this.attendanceData.guestId = this.selectedGuest?.id;
    this.attendanceData.name = this.selectedGuest?.name;
    this.attendanceData.detail = this.selectedGuest?.detail;
  }

  async loadGuests(keywords: string) {
    this.isGuestLoading = true;
    try {
      const { data } = await this.$backend.query<
        GetGuestsQuery,
        GetGuestsQueryVariables
      >({
        query: getGuestsDoc,
        fetchPolicy: 'network-only',
        variables: {
          keyword: keywords?.toLowerCase(),
          skip: 0,
          limit: 10
        }
      });
      this.guests = data?.guest?.search?.results || [];
    } catch (error) {}
    this.isGuestLoading = false;
  }

  @Watch('searchGuest')
  onGuestSearch() {
    this.filterGuest();
  }

  @Watch('dialog')
  onDialogOpen() {
    if (this.dialog) {
      if (this.guest) {
        // load by guest
        this.guests = [this.guest];
        this.attendanceData.guestId = this.guest?.id;
        this.attendanceData.name = this.guest?.name;
        this.attendanceData.detail = this.guest?.detail;
        this.type = 'guest';
      }
    }
  }

  async save() {
    const attendance: AttendanceData = {
      count: parseInt(this.attendanceData.count?.toString(), 10),
      detail: this.attendanceData.detail,
      guestId: this.attendanceData.guestId,
      name: this.attendanceData.name,
      souvenirNo: parseInt(this.attendanceData.souvenirNo?.toString(), 10)
    };

    this.loading = true;
    if (attendance.souvenirNo) {
      try {
        await this.$backend.mutate<
          AddAttendanceMutation,
          AddAttendanceMutationVariables
        >({
          mutation: addAttendanceDoc,
          variables: {
            data: attendance
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
    this.selectedGuest = null;
    this.type = null;
    this.attendanceData = {
      count: 1,
      name: ''
    };
    this.$emit('close');
  }
}
