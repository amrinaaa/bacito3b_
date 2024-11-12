import pulauTukung from '../assets/pulautukung.png';
import pantaiManggar from '../assets/pantaimanggar.png';
import kebunRaya from '../assets/krb.png';
import pantaiKemala from '../assets/kemala.png';
import tamanBekapai from '../assets/bekapai.png';
import banuaPatra from '../assets/banuaPatra.png';

const destinations = [
    {
      id: 1,
      name: 'Pantai Manggar Segarasari',
      location: 'Balikpapan Timur',
      price: 'IDR 25.000',
      rating: 4.5,
      image: pantaiManggar,
      description: 'Sebenarnya nama pantai ini adalah Segarasari, namun kemudian terkenal dengan nama Pantai Manggar. Manggar sendiri adalah nama desa dari lokasi pantai tersebut. Pantai Manggar merupakan salah satu wisata alam dari kota Balikpapan. Hal itu karena pantai ini memiliki pemandangan alam yang sangat mempesona, laut biru berpadu dengan pasir putih bersih menjadi sajian yang memanjakan mata. Selain itu wisata ini juga menjadi favorit karena memiliki banyak wahana. Berbagai keseruan di air seperti banana-boat, jet ski hingga perahu ada di pantai ini.',
    },
    {
      id: 2,
      name: 'Pulau Tukung',
      location: 'Balikpapan Timur',
      price: 'IDR 10.000',
      rating: 4.5,
      image: pulauTukung,
    },
    {
      id: 3,
      name: 'Kebun Raya Balikpapan',
      location: 'Balikpapan Timur',
      price: 'IDR Gratis',
      rating: 4.5,
      image: kebunRaya,
    },
    {
        id: 4,
        name: 'Pantai Kemala',
        location: 'Balikpapan Timur',
        price: 'IDR 10.000',
        rating: 4.5,
        image: pantaiKemala,
      },
      {
        id: 5,
        name: 'Taman Bekapai',
        location: 'Balikpapan Kota',
        price: 'IDR Gratis',
        rating: 4.5,
        image: tamanBekapai,
      },
      {
        id: 6,
        name: 'Pantai Banua Patra',
        location: 'Balikpapan Kota',
        price: 'IDR 10.000',
        rating: 4.5,
        image: banuaPatra,
      },
  ];
  
  export default destinations;
  