import { Component, Vue } from 'vue-property-decorator';
import SummaryFilter from '~/filters/summary';

@Component({
  filters: {
    summary: SummaryFilter
  }
})
export default class PrayComponent extends Vue {
  loading = false;
  valid = false;

  attrs = {
    class: 'mb-6',
    boilerplate: true,
    elevation: 2
  };

  email = '';
  name = '';
  message = '';
  instagram = '';
  items = [];

  gallery = [
    `assets/images/gallery/1.jpg`,
    `assets/images/gallery/2.jpg`,
    `assets/images/gallery/3.jpg`,
    `assets/images/gallery/4.jpg`,
    `assets/images/gallery/5.jpg`,
    `assets/images/gallery/6.jpg`,
    `assets/images/gallery/7.jpg`,
    `assets/images/gallery/8.jpg`,
    `assets/images/gallery/9.jpg`,
    `assets/images/gallery/10.jpg`,
    `assets/images/gallery/11.jpg`,
    `assets/images/gallery/12.jpg`,
    `assets/images/gallery/13.jpg`,
    `assets/images/gallery/14.jpg`,
    `assets/images/gallery/15.jpg`,
    `assets/images/gallery/16.jpg`,
    `assets/images/gallery/17.jpg`,
    `assets/images/gallery/18.jpg`,
    `assets/images/gallery/19.jpg`
  ];

  mounted() {
    this.loading = true;
    // this.items = await this.getData();
    this.loading = false;
  }

  getSrc(path) {
    return require(`~/${path}`);
  }

  detail() {}

  save() {}

  async getData() {
    return [
      {
        color: '#1F7087',
        src: await this.getInstagramProfile('skuukzky'),
        name: '배수지',
        message: `두려움에 맞설 때
        내게 들려온 한 마디
        조금 더 힘을 내라고
        안개 속에 가려져
        한 줄기 빛도 없이
        고민하고 또 고민했었어
        오늘의 나를 위해서
        남과 다른 시선에
        또 다시 뒤쳐지는 그런 날들에
        반대로 나를 일으켜 달려 나가`
      },
      {
        color: '#952175',
        src: await this.getInstagramProfile('cristiano'),
        name: 'Cristiano',
        message: 'Wilujeng Euy, Doakeun aing nyusul'
      },
      {
        color: 'primary',
        src: await this.getInstagramProfile('karimahasnaa'),
        name: 'Hasna Karimah',
        message: 'Uhuy'
      }
    ];
  }

  async getInstagramProfile(username: string) {
    const res = await this.$axios.get(
      `https://www.instagram.com/${username}/?__a=1`
    );
    return res?.data.graphql.user['profile_pic_url_hd'] || null;
  }
}
