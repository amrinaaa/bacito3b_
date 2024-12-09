import pulauTukung from '../assets/pulautukung.png';
import pantaiManggar from '../assets/pantaimanggar.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const berita = [
    {
        id: 1,
        judul: 'Sunset Terbaik dan Mempesona di Pulau Tukung',
        image: pulauTukung,
        berita: 'Dari sudut mana pun, pemandangan sunset di Pulau Tukung selalu memukau. Saat matahari mulai turun menuju cakrawala, langit berubah menjadi kanvas yang dipenuhi warna-warni menakjubkan—dari jingga cerah, merah muda, hingga ungu lembut. Pemandangan ini berpadu dengan air laut yang tenang, menciptakan refleksi sempurna dari cahaya senja yang memancar di permukaan laut.',
        subjudul1: 'Pantai Utama',
        isisubjudul1: 'Garis pantai yang menghadap langsung ke arah barat menjadi tempat favorit untuk menyaksikan matahari terbenam. Banyak wisatawan duduk santai di tepi pantai atau di pondok-pondok kecil, menunggu momen magis ketika matahari perlahan menghilang di balik horizon.',
        subjudul2: 'Menara Pandang',
        isisubjudul2: 'Bagi yang ingin mendapatkan perspektif lebih luas, menara pandang di pulau ini adalah pilihan terbaik. Dari ketinggian, pengunjung bisa menyaksikan keseluruhan panorama Teluk Balikpapan yang bercahaya dalam nuansa senja'
      },

    {
      id: 2,
      judul: 'Pantai Manggar Segara Sari: Renovasi Fasilitas dan Upgrade Layanan',
      image: pantaiManggar,
      berita: 'Pantai Manggar Segara Sari, yang terletak di Kota Balikpapan, kini sedang menjalani renovasi fasilitas untuk meningkatkan kenyamanan dan kualitas pengalaman wisatawan. Upaya renovasi ini meliputi peningkatan fasilitas umum seperti toilet, tempat parkir, dan area untuk bersantai, serta pembaruan fasilitas untuk kegiatan olahraga air.',
      subjudul1: 'Upgrade Fasilitas untuk Kegiatan Olahraga Air',
      isisubjudul1: 'Selain renovasi fasilitas dasar, pantai ini juga meningkatkan sarana untuk kegiatan olahraga air. Pembaruan ini bertujuan untuk menarik lebih banyak pengunjung yang menyukai aktivitas seperti berenang dan bermain jet ski.',
      subjudul2: 'Meningkatkan Daya Tarik Wisata Pantai Manggar',
      isisubjudul2: 'Dengan adanya renovasi dan upgrade fasilitas, Pantai Manggar Segara Sari diharapkan menjadi destinasi yang lebih menarik dan mampu mendukung perkembangan pariwisata di Balikpapan.'
    }  
    ] ;

export default berita;