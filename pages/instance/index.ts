import { Component, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { DateFilter } from '~/filters/date';
import { Instance } from '~/store/attendance';

/**
 * list of tasks page
 */
@Component({
  layout: 'app',
  filters: {
    date: DateFilter
  }
})
export default class InstancePage extends Vue {
  @Mutation('dashboard/changeTitle') private changeTitle: any;
  @Mutation('dashboard/changeBreadcrumbs') private changeBreadcrumbs: any;
  @State((state) => state.attendance.instances) items: Instance[];
  headers = [
    { text: 'No', value: 'no', sortable: false },
    { text: 'Nama', value: 'name' },
    { text: '', align: 'right', value: 'action', sortable: false, width: 140 }
  ];

  loading = false;
  addDialog = false;

  instances: Instance[] = [];
  selectedInstance: Instance = null;

  mounted() {
    this.changeTitle('Daftar Instansi');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar instansi',
        disabled: true,
        to: '/instance'
      }
    ]);
    this.instances = this.items;
  }

  addAttendance(instanceId) {
    const instance = this.instances.find((g) => g.id === instanceId);
    this.selectedInstance = instance;
    this.addDialog = true;
  }

  close() {
    this.addDialog = false;
  }
}
