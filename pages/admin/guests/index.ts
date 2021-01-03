import { Component, Vue, Watch } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { DateFilter } from '~/filters/date';
import { Guest } from '~/store/attendance';

/**
 * list of tasks page
 */
@Component({
  layout: 'app',
  filters: {
    date: DateFilter
  }
})
export default class GuestsPage extends Vue {
  @Mutation('dashboard/changeTitle') private changeTitle: any;
  @Mutation('dashboard/changeBreadcrumbs') private changeBreadcrumbs: any;
  @State((state) => state.attendance.guests) items: Guest[];
  headers = [
    {
      text: '',
      align: 'center',
      value: 'status',
      sortable: true,
      width: 75
    },
    { text: 'Nama', value: 'name' },
    { text: 'Panggilan', value: 'nickname', sortable: false },
    { text: 'Alamat', value: 'detail', sortable: false },
    { text: '', align: 'right', value: 'action', sortable: false, width: 140 }
  ];

  addDialog = false;
  loading = false;

  guests: Guest[] = [];
  selectedGuest: Guest = null;

  keywords = '';

  mounted() {
    this.changeTitle('Daftar Tamu');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar tamu',
        disabled: true,
        to: '/admin/guests'
      }
    ]);
    this.guests = this.items;
  }

  @Watch('keywords')
  onKeywordChange() {
    if (this.keywords === '') {
      this.guests = this.items;
    } else {
      this.guests = this.items.filter(
        (i) =>
          i.name.toLowerCase().includes(this.keywords.toLowerCase()) ||
          // i.nickname.toLowerCase().includes(this.keywords.toLowerCase()) ||
          i.detail.toLowerCase().includes(this.keywords.toLowerCase())
      );
    }
  }

  addAttendance(guestId) {
    const guest = this.guests.find((g) => g.id === guestId);
    this.selectedGuest = guest;
    this.addDialog = true;
  }

  close() {
    this.addDialog = false;
  }
}
