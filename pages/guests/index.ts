import { Component, Vue } from 'vue-property-decorator';
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
    { text: 'Nama', value: 'name' },
    { text: 'Panggilan', value: 'nickname', sortable: false },
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

  addDialog = false;
  loading = false;

  guests: Guest[] = [];
  selectedGuest: Guest = null;

  mounted() {
    this.changeTitle('Daftar Tamu');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar tamu',
        disabled: true,
        to: '/guests'
      }
    ]);
    this.guests = this.items;
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
