import aryani from '../assets/img/dokter/aryani.png'
import charunnisa from '../assets/img/dokter/chairunnisa.png'
import mujiyono from '../assets/img/dokter/mujiyono.png'
import anica from '../assets/img/dokter/anica.png'
import fahmy from '../assets/img/dokter/fahmy.png'
import andika from '../assets/img/dokter/andika.png'
import ersty from '../assets/img/dokter/ersty.png'
import vivid from '../assets/img/dokter/vivid.png'
import dian from '../assets/img/dokter/dian.png'
import toto from '../assets/img/dokter/toto.png'
import berti from '../assets/img/dokter/berti.png'
import eko from '../assets/img/dokter/eko.png'
import anni from '../assets/img/dokter/anni.png'
import auliafahmi from '../assets/img/dokter/auliafahmi.png'
import benny from '../assets/img/dokter/benny.png'
import deddy from '../assets/img/dokter/deddy.png'
import diyah from '../assets/img/dokter/diyah.png'
import faradiba from '../assets/img/dokter/faradiba.png'
import joni from '../assets/img/dokter/joni.png'
import mirza from '../assets/img/dokter/mirza.png'
import nurrohman from '../assets/img/dokter/nurrohman.png'
import rhomdon from '../assets/img/dokter/rhomdon.png'
import rizal from '../assets/img/dokter/rizal.png'
import rizky from '../assets/img/dokter/rizky.png'
import widi from '../assets/img/dokter/widi.png'
import yoga from '../assets/img/dokter/yoga.png'
 
