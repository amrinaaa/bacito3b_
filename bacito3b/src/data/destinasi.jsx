import pulauTukung from '../assets/pulautukung.png';
import pantaiManggar from '../assets/pantaimanggar.png';
import pantaiManggar1 from '../assets/pantaimanggar1.png';
import kebunRaya from '../assets/krb.png';
import pantaiKemala from '../assets/kemala.png';
import tamanBekapai from '../assets/bekapai.png';
import banuaPatra from '../assets/banuaPatra.png';

const destination = [
    {
      id: 1,
      name: 'Pantai Manggar Segarasari',
      location: 'Balikpapan Timur',
      price: 'IDR 25.000',
      rating: 4.5,
      image: pantaiManggar,
      additionalImages: [
        // pantaiManggar,
        pantaiManggar1
      ],
      description: 'Sebenarnya nama pantai ini adalah Segarasari, namun kemudian terkenal dengan nama Pantai Manggar. Manggar sendiri adalah nama desa dari lokasi pantai tersebut. Pantai Manggar merupakan salah satu wisata alam dari kota Balikpapan. Hal itu karena pantai ini memiliki pemandangan alam yang sangat mempesona, laut biru berpadu dengan pasir putih bersih menjadi sajian yang memanjakan mata. Selain itu wisata ini juga menjadi favorit karena memiliki banyak wahana. Berbagai keseruan di air seperti banana-boat, jet ski hingga perahu ada di pantai ini.',
      maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1493.6431602969833!2d116.97881932696893!3d-1.2141551157060277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14f816ad571b5%3A0xacb7c2e8d6cfbd97!2sManggar%20Beach!5e0!3m2!1sen!2sid!4v1731959231409!5m2!1sen!2sid',
    },
    {
      id: 2,
      name: 'Pulau Bawui',
      location: 'Balikpapan Timur',
      price: 'IDR Gratis',
      rating: 4.5,
      image: pulauTukung,
      description: 'Pulau ini merupakan pulau kecil yang tak berpenghuni terdiri dari batu-batu karang yang kokoh dengan tanah di bagian atasnya, sehingga tumbuh berbagai macam pohon dan perdu di bagian puncaknya. Dari bagian atas pulau ini kita bisa menyaksikan banyak keindahan. Matahari terbenam, laut yang membiru dengan deretan kapal-kapal yang merapat di pelabuhan, hingga batu-batu karang yang kokoh. Selain tempat untuk rekreasi keluarga, pulau ini juga sering kali dipakai untuk lokasi pemotretan beberapa model lokal, dan pemotretan untuk pra wedding.',
      maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1609.9479643972645!2d116.8099637640354!3d-1.2804528929511745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147ad28cba7b7%3A0x68555f16659524f4!2sPulau%20Bawui%20Malawai!5e0!3m2!1sen!2sid!4v1731958909847!5m2!1sen!2sid',
    },
    {
      id: 3,
      name: 'Kebun Raya Balikpapan',
      location: 'Balikpapan Timur',
      price: 'IDR Gratis',
      rating: 4.5,
      image: kebunRaya,
      description: 'Kebun Raya Balikpapan terletak di kawasan Hutan Lindung Sungai Wain. Dibangun bertujuan untuk konservasi alam, objek wisata, serta pelestarian flora asli Kalimantan yang hampir punah. Kebun Raya ini memiliki beragam koleksi dari flora yang sering dijumpai hingga spesies langka yang dilindungi. Sehingga pengunjung dapat bebas mengamati hingga merasakan tekstur dari tumbuhan yang ada. Kebun Raya Balikpapan memiliki banyak sekali fasilitas yang diperuntukkan untuk kepentingan umum. Tempat parkir yang disediakan sudah memadai dan terdapat musala serta toilet umum. Di dalamnya juga terdapat gedung pendidikan dan seminar. Beberapa fasilitas ruangan lain seperti guest house, ruang belajar, perpustakaan, dan laboratorium tersedia di sini.',
      maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8455520990624!2d116.85593187914323!3d-1.136454964838302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0xc8c509df2f71cdca!2sBalikpapan%20Botanical%20Gardens!5e0!3m2!1sen!2sid!4v1731959324600!5m2!1sen!2sid',
    },
    {
        id: 4,
        name: 'Pantai Kemala',
        location: 'Balikpapan Timur',
        price: 'IDR 10.000',
        rating: 4.5,
        image: pantaiKemala,
        description: 'Pantai Kemala adalah salah satu destinasi wisata favorit yang terletak di Balikpapan, Kalimantan Timur. Pantai ini dikenal dengan pasirnya yang putih dan suasana yang tenang, menjadikannya tempat yang cocok untuk berlibur atau bersantai. Berbeda dengan pantai lain di Balikpapan, Pantai Kemala memiliki nuansa yang mirip dengan resort di Bali, dengan beberapa restoran dan kafe tepi pantai yang menawarkan makanan dan minuman, serta kursi-kursi santai untuk pengunjung menikmati pemandangan laut. Di Pantai Kemala, pengunjung dapat menikmati berbagai kegiatan seperti berenang, bermain banana boat, atau sekadar menikmati keindahan matahari terbenam. Terdapat juga fasilitas pendukung seperti toilet, tempat parkir, dan area bermain untuk anak-anak.',
        maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2194.923031730925!2d116.8159073759355!3d-1.2812277881192764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14748c4554b4b%3A0x63928fb8e11c567a!2sPantai%20Kemala%2C%20Kalimantan%20Timur!5e0!3m2!1sen!2sid!4v1731959662604!5m2!1sen!2sid',
      },
      {
        id: 5,
        name: 'Taman Bekapai',
        location: 'Balikpapan Kota',
        price: 'IDR Gratis',
        rating: 4.5,
        image: tamanBekapai,
        description: 'Taman Bekapai adalah salah satu ruang terbuka hijau yang ikonik di Kota Balikpapan, Kalimantan Timur. Terletak di pusat kota, taman ini menjadi tempat rekreasi favorit bagi warga lokal maupun wisatawan yang ingin bersantai dan menikmati suasana perkotaan yang nyaman. Taman Bekapai terkenal dengan instalasi seni air mancur yang unik, yang menambah estetika area ini, terutama saat malam hari ketika air mancur dan taman diterangi oleh lampu-lampu warna-warni. Taman Bekapai dikelilingi oleh berbagai tempat kuliner dan area perbelanjaan, sehingga pengunjung bisa dengan mudah menemukan makanan dan minuman lokal untuk dinikmati di sekitar taman. Tempat ini sangat cocok untuk wisata keluarga atau sekadar tempat singgah untuk beristirahat sejenak di tengah hiruk-pikuk kota.',
        maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.723495966671!2d116.83351908908242!3d-1.2766717972869075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df146dd670a79b5%3A0x4549831c58987caf!2sTaman%20Bekapai!5e0!3m2!1sen!2sid!4v1731959918669!5m2!1sen!2sid',
      },
      {
        id: 6,
        name: 'Pantai Banua Patra',
        location: 'Balikpapan Kota',
        price: 'IDR 10.000',
        rating: 4.5,
        image: banuaPatra,
        description: ' Pantai ini terkenal dengan suasananya yang nyaman dan tenang, menjadikannya tempat yang ideal untuk menikmati pemandangan matahari terbenam yang indah di tepi laut. Pantai Banua Patra memiliki karakteristik yang berbeda dibandingkan pantai-pantai lain di Balikpapan, karena pantainya lebih berbatu. Di sekitar pantai, terdapat area duduk dan tempat makan, sehingga pengunjung dapat menikmati makanan ringan sambil melihat pemandangan laut. Lokasinya yang dekat dengan pusat kota membuat Pantai Banua Patra mudah dijangkau, baik dengan kendaraan pribadi maupun transportasi umum.',
        maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.8634773521796!2d116.81100818619271!3d-1.2818260624837812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1474e53a0b13b%3A0x5d5bde15f37d0b27!2sPantai%20Batu%20-%20Batu%20Banua%20Patra!5e0!3m2!1sen!2sid!4v1731960128260!5m2!1sen!2sid',
      },
  ];
  
  export default destination;
  