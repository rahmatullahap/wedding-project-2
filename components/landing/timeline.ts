import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimelineComponent extends Vue {
  items = [
    {
      color: 'primary',
      icon: 'mdi-source-commit-start',
      title: 'Where We Began',
      description: `Rahmat dan Hasna merupakan Senior-Junior di Jurusan Teknik Informatika
      Unpad. Karena perbedaan angkatan cukup jauh, mereka belum saling
      kenal. Masing-masing sibuk memperbaiki diri menjadi versi terbaik
      dirinya. Setelah Rahmat menyelesaikan studi Magister di ITB, Ia
      memutuskan untuk mulai taaruf dengan Hasna.`
    },
    {
      color: 'primary',
      icon: 'mdi-text-box',
      title: 'Bertukar CV',
      description: `Ketika kedua belah pihak sudah menyatakan siap untuk menikah,
      maka bertukar CV merupakan langkah untuk mengetahui detail
      calon. Setelah membaca biodata masing-masing, Rahmat dan Hasna
      sepakat untuk melanjutkan taaruf ke tahap berikutnya.`
    },
    {
      color: 'primary',
      icon: 'mdi-nature-people',
      title: 'Taaruf dengan Keluarga',
      description: `Setelah istikhoroh, Rahmat dan Hasna sepakat untuk melanjutkan
      taaruf ke tahap keluarga. Rahmat bersilaturahim ke rumah Hasna
      didampingi Ustadz Faruq. Rahmat memperkenalkan diri dan menyatakan
      niatnya kepada keluarga Hasna.`
    },
    {
      color: 'primary',
      icon: 'mdi-account-multiple',
      title: 'Silaturahim Keluarga & khitbah',
      description: `Rahmat bersama keluarga datang ke Puspiptek. Disini keluarga
      dari kedua belah pihak dapat lebih mengenal. Dalam pertemuan
      tersebut, Rahmat menyatakan untuk mengkhitbah Hasna langsung.
      Kemudian kedua keluarga mendiskusikan untuk tahapan
      selanjutnya.`
    },
    {
      color: 'primary',
      icon: 'mdi-account-group',
      title: 'Silaturahim Keluarga Besar',
      description: `Pertemuan dua keluarga besar di Guest House Puspiptek dalam
      rangka silaturahim serta pemberian informasi perencanaan hari
      H.`
    },
    {
      color: 'primary',
      icon: 'mdi-ring',
      title: 'Akad',
      description: `Akad Nikah dilaksanakan pada tanggal 20 Juni 2020 di Masjid Bahrul Ulum, 
      Tangerang Selatan`
    }
  ];

  gallery = [
    `assets/images/gallery/3.jpg`,
    `assets/images/gallery/4.jpg`,
    `assets/images/gallery/5.jpg`,
    `assets/images/gallery/5_1.jpg`,
    `assets/images/gallery/5_2.jpg`
  ];

  mounted() {}

  getSrc(path) {
    return require(`~/${path}`);
  }
}
