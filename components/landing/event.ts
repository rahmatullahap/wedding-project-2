import { DateTime, Duration } from 'luxon';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EventComponent extends Vue {
  loading = false;
  selection = 2;

  nowTimer: NodeJS.Timeout;

  countdown = '';

  header = require(`~/assets/images/cover_about.jpg`);

  mounted() {
    const dDay = DateTime.fromFormat(
      '17/01/2021 09:30:00',
      'dd/MM/yyyy HH:mm:ss'
    );
    this.nowTimer = setInterval(() => {
      const now = DateTime.local();
      const cntd = dDay.diff(now, 'second').toObject();
      const duration = Duration.fromObject(cntd);
      this.countdown = duration.toFormat('dd:hh:mm:ss');
    }, 1000);
  }

  getSrc(path) {
    return require(`~/${path}`);
  }

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }

  onSessionChange() {}
}
