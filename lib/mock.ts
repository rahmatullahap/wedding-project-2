import { v4 as uuid } from 'uuid';
import { date, name, address, random, company } from 'faker';
import { randomArray } from './helper';
import { Guest, Instance } from '~/store/attendance';

export function fakeGuest(): Guest {
  return {
    id: uuid(),
    createdAt: date.past(),
    name: name.findName(),
    detail: address.streetAddress(),
    nickname: name.lastName(),
    vip: random.boolean()
  };
}

export function fakeGuests(): Guest[] {
  //   return randomArray(fakeGuest, 10, 20);
  return GB;
}

export function fakeInstance(): Instance {
  return {
    id: uuid(),
    createdAt: date.past(),
    name: company.companyName(),
    totalGuest: 10
  };
}

export function fakeInstances(): Instance[] {
  return randomArray(fakeInstance, 3, 10);
}

const GB: Guest[] = [
  {
    id: '1',
    createdAt: new Date(),
    name: 'Prof. Dr. H. I. Syarief Hidayat, MS',
    detail: 'Jl Kalijati Indah Raya No.3AntapaniBandung',
    vip: false
  },
  {
    id: '2',
    createdAt: new Date(),
    name: 'Prof. Dr. Drs. H. Soleh Soemirat, M.S',
    detail: 'Jl. Bukit Dago Selatan No.8 RT/RW. 006/003 Kelurahan Dago Bandung',
    vip: false
  },
  {
    id: '3',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Mien Hidayat, M.S',
    detail: 'Jl. Sukaasih III No. 19 RT 04 RW 07Bandung Timur',
    vip: false
  },
  {
    id: '4',
    createdAt: new Date(),
    name: 'Prof. Dr. H. A. Djadja Saefullah, Drs., MA., Ph.D.',
    detail: 'Jl. CigadungRaya No. 44 Bandung',
    vip: false
  },
  {
    id: '5',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Iwin Sumarman, dr., Sp.,THT.,(KAI)',
    detail: 'Jl. Jati Indah II No. 11 (Buah-Batu) - Bandung',
    vip: false
  },
  {
    id: '6',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Johan S. Masjhur, dr., Sp.PD-KEMD, SpKN.',
    detail: 'Jl. Sidomukti No. 79 Bandung 40123',
    vip: false
  },
  {
    id: '7',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Ponpon S. Idjradinata, dr., Sp.A(K).',
    detail:
      'Jl. Pinus Raya Barat Jalur I No.8 Pondok Hijau Indah Desa Ciwaruga,Kec. Parongpong',
    vip: false
  },
  {
    id: '8',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Tuhpawana Priatna Sendjaja, Ir.',
    detail: 'Jl. Kawung Ece No. 8 - Bandung',
    vip: false
  },
  {
    id: '9',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. H.E. Hidayat Salim, M.S.',
    detail:
      'Kampung Bayubud RT/RW. 001/004 No. 15 Desa Sinangmejar Kecamatan Wanaraja Garut',
    vip: false
  },
  {
    id: '10',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Udju D. Rusdi',
    detail: 'Jl. Bukit Dago Utara III/5 - Bandung',
    vip: false
  },
  {
    id: '11',
    createdAt: new Date(),
    name: 'Prof. Dr. Dadi Suryadi, Ir., MS.',
    detail:
      'Jl. Golp Barat V1No.23 RT/RW. 006/009 Kelurahan Sukamiskin Arcamanik - Bandung',
    vip: false
  },
  {
    id: '12',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Sutyastie Soemitro, SE., MS.',
    detail: 'Jl. Kawista 26 Ranca Kendal - Bandung',
    vip: false
  },
  {
    id: '13',
    createdAt: new Date(),
    name: 'Prof. Dr. Armida Salsiah, SE.,MA.',
    detail: 'Jl. Lembah Pakar Timur No.2 Bandung',
    vip: false
  },
  {
    id: '14',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Yuyus Suryana Sudarma, SE.,MS.',
    detail: 'Jl. Yupiter Tengah VI/8 Marga Cinta(Buahbatu)',
    vip: false
  },
  {
    id: '15',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Rina Indiastuti,SE.,M.SIE. (Rektor Unpad)',
    detail: 'Jl. Kembar Timur I No. 17 Lingkar Selatan',
    vip: true
  },
  {
    id: '16',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Ernie Tisnawati Sule,Dra.,M.Si.',
    detail: 'Jl. Griya Anggun I No.4Griya Bukit Mas II Cimenyan',
    vip: false
  },
  {
    id: '17',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Ilya Avianti,SE.,M.Si.Ak',
    detail: 'Jl. Cigadung Selatan No.31 Z',
    vip: false
  },
  {
    id: '18',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Ina Primiana Febri Mustika Soeharsono, SE.,MT.',
    detail: 'Jl. Apel No. 9 Rancakendal Bandung',
    vip: false
  },
  {
    id: '19',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Winwin Yadiati, SE.,M.Si.Ak.',
    detail: 'Jl. Komplek Margahayu Raya Barat Blok L-2 No.73',
    vip: false
  },
  {
    id: '20',
    createdAt: new Date(),
    name:
      'Prof. Dr. Drs. H. Moh. Wahyudin Zarkasyi, M.Si.Ak (Mantan Rektor Unsika Karawang)',
    detail: 'Jl. Kopo Permai 54 CD N0.30',
    vip: true
  },
  {
    id: '21',
    createdAt: new Date(),
    name: 'Prof. Dr. Sri Mulyani NS.,SE.,M.Si. (Rektor Unsika Karawang)',
    detail: 'Jl. Puspa Utara IIINo.2 Soekarna HattaMargacinta',
    vip: true
  },
  {
    id: '22',
    createdAt: new Date(),
    name: 'Prof. Dr.Nunuy Nur Afiah, M.Si.,Ak.',
    detail: 'Jl. Manokwari No.26 Antapani',
    vip: false
  },
  {
    id: '23',
    createdAt: new Date(),
    name: 'Prof. Dr. Arief Anshory Yusuf,SE.,M.Sc.',
    detail: 'Jl.Bojongkulon III No.22/12 Cikondang RT.001 RW.012',
    vip: false
  },
  {
    id: '24',
    createdAt: new Date(),
    name: 'Prof. Dr. Nury Effendi, S.E., MA.',
    detail: 'Jl. Golf Barat VI No. 10 Arcamanik RT. 006 RW. 009',
    vip: false
  },
  {
    id: '25',
    createdAt: new Date(),
    name: 'Prof. Dr. Anas Subarnas, M.Sc.,Apt.',
    detail: 'Jl. Anggrek No.3 BumiRancaekek Kencana',
    vip: false
  },
  {
    id: '26',
    createdAt: new Date(),
    name: 'Prof. Dr. Moelyono Moektiwardojo, M.S.,Apt.',
    detail: 'Jl.PlutoUtaraIVNo.24 Margahayu Raya, Badnung, 40286',
    vip: false
  },
  {
    id: '27',
    createdAt: new Date(),
    name: 'Prof. Dr. Ajeng Diantini, M.Si.,Apt.',
    detail: 'Jl. Pondok Hijau Indahh F-19 Gegerkalong',
    vip: false
  },
  {
    id: '28',
    createdAt: new Date(),
    name: 'Prof. Dr. Drs. Ahmad Muhtadi, M.S.,Apt.',
    detail: 'Jl. Bahagia I . No.10Bubat',
    vip: false
  },
  {
    id: '29',
    createdAt: new Date(),
    name: 'Prof. Dr. Jutti Levita, M.Si.,Apt.',
    detail: 'Puri Cipageran Indah I Blok G.75 Cimahi Bandung',
    vip: false
  },
  {
    id: '30',
    createdAt: new Date(),
    name: 'Prof. Dr. Dra. Marline Abdassah Bratadiredja, MS., Apt.',
    detail: 'Jl. H Wasid No.9',
    vip: false
  },
  {
    id: '31',
    createdAt: new Date(),
    name: 'Prof. Muchtaridi, S.Si., Apt., M.Si.,PhD',
    detail: 'Perumahan IKOPIN Blok F N0. A 72',
    vip: false
  },
  {
    id: '32',
    createdAt: new Date(),
    name:
      'Prof. Dr. H. Ahmad M.Ramli, SH., MH. (Direktur Jenderal Penyelenggaraan Pos dan Informatika di Kementerian Komunikasi dan Informatika RI',
    detail: 'Jl.Alfa No. 8Cigadung',
    vip: true
  },
  {
    id: '33',
    createdAt: new Date(),
    name: 'Prof. Dr. I. Gde Pantja Astawa, SH.,MH.',
    detail:
      'Jl. Komplek Citra Asih Permai Blok E. No.5 Gunung Batu Cimahi Utara',
    vip: false
  },
  {
    id: '34',
    createdAt: new Date(),
    name: 'Prof. Dr.Veronica Komalawati,SH.,MH.',
    detail: 'Komplek Margaasih Jl. JatimenakB. VIII No.18 (Bandung).',
    vip: false
  },
  {
    id: '35',
    createdAt: new Date(),
    name: 'Prof. Huala Adolf, SH.,LL.M.Ph.D.',
    detail: 'Jl. Karawitan No.111Turangga Bandung',
    vip: false
  },
  {
    id: '36',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Eman Suparman,SH.,MH',
    detail: 'Komplek Taruna No.104 Ujung Berung',
    vip: false
  },
  {
    id: '37',
    createdAt: new Date(),
    name: 'Prof. Dr. Ida Nurlinda, S.H.,MH. (Wakil Rektor Unpad)',
    detail: 'Jl. Guntur Sari I No. 25Buah Batu40264',
    vip: true
  },
  {
    id: '38',
    createdAt: new Date(),
    name: 'Prof. Dr. Tarsisius Murwaji, S.H.,M.H.',
    detail: 'Jl. Terjun Bugi No.16 Arcamanik',
    vip: false
  },
  {
    id: '39',
    createdAt: new Date(),
    name: 'Prof. Dr. An-An Chandrawulan, S.H.,LL.M.',
    detail: 'Jl.Karawitan No.111',
    vip: false
  },
  {
    id: '40',
    createdAt: new Date(),
    name: 'Prof. Susi Dwi Harijanti, SH., LL.M., Ph.D',
    detail: 'Jl. Tamborin No. 21 Lengkong, Bandung, 40264',
    vip: false
  },
  {
    id: '41',
    createdAt: new Date(),
    name: 'Prof. H. Atip Latipulhayat, S.H., LL.M., Ph.D',
    detail: 'Jl. Riung Turna III No.12 Kop.Riung Bandung',
    vip: true
  },
  {
    id: '42',
    createdAt: new Date(),
    name: 'Prof.Dr. Dadang Suganda, M.Hum.',
    detail: 'Jl. Merkuri TengahX/11Bandung',
    vip: false
  },
  {
    id: '43',
    createdAt: new Date(),
    name: 'Prof. Dr. Reiza D. Dienaputra, M.Hum',
    detail: 'Jl. Kamper Resik 14 Cluster Kamper Bumi Panyawangan',
    vip: false
  },
  {
    id: '44',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Nina Herlina, MS.',
    detail: 'Jl. Kawung EceNo.6',
    vip: false
  },
  {
    id: '45',
    createdAt: new Date(),
    name: 'Prof. Dr. Cece Sobarna',
    detail: 'Jl. Kebaktian I Sariwates III/18 Kiaracondong',
    vip: false
  },
  {
    id: '46',
    createdAt: new Date(),
    name: 'Prof. Dr. Tadjudin Nur,M.Hum.',
    detail: 'Jl. Pratista Barat II-ANo.9Antapani',
    vip: false
  },
  {
    id: '47',
    createdAt: new Date(),
    name: 'Prof. Aquarini Priyatna , MA., M.Hum., Ph.D.',
    detail: 'Jl.Saturnus No.5 RT/RW. 006/009',
    vip: false
  },
  {
    id: '48',
    createdAt: new Date(),
    name: 'Prof. Dr. Deddy Mulyana, MA.Ph.D. (Mantan Dekan Fikom Unpad)',
    detail: 'Jl. Parabon IV No. 19 Terusan Kircon',
    vip: true
  },
  {
    id: '49',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Utang Suwaryo,Drs.,M.A',
    detail: 'Jl. Sukaasih No.219 Ujung Berung Kec. Arcamanik',
    vip: false
  },
  {
    id: '50',
    createdAt: new Date(),
    name: 'Prof. Dr. Drs. Samugyuo Ibnu Redjo, M.A.',
    detail: 'Jl. PanyawanganI No. 3 Komplek Panghegar Permai',
    vip: false
  },
  {
    id: '51',
    createdAt: new Date(),
    name: 'Prof. Dr.Sam’un Jaja Raharja, M.Si',
    detail:
      'Jalan Aria selatan No.4 Komplek Aria Graha Regensi- Soekarno Hatta Bandung',
    vip: false
  },
  {
    id: '52',
    createdAt: new Date(),
    name: 'Prof. Dr. Drs. H. Opan Suhendi Suwartapradja, M.Si.',
    detail:
      'Jl. Giri Rahayu 2 No.1 Kompleks Simpay Asih Kelurahan Pasir Endah, Bandung, 40619',
    vip: false
  },
  {
    id: '53',
    createdAt: new Date(),
    name: 'Prof.H.Nandang Alamsyah Delianoor,SH.,M.Hum.',
    detail: 'Anggrek Residence C18 Jl.Rumah Sakit Daerah Ujung Berung',
    vip: false
  },
  {
    id: '54',
    createdAt: new Date(),
    name: 'Prof. Dr. Oekan Soekotjo Abdoellah, MA.',
    detail: 'Jl. Cipadung Permai No. 120 - Bandung',
    vip: false
  },
  {
    id: '55',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Budiman Rusli, Drs., MS',
    detail: 'Jln. Antapani 12 Kav. 18 Depan Masjid Raya Antapani Bandung',
    vip: false
  },
  {
    id: '56',
    createdAt: new Date(),
    name: 'Prof. Dr. Nasrullah Nazsir, Drs.,MS.',
    detail: 'Jl.Pakar Timur No. 17Bandung',
    vip: false
  },
  {
    id: '57',
    createdAt: new Date(),
    name:
      'Prof. Dr. H. Obsatar Sinaga, S.IP.,M.Si. (Rektor Universitas Widyatama)',
    detail: 'Jl.Raya Sindang LayaNo.61 Ujung BerungBandung',
    vip: true
  },
  {
    id: '58',
    createdAt: new Date(),
    name: 'Prof. Drs. Yanyan Mochamad Yani, MAIR. Ph.D. (Wakil Rektor Unpad)',
    detail: 'Jl. H. Kurdi Raya No. 9Mohamad TohaBandung',
    vip: true
  },
  {
    id: '59',
    createdAt: new Date(),
    name: 'Prof. Dr. Johanes Cornelius Mose, dr.,Sp.OG',
    detail: 'Jl.Tarumanagara Timur 68Komplek Singgasana Pradana',
    vip: false
  },
  {
    id: '60',
    createdAt: new Date(),
    name: 'Prof. Dr. Nanan Sekarwana,dr.,Sp.AK.,MARS.',
    detail: 'Jl. Abadi Raya No.8 Komplek Batu Nunggal Indah',
    vip: false
  },
  {
    id: '61',
    createdAt: new Date(),
    name: 'Prof. Dr. dr. Dany Hilmanto,Sp.A(K)',
    detail: 'Jl. Raya Soreang No.Atau Ilmu Kesehatan Anak (RSHS) Jl. Pasteur38',
    vip: false
  },
  {
    id: '62',
    createdAt: new Date(),
    name: 'Prof. Dr. dr. Med Tri Hanggono Achmad (Mantan Rektor Unpad)',
    detail: 'Jl. H. Kurdi II No. 10Bandung (Astana Anyar )',
    vip: true
  },
  {
    id: '63',
    createdAt: new Date(),
    name: 'Prof. Dr.dr. Ida Parwati Santoso,Sp.PK (K).',
    detail: 'Jl. Venus Timur XIIINo.3 Komplek Metro Bandung',
    vip: false
  },
  {
    id: '64',
    createdAt: new Date(),
    name: 'Prof. Dr. dr. Budi Setiabudiawan,Sp.A(K).,M.Kes.',
    detail: 'Jl. Buton no. 10',
    vip: false
  },
  {
    id: '65',
    createdAt: new Date(),
    name: 'Prof. Dr. dr. Kusnandi Rusmil,Sp.A(K).,M.M.',
    detail: 'Jl. Sarimanah N0.3Sukajadi',
    vip: false
  },
  {
    id: '66',
    createdAt: new Date(),
    name:
      'Prof. Dr. dr. Dedi Rachmadi Sjambas, Sp.Ak.,M.Kes./Prof. Dr. Efa Laela Fakhriah,S.H.,M.H.',
    detail: 'Cibolerang No.71A Babakan Ciparay',
    vip: false
  },
  {
    id: '67',
    createdAt: new Date(),
    name: 'Prof. Dr. Oki Suwarsa, dr., M.Kes., Sp.KK(K)',
    detail:
      'Komp. Dai Ichi No. 9 Jl. Terusan Jakarta Utara Antapani Bandung, 40291',
    vip: false
  },
  {
    id: '68',
    createdAt: new Date(),
    name:
      'Prof. Arief Sjamsulaksan Kartasasmita, dr.,Sp.M(K).,M.Kes.,MM.,Ph.D. (Wakil Rektor Unpad)',
    detail: 'Jl. Bukit Dago Utara III/7',
    vip: true
  },
  {
    id: '69',
    createdAt: new Date(),
    name: 'Prof. Dr. dr. Tono Djuwantono, Sp.OG(K)., M.Kes.',
    detail: 'Jl. Lombok No. 21',
    vip: false
  },
  {
    id: '70',
    createdAt: new Date(),
    name: 'Prof.Dr.drg. Hj. Williyanti Suwondo, Sp.Ped.',
    detail: 'Jl. SukasenangV No. 52Cikutra',
    vip: false
  },
  {
    id: '71',
    createdAt: new Date(),
    name: 'Prof. Dr. Suhardjo, drg., MS.,SpRKG.',
    detail: 'Jl. Kemuning No. 7 Cihanjuang Blok C. Cimahi',
    vip: false
  },
  {
    id: '72',
    createdAt: new Date(),
    name: 'Prof. Dr. Achmad Syawqie, drg.,MS.',
    detail: 'Jln. Komplek Unpad"Cigadung Asri" RancakendalKav. No.2',
    vip: false
  },
  {
    id: '73',
    createdAt: new Date(),
    name: 'Prof. Dr. Harmas Yazid Yusuf, drg.,Sp.BM.',
    detail: 'Jl. Cibogo 43Bandung (40164)',
    vip: false
  },
  {
    id: '74',
    createdAt: new Date(),
    name: 'Prof. Soenardi Widyaputra,drg,M.S.,Ph.D',
    detail: 'Jl. Gading Utama Timur NO.11A Kec. Rancasari',
    vip: false
  },
  {
    id: '75',
    createdAt: new Date(),
    name: 'Prof. Dr. drg. Hj. Yetty Herdiyati Sumantadiredja, Sp.Ped.',
    detail: 'Jln.Raya Dayeuh Kolot No. 432',
    vip: false
  },
  {
    id: '76',
    createdAt: new Date(),
    name: 'Prof. Dr. drg. Inne Suherna Sasmita, Sp.Ped.',
    detail: 'Jl.Marga Asih Permai Blok W2.1',
    vip: false
  },
  {
    id: '77',
    createdAt: new Date(),
    name: 'Prof. Dr. drg. Ani Melani Maskoen, M.Kes',
    detail: 'Jln. Pasundan No. 68/18B Regol Bandung',
    vip: false
  },
  {
    id: '78',
    createdAt: new Date(),
    name: 'Prof. Dr. drg. Arlette Suzy Puspa Pertiwi, Sp.KGA., M.Si.',
    detail: 'Town House Balleza B-20, Antapani Residence',
    vip: false
  },
  {
    id: '79',
    createdAt: new Date(),
    name: 'Prof. Suryani, S.Kp., M.HSc., PhD.',
    detail: 'Langensari Rt 06/03 No.342 Cibeureum',
    vip: false
  },
  {
    id: '80',
    createdAt: new Date(),
    name: 'Prof. Dr. Erri Noviar Megantara',
    detail: 'Jl. Cisaranten Baru No. 10 Cisaranten Kulon Arcamanik Bandung',
    vip: false
  },
  {
    id: '81',
    createdAt: new Date(),
    name: 'Prof. Dr. Johan Iskandar, M.Sc.',
    detail: 'Jl. Komplek Cipadung Permai V No.A93',
    vip: false
  },
  {
    id: '82',
    createdAt: new Date(),
    name: 'Prof. Dr. Asep Kuswandi Supriatna, MS',
    detail: 'JL. Uranus Utama V A3/57 Komplek Margahayu Raya',
    vip: false
  },
  {
    id: '83',
    createdAt: new Date(),
    name: 'Prof. Dr. R. Ukun M.S. Soedjana Atmadja, MS',
    detail: 'Jl. Singaperbangsa No. 2 (Jurusan Kimia)',
    vip: false
  },
  {
    id: '84',
    createdAt: new Date(),
    name: 'Prof. Dr. Unang Supratman, MS.',
    detail: 'Jl. Permata Biru No.78 C Cibiru Bandung',
    vip: false
  },
  {
    id: '85',
    createdAt: new Date(),
    name: 'Prof. Dr. Wawan Hermawan,M.S.',
    detail: 'Jl. Margahayu Raya Barat Blok A3 No.59 Margacinta',
    vip: false
  },
  {
    id: '86',
    createdAt: new Date(),
    name: 'Prof. Dr. Sudrajat, MS',
    detail: 'Jl. Merkuri Timur VI No.1 Margahayu Raya',
    vip: false
  },
  {
    id: '87',
    createdAt: new Date(),
    name: 'Prof. Dr. Toto Subroto, MS.',
    detail: 'Jl. Sentral 39 Cimahi Bandung',
    vip: false
  },
  {
    id: '88',
    createdAt: new Date(),
    name: 'Prof. Dr. Eng.IMade Joni, M.Sc.',
    detail: 'Komp. Flamboyan Indah No.11 Rt.04/03, Cibiru Wetan',
    vip: false
  },
  {
    id: '89',
    createdAt: new Date(),
    name: 'Prof. Dr.Risdiana, S.Si.,M.Eng.',
    detail: 'Griya Jatinangor II A2 No. 2 RT 05 RW 14 Cinanjung',
    vip: false
  },
  {
    id: '90',
    createdAt: new Date(),
    name: 'Prof. Dr. Carmelia Panatarani,S.Si.,M.Si.',
    detail: 'Jl. Inhoftank/blok Desa XII N0.155',
    vip: false
  },
  {
    id: '91',
    createdAt: new Date(),
    name: 'Prof. Dr. Atje Setiawan Abdullah, MS., M.Kom.',
    detail: 'Komplek Bukit Padjadjaran No. 34 Jl Pasir Impun -Cisumun Bandung',
    vip: false
  },
  {
    id: '92',
    createdAt: new Date(),
    name: 'Prof. Dr. Ace Tatang Hidayat, S.Si., M.Si.',
    detail: 'Jl. Solontongan I No. 3',
    vip: false
  },
  {
    id: '93',
    createdAt: new Date(),
    name: 'Prof. Dr. rer. nat Yudi Rosandi, S.Si., M.Si',
    detail: 'Jl. Ebony Asri IV No. 1 Bumi Panyawangan',
    vip: false
  },
  {
    id: '94',
    createdAt: new Date(),
    name: 'Prof. H. Yayat Dhahiyat, Drs.,MS., Ph.D',
    detail:
      'Jl. Permai V No. 125 Cipadung Permai RT/RW 001/007 Kota Badnung, 40614',
    vip: false
  },
  {
    id: '95',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Junianto, M.P.',
    detail: 'Jl.CipamokolanNo. 45RT 01RW 08Rancasari',
    vip: false
  },
  {
    id: '96',
    createdAt: new Date(),
    name: 'Prof. Dr. Dra. Zuzy Anna , M.Si.',
    detail: 'Jl. Kertanegara 20 Villa Indah Padjadjaran Bogor',
    vip: false
  },
  {
    id: '97',
    createdAt: new Date(),
    name: 'Prof. Tarkus Suganda, Ir., M. Sc., Ph. D.',
    detail: 'Jl. Galaxy Raya No. 17 Bandung 40286',
    vip: false
  },
  {
    id: '98',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Mahfud Arifin, Ir., MS.',
    detail: 'Jl. Leuwi Anyar V Blok. D. No. 16 Leuwi Panjang - Bandung',
    vip: false
  },
  {
    id: '99',
    createdAt: new Date(),
    name: 'Prof. Dr. Ganjar Kurnia, Ir., DEA. (Ketua Senat Akademik Unpad)',
    detail: 'Jl. Alfa I No. 2 - Cigadung II - Bandung',
    vip: true
  },
  {
    id: '100',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Tati Nurmala, Ir.',
    detail: 'Jl. Cikutra No.96 Bandung, 40125',
    vip: false
  },
  {
    id: '101',
    createdAt: new Date(),
    name: 'Prof. Dr. H. Denny Kurniadie, Ir.,M.Sc.',
    detail: 'JL. Pelajar Pejuang No.23',
    vip: false
  },
  {
    id: '102',
    createdAt: new Date(),
    name: 'Prof. Dr. Tualar Simarmata,Ir.,M.S.',
    detail: 'Jl. Asri No.41 Padasuka',
    vip: false
  },
  {
    id: '103',
    createdAt: new Date(),
    name: 'Prof. Dr. Benny Joy, Ir.,M.S.',
    detail:
      'Jl. Permata Bumi III/AC.33 Cisaranten Kulon, Arcamanik Bandung40293',
    vip: false
  },
  {
    id: '104',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Jajang Sauman Hamdani, MS.',
    detail: 'Jl. Langen Sari RT 03 RW 08 Solokan Jeruk Majalaya',
    vip: false
  },
  {
    id: '105',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Hj. Hersanti, M.P',
    detail: 'Jl. Intan No.10 Perumnas Sadang Serang Bandung Cibeunying',
    vip: false
  },
  {
    id: '106',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Warid Ali Qosim, M.P.',
    detail: 'Panyileukan Regency E-1 Komplek Panyileukan',
    vip: false
  },
  {
    id: '107',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Abraham Suriadikusumah',
    detail:
      'Jl. Gading Utara VI Blok 17 No.8 Komp. Gading Regency Soekarno Hatta',
    vip: false
  },
  {
    id: '108',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Hj Yosini Deliana, MS.',
    detail: 'Jl.Villa Asri Selatan I No.8 Bumi Asri Padasuka, Bandung 40125',
    vip: false
  },
  {
    id: '109',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Hj. Tuti Widjastuti,M.S.',
    detail: 'Jl. Sepakbola No. 3 Arcamanik',
    vip: false
  },
  {
    id: '110',
    createdAt: new Date(),
    name: 'Prof. Hj. Roostita L.Balia, Drh., M. App. Sc., Ph. D.',
    detail: 'Jl. Warung Muncang No. 32 (belakang PTM) Bandung',
    vip: false
  },
  {
    id: '111',
    createdAt: new Date(),
    name: 'Prof. Dr. Sri Bandiati Komar,Ir',
    detail: 'Villa bandung Indah C3-(17,16) CileunyiDesa Cimekar',
    vip: false
  },
  {
    id: '112',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Kusmayadi Suradi, MS',
    detail: 'Jl. Bukit dago Utara IV No.15',
    vip: false
  },
  {
    id: '113',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Ellin Harlia,M.S.',
    detail: 'Margahayu Raya BlokI-2Jl. Yupiter IV No. 30',
    vip: false
  },
  {
    id: '114',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Hartati Chairunnisa,S.U.',
    detail: 'J. KawaluyaanIndahXVI No.5 Soekarno HattaBatununggal',
    vip: false
  },
  {
    id: '115',
    createdAt: new Date(),
    name: 'Prof. Dr.Ir.Ujang Hidayat Tanuwiria, M.S.',
    detail: 'Jl. Pamekar Barat V No. 3 Panghegar PermaiRancasari',
    vip: false
  },
  {
    id: '116',
    createdAt: new Date(),
    name: 'Prof. Dr. Mumun Munandar',
    detail: 'Margahayu Raya Blok Q362 Jl. Merkuri Tengah I /11A',
    vip: false
  },
  {
    id: '117',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Lovita Adriani,M.S.',
    detail: 'Jl. Purabaya No. 158/66 Bandung',
    vip: false
  },
  {
    id: '118',
    createdAt: new Date(),
    name: 'Prof. Dr. Tb. Zulrizka Iskandar, S. Psi., M.Sc.',
    detail: 'Jl. Kanser No. 23 Turangga - Bandung',
    vip: false
  },
  {
    id: '119',
    createdAt: new Date(),
    name: 'Prof. Dr. Diana Harding, S.Psi.,M.Si.',
    detail: 'Jl. Pasir Huni Raya No. 8 PasirluyuBandung',
    vip: false
  },
  {
    id: '120',
    createdAt: new Date(),
    name: 'Prof. Dr. Dra. Wilis Srisayekti',
    detail: 'Jl.Markus No.1Lengkong',
    vip: false
  },
  {
    id: '121',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Hendriati Agustiani , M.Si.',
    detail: 'Jati Indah 4 No. 10 Batununggal Bandung, 40161',
    vip: false
  },
  {
    id: '122',
    createdAt: new Date(),
    name: 'Prof.Dr.Ir.Nana Sulaksana,M.S.P.',
    detail: 'Jl. Haremis I No.9',
    vip: false
  },
  {
    id: '123',
    createdAt: new Date(),
    name: 'Prof. Dr.Ir.Ildrem Syafri,DEA.',
    detail: 'Jl Kembar Sari Indah III No 8 Kelurahan Cigereleng',
    vip: false
  },
  {
    id: '124',
    createdAt: new Date(),
    name: 'Prof. Dr. Hendarmawan, Ir.,M.Sc. (Wakil Rektor Unpad)',
    detail: 'Jl. Griya Caraka(Parakan Saat)',
    vip: true
  },
  {
    id: '125',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Edy Sunardi, M.Sc.',
    detail: 'Jl. Bima No.229/66 Ciroyom Bandung',
    vip: false
  },
  {
    id: '126',
    createdAt: new Date(),
    name: 'Prof. Ir. Mega Fatimah Rosana, M.Sc.,Ph.D.',
    detail: 'Karasak Baru No.26',
    vip: false
  },
  {
    id: '127',
    createdAt: new Date(),
    name: 'Prof. Euis Tintin Yuningsih , S.T., M.T., Ph.D',
    detail: 'Jl. Sukarajin I Rt.01/13 No.4',
    vip: false
  },
  {
    id: '128',
    createdAt: new Date(),
    name: 'Prof. Dr. Ir. Ahmad Helman Hamdani, M.Si.',
    detail: 'Johar Baru III/439 / Jl. Percetakan Negara Jakarta',
    vip: false
  },
  {
    id: '129',
    createdAt: new Date(),
    name: 'Prof. Dr. Imas Siti Setiasih, Ir., SU.',
    detail: 'Jl.Manglayang VI No. 2 Cilengkrang II- Ujung Berung',
    vip: false
  },
  {
    id: '130',
    createdAt: new Date(),
    name: 'Prof. Dr.Ir. H. Roni Kastaman, MSIE. (Mantan Wakil Rektor Unpad)',
    detail: 'Jl.. Waas A No.17 C Komplek Bank Duta',
    vip: true
  },
  {
    id: '131',
    createdAt: new Date(),
    name: 'Prof.Dr.Ir.H. Adjat Sudradjat, M.Sc.',
    detail: 'Jl. Ir. H. Juanda',
    vip: false
  },
  {
    id: '132',
    createdAt: new Date(),
    name: 'Prof.Dr. Ambrosius Purba, dr.,MS.,AIFO.',
    detail: 'Jl. Padasuka Pasirlayung Barat No. 64Bandung',
    vip: false
  },
  {
    id: '133',
    createdAt: new Date(),
    name: 'Prof.Dr. Dwi Kartini, SE.,Spec.,Lict.',
    detail: 'Jl. Cisitu Indah IINo.1 Bandung, 40135',
    vip: false
  },
  {
    id: '134',
    createdAt: new Date(),
    name: 'Prof.Dr. Endang Sutedja, dr.,Sp.,KK(KK).',
    detail: 'Jl. Sarijadi Raya No. 79 Kelurahan Sukasari Badnung, 40151',
    vip: false
  },
  {
    id: '135',
    createdAt: new Date(),
    name: 'Prof.Dr. Husein Hernadi Bahti (Mantan Wakil Rektor Unpad)',
    detail: 'Jln. Mandala IX No. 84 - Komp. Mandala Jatihandap Cicaheum',
    vip: true
  },
  {
    id: '136',
    createdAt: new Date(),
    name: 'Prof.Dr.Ir. Nurpilihan Bafdal, M.Sc.',
    detail: 'Jl. Kembar Baru Selatan III/3 - Bandung',
    vip: false
  },
  {
    id: '137',
    createdAt: new Date(),
    name: 'Prof.Dr.H. Sucherly, SE.,MS.',
    detail: 'Jl. Pilar Kencana E4 No.84 Kopo - Bandung',
    vip: false
  },
  {
    id: '138',
    createdAt: new Date(),
    name: 'Prof. Dr. Hj. Yuyun Yuwariah, Ir, A.S., MS.',
    detail: 'Jalan Lodaya No. 43 Bandung',
    vip: false
  },
  {
    id: '139',
    createdAt: new Date(),
    name:
      'Prof. Dr. Firman F. Wirakusumah, dr., Sp.OG./Prof. Dr.drg.Hj. Mieke Hemiawati Satari, M.S.',
    detail: 'Jl. Pager Gunung No.19- Bandung , 40132',
    vip: false
  },
  {
    id: '140',
    createdAt: new Date(),
    name: 'Prof. Dr. Rully Marsis Amirullah Roesli, SpPD-KGH.',
    detail: 'Jl. HalmaheraNo.8 - Bandung',
    vip: false
  },
  {
    id: '141',
    createdAt: new Date(),
    name: 'Prof. Dr. Herman Susanto,dr,SpOG.,K-Onk.',
    detail: 'Jl.Terusan Sutami III No.21Setrasari Bandung, 40163',
    vip: false
  },
  {
    id: '142',
    createdAt: new Date(),
    name: 'Prof.Dr. M. Nurhalim Shahib, dr.',
    detail: 'Jl.Griya Raya No.10 Bandung, 40164',
    vip: false
  }
];
