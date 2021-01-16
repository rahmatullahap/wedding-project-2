import { Component, Vue, Watch } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import getGuestsDoc from './get-guests.gql';
import { DateFilter } from '~/filters/date';
import { GetGuestsQuery, GetGuestsQueryVariables, Guest } from '~/operation';

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
  headers = [
    {
      text: '',
      align: 'center',
      value: 'status',
      sortable: true,
      width: 75
    },
    { text: 'Nama', value: 'name' },
    { text: 'Alamat', value: 'detail', sortable: false },
    { text: 'VIP', value: 'vip', sortable: false },
    { text: '', align: 'right', value: 'action', sortable: false, width: 140 }
  ];

  options = {
    page: 1,
    itemsPerPage: 10
  };

  totalItems = 0;

  addDialog = false;
  loading = false;

  guests: Guest[] = [];
  selectedGuest: Guest = null;

  guestKeywordsTimer: NodeJS.Timeout;

  keywords = '';

  async mounted() {
    this.changeTitle('Daftar Tamu');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar tamu',
        disabled: true,
        to: '/admin/guests'
      }
    ]);
    await this.loadGuests();
  }

  @Watch('keywords')
  onKeywordChange() {
    // Items have already been requested
    if (this.loading) return;

    // cancel pending call
    clearTimeout(this.guestKeywordsTimer);

    // delay new call 500ms
    this.guestKeywordsTimer = setTimeout(async () => {
      await this.loadGuests();
    }, 500);
  }

  async loadGuests() {
    this.loading = true;
    try {
      const { data } = await this.$backend.query<
        GetGuestsQuery,
        GetGuestsQueryVariables
      >({
        query: getGuestsDoc,
        fetchPolicy: 'network-only',
        variables: {
          keyword: this.keywords,
          skip: (this.options.page - 1) * this.options.itemsPerPage,
          limit: this.options.itemsPerPage
        }
      });
      this.guests = data?.guest?.search?.results || [];
      this.totalItems = data?.guest?.search?.count;
    } catch (error) {}
    this.loading = false;
  }

  @Watch('pagination')
  async pagination() {
    await this.loadGuests();
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