export const dokters = [
    {
        "spesialis" : "dokter spesialis mata",
        "dokter" :[
            {
                "nama" : "dr. Aryani Vindhya P., Sp.M",
                "spesialis" : "spesialis mata",
                "jadwal" : `Senin - Selasa  : 16.00-18.00
                            Rabu - Kamis    : 19.00-21.00
                            Sabtu           : 09.00-11.00
                            `,
                "img"   : aryani,
                "id"    : 1,
            },
            {
                "nama" : "dr. Choirunisa Ferdiana, Sp.M",
                "spesialis" : "spesialis mata",
                "jadwal" : `Senin,Rabu, Jumat : 16.00-18.00`,
                "img" : charunnisa,
                "id" : 2
            },
        ],
        "id" : 1
    },
    {
        "spesialis" : "dokter spesialis ortopedi",
        "dokter" : [
            {
                "nama" : "dr. Mujiyono, Sp.OT",
                "spesialis" : "spesialis ortopedi",
                "jadwal" : `senin,rabu,jumat : 19.00-21.00
                            sabtu : 08.00-10.00
                            `,
                "img" : mujiyono,
                "id" : 1 
            }
        ],
        "id" : 2
    },
    {
        "spesialis" : "dokter spesialis Bedah",
        "dokter" : [
            {
                "nama" : "dr. Deddy Setyo N, Sp.B",
                "spesialis" : "spesialis Bedah",
                "jadwal" : `senin - selasa : 15.00-17.00
                            jumat : 16.00-18.00
                            `,
                "img" : deddy,
                "id" : 1 
            }
        ],
        "id" : 16
    },
    {
        "spesialis" : "dokter spesialis Urologi",
        "dokter" : [
            {
                "nama" : "dr. Andrie Rhomdon, Sp.U",
                "spesialis" : "spesialis urologi",
                "jadwal" : `selasa - kamis : 14.00-16.00
                            rabu : 16.00-17.00
                            `,
                "img" : rhomdon,
                "id" : 1 
            }
        ],
        "id" : 17
    },
    {
        "spesialis" : "dokter spesialis syaraf",
        "dokter" :[
            {
                "nama" : "dr. Anica Hadi, Sp.S",
                "spesialis" : "spesialis Syaraf",
                "jadwal" : `
                    Senin-Jumat : 07.30-09.30
                    Sabtu : 08.00-10.00                
                `,
                "img" : anica,
                "id" : 1
            }
        ],
        "id" : 3
    },
    {
        "spesialis" : "dokter spesialis jantung",
        "dokter" : [
            {
                "nama": "dr. Fahmi rusnanta, Sp.JP",
                "spesialis" : "spesialis jantung",
                "jadwal" : `rabu,jumat : 14.00-16.00
                            sabtu      : 08.00-10.00
                `,
                "img" : fahmy,
                "id" : 1
            }
        ],
        "id": 4
    },
    // {
    //     "spesialis" : "dokter spesialis bedah anak",
    //     "dokter" : [
    //         {
    //             "nama": "dr. Andika Purba S., Sp.BA",
    //             "spesialis" : "spesialis Bedah Anak",
    //             "jadwal" : "senin,rabu,jumat : 14.00-16.00",
    //             "img" : andika,
    //             "id" : 1
    //         }
    //     ],
    //     "id": 5
    // },
    {
        "spesialis" : "dokter spesialis tht",
        "dokter" : [
            {
                "nama": "dr. Ersty Istyawati, Sp.THT-KL",
                "spesialis" : "spesialis THT-KL",
                "jadwal" : `selasa : 11.00-13.00
                            sabtu : 09.00-11.00`,
                "img" : ersty,
                "id" : 1
            }
        ],
        "id": 6
    },
    {
        "spesialis" : "dokter spesialis rehab medik",
        "dokter" : [
            {
                "nama": "dr. Vivid Prety, Sp.KFR",
                "spesialis" : "spesialis rehab medik",
                "jadwal" : `selasa,rabu,kamis : 13.30-15.30 `,
                "img" : vivid,
                "id" : 1
            }
        ],
        "id": 7
    },
    {
        "spesialis" : "dokter spesialis pat.anatomi",
        "dokter" : [
            {
                "nama": "dr. Dian Yuliartha L., Sp.PA",
                "spesialis" : "spesialis Patologi Anatomi",
                "jadwal" : `selasa,Jumat : 09.00-11.00 `,
                "img" : dian,
                "id" : 1
            }
        ],
        "id": 8
    },
    {
        "spesialis" : "dokter spesialis pat.klinik",
        "dokter" : [
            {
                "nama": "dr. Midsari Toto W., Sp.PK",
                "spesialis" : "spesialis Patologi Klinik",
                "jadwal" : `senin,kamis : 12.30-14.30 `,
                "img" : toto,
                "id" : 1
            }
        ],
        "id": 9
    },
    {
        "spesialis" : "dokter spesialis radiologi",
        "dokter" : [
            {
                "nama": "dr. Bertiana Prisca H., Sp.Rad",
                "spesialis" : "spesialis Radiologi",
                "jadwal" : `senin-sabtu : 09.00-12.00 `,
                "img" : berti,
                "id" : 1
            },
            {
                "nama": "dr. Eko Ardianto M., Sp.Rad",
                "spesialis" : "spesialis Radiologi",
                "jadwal" : `senin-sabtu : 16.00-19.00 `,
                "img" : eko,
                "id" : 2
            }
        ],
        "id": 10
    },
    {
        "spesialis" : "dokter spesialis anak",
        "dokter" : [
            {
                "nama": "dr. Indra Yoga M., Sp.A,M.kes",
                "spesialis" : "spesialis Anak",
                "jadwal" : `senin-sabtu : 09.00-12.00 `,
                "img" : yoga,
                "id" : 1
            },
        ],
        "id": 11
    },
    {
        "spesialis" : "dokter spesialis penyakit dalam",
        "dokter" : [
            {
                "nama": "dr. Diyah Saraswati, Sp.PD",
                "spesialis" : "spesialis penyakit Dalam",
                "jadwal" : `senin,selasa,kamis : 13.00-15.00 `,
                "img" : diyah,
                "id" : 1
            },
            {
                "nama": "dr. Mirza Zaka Pratama, Sp.PD",
                "spesialis" : "spesialis penyakit Dalam",
                "jadwal" : `senin,selasa,kamis : 13.00-15.00 `,
                "img" : mirza,
                "id" : 2
            },
        ],
        "id": 12
    },
    {
        "spesialis" : "dokter spesialis kulit",
        "dokter" : [
            {
                "nama": "dr. Rizky Rahmadi H., Sp.DVE",
                "spesialis" : "spesialis Kulit",
                "jadwal" : `senin - kamis : 09.00-12.00 
                            jumat : 09.00-11.00
                `,
                "img" : rizky,
                "id" : 1
            },
        ],
        "id": 13
    },
    {
        "spesialis" : "dokter spesialis obgyn",
        "dokter" : [
            {
                "nama": "dr. Widi Hatmaka, Sp.OG",
                "spesialis" : "spesialis obgyn",
                "jadwal" : `senin - sabtu : 14.00-16.00 `,
                "img" : widi,
                "id" : 1
            },
        ],
        "id": 14
    },
    {
        "spesialis" : "dokter spesialis anastesi",
        "dokter" : [
            {
                "nama": "dr. Joni Budi Satriyo, Sp.An",
                "spesialis" : "spesialis anastesi",
                "jadwal" : ` `,
                "img" : joni,
                "id" : 1
            },
            {
                "nama": "dr. M. Aulia Arifahmi",
                "spesialis" : "spesialis anastesi",
                "jadwal" : ` `,
                "img" : auliafahmi,
                "id" : 1
            },
        ],
        "id": 15
    },
    {
        "spesialis" : "dokter umum ",
        "dokter" : [
            {
                "nama": "dr. Faradiba Noviandini",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : faradiba,
                "id" : 1
            },
            {
                "nama": "dr. M. Beny Hariyanto",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : benny,
                "id" : 2
            },
            {
                "nama": "dr. Anni Sufiya Amalina",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : anni,
                "id" : 3
            },
            {
                "nama": "dr. Nur Rohman",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : nurrohman,
                "id" : 4
            },
            {
                "nama": "dr. M. Rizal Azhari",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : rizal,
                "id" : 5
            },
            {
                "nama": "dr. Adiz Dwiputra R. A.",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : benny,
                "id" : 6
            },
            {
                "nama": "dr. Ghevara Anisya R.",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : benny,
                "id" : 7
            },
            {
                "nama": "dr. Gita Kusuma Wardani",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : benny,
                "id" : 8
            },
            {
                "nama": "dr. Nadya Wahyuning Murni",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : benny,
                "id" : 9
            },
            {
                "nama": "dr. Nadya Setya Putri",
                "spesialis" : "umum",
                "jadwal" : ` `,
                "img" : benny,
                "id" : 10
            },
        ],
        "id": 15
    },
    
]