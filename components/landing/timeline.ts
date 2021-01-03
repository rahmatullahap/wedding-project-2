import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimelineComponent extends Vue {
  items = [
    {
      color: 'red lighten-2',
      icon: 'mdi-star',
      title: 'Where We Began',
      description: `Rahmat dan Hasna merupakan Senior-Junior di Jurusan Teknik Informatika
      Unpad. Karena perbedaan angkatan cukup jauh, mereka belum saling
      kenal. Masing-masing sibuk memperbaiki diri menjadi versi terbaik
      dirinya. Setelah Rahmat menyelesaikan studi Magister di ITB, Ia
      memutuskan untuk mulai taaruf dengan Hasna.`
    },
    {
      color: 'purple darken-1',
      icon: 'mdi-book-variant',
      title: 'Bertukar CV',
      description: `Ketika kedua belah pihak sudah menyatakan siap untuk menikah,
      maka bertukar CV merupakan langkah untuk mengetahui detail
      calon. Setelah membaca biodata masing-masing, Rahmat dan Hasna
      sepakat untuk melanjutkan taaruf ke tahap berikutnya.`
    },
    {
      color: 'green lighten-1',
      icon: 'mdi-airballoon',
      title: 'Taaruf dengan Keluarga',
      description: `Setelah istikhoroh, Rahmat dan Hasna sepakat untuk melanjutkan
      taaruf ke tahap keluarga. Rahmat bersilaturahim ke rumah Hasna
      didampingi Ustadz Faruq. Rahmat memperkenalkan diri dan menyatakan
      niatnya kepada keluarga Hasna.`,
      gallery: [`assets/images/gallery/3.jpg`]
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer',
      title: 'Silaturahim Keluarga & khitbah',
      description: `Rahmat bersama keluarga datang ke Puspiptek. Disini keluarga
      dari kedua belah pihak dapat lebih mengenal. Dalam pertemuan
      tersebut, Rahmat menyatakan untuk mengkhitbah Hasna langsung.
      Kemudian kedua keluarga mendiskusikan untuk tahapan
      selanjutnya.`,
      gallery: [`assets/images/gallery/4.jpg`]
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer',
      title: 'Silaturahim Keluarga Besar',
      description: `Pertemuan dua keluarga besar di Guest House Puspiptek dalam
      rangka silaturahim serta pemberian informasi perencanaan hari
      H.`,
      gallery: [
        `assets/images/gallery/5.jpg`,
        `assets/images/gallery/5_1.jpg`,
        `assets/images/gallery/5_2.jpg`
      ]
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer',
      title: 'Akad',
      description: `Akad Nikah`
    }
  ];

  mounted() {}

  getSrc(path) {
    return require(`~/${path}`);
  }
}
