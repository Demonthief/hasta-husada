<script setup> 
    import aboutImage from './../assets/img/About.jpg'
    import sotk from './../assets/img/sotk.jpg'
    import { RouterLink, RouterView } from 'vue-router';
    
    const motos = [
        {
            "title" : "visi",
            "description" : "Menjadi Rumah Sakit Bedah Pilihan di Wilayah Malang Selatan dan Sekitarnya",
            "id" : 1,
        },
        {
            "title" : "misi",
            "description" : "Pelayanan, Pendidikan, dan Kesejahteraan",
            "id" : 2,
        },
        {
            "title" : "mutu",
            "description" : "5 S : “Salam, Sapa, Senyum, Sopan, Santun”",
            "id" : 3,
        },
        {
            "title" : "motto",
            "description" : "“Peduli Pasien dan Keluarga & Kerjasama Untuk Kesejahteraan Bersama”",
            "id" : 4,
        },
    ]
</script>

<template>
    <div class="about-container">
            <div class="container-fluid p-5">
                <div class="row target mb-5" v-motion-fade-visible>
                    <div class="col-5 about-image">
                        <img src="./../assets/img/Aryanicoba.jpg" alt="tentang kami" class="img-fluid">
                    </div>
                    <div class="col-7 about-content">
                        <h1 class="text-center">sambutan direktur</h1>
                        <p class="content"> 
                            Assalamu’alaikum Warahmatullahi Wabarakatuh <br/>
                            Puji Syukur kami ucapkan kepada Allah SWT.
                            karena atas Berkat dan Rahmat-Nya yang senantiasa
                            diberikan kepada kita semua, sehingga penyusunan
                            “Profill Rumah Sakit Khusus Bedah Hasta Husada Tahun
                            2022” ini dapat terselesaikan.
                            Profil ini diharapkan dapat memberikan informasi
                            dan gambaran secara umum tentang pelayanan
                            kesehatan di RSKB Hasta Husada Tahun 2022, yang
                            meliputi Gambaran Umum, Sejarah, Visi dan Misi,
                            Fasilitas Kesehatan, Sumber Daya Manusia, serta Hasil
                            Kegiatan Pelayanan Kesehatan yang telah dilaksanakan.
                            Informasi yang disampaikan diharapkan dapat
                            menjadi bahan acuan pengambilan keputusan dalam
                            rangka peningkatan pelayanan kesehatan di RSKB Hasta
                            Husada dan dapat bermanfaat bagi pihak-pihak yang
                            membutuhkan.
                            Kami sadari penyusunan profil ini belum sempurna, sehingga kritik dan saran kami harapkan
                            sebagai masukan demi kesempurnaan untuk masa mendatang. Akhir kata, kami sampaikan terima kasih
                            kepada semua pihak yang terlibat langsung maupun tidak langsung dalam penyelesaian profil ini. <br />
                            Wassalamu’alaikum Warahmatullahi Wabarakatuh
                        </p>
                    </div>
                </div>
                <div class="row taget" v-motion-fade-visible>
                    <div class="col-7 about-content">
                        <p class="content"> 
                            Rumah Sakit Khusus Bedah Hasta Husada dulunya didirikan sebagai klinik khusus bedah pada tanggal 11 Maret 2001 oleh <span>Alm. dr. Boedi Prijatno, Sp.B., FINACS., S.E., M.M.</span> Kemudian pada tahun 2007, Klinik Khusus Bedah Hasta Husada berubah menjadi Rumah Sakit Khusus Bedah Hasta Husada. RSKB Hasta Husada merupakan satu-satunya rumah sakit khusus bedah yang berada di Kabupaten Malang yang terletak di atas tanah seluas <span>3.619 m2</span> dengan bangunan yang didirikan dan digunakan untuk operasional pelayanan sampai saat ini seluas <span>1.800 m2</span>, berada di Malang Selatan dan mempunyai kapasitas 50 tempat tidur dengan tingkat hunian rata-rata 81,17% per tahun.  Pada tahun 2024 SDM Rumah Sakit Khusus Bedah Hasta Husada mencapai <span>270</span> SDM, terdiri dari <span>186</span> tenaga medis ( meliputi 153 perawat dan 33 dokter ) dan <span>84</span> tenaga non medis.
                        </p>
                    </div>
                    <div class="col-5 about-image">
                        <img :src="aboutImage" alt="tentang kami" class="img-fluid">
                    </div>
                </div>
                <div class="row history">
                    <h1 class="text-center milestone-title">Milestone</h1>
                    <div class="milestone-content target" v-motion-slide-visible-once-left>
                        <div class="milestone-year">2001</div>
                        <div class="milestone-description">
                            " Klinik Hasta Husada pertama kali didirikan pada tanggal 11 Maret 2001 oleh Alm. dr. Boedi Prijatno, Sp.B., FINACS., S.E., M.M."
                        </div>
                        <div class="milestone-line"></div>
                    </div>
                    <div class="milestone-content target" v-motion-slide-visible-once-right>
                        <div class="milestone-year">2004</div>
                        <div class="milestone-description">
                            "Klinik Hasta Husada berubah menjadi Rumah Sakit Khusus Bedah Hasta Husada."
                        </div>
                        <div class="milestone-line"></div>
                    </div>
                    <div class="milestone-content target" v-motion-slide-visible-once-left>
                        <div class="milestone-year">2012</div>
                        <div class="milestone-description">
                            "RSKB Hasta Husada memperoleh akreditasi penuh tingkat dasar oleh Tim Komite Akreditasi Rumah Sakit (KARS)"
                        </div>
                        <div class="milestone-line"></div>
                    </div>
                    <div class="milestone-content target" v-motion-slide-visible-once-right>
                        <div class="milestone-year">2019</div>
                        <div class="milestone-description">
                            "
                            RSKB Hasta Husada Lulus Utama Akreditasi dan mendapatkan gelar PARIPURNA oleh Tim Komite Akreditasi Rumah Sakit (KARS)"
                        </div>
                    </div>
                </div>
                <div class="row sotk">
                    <h3 class="sotk-title">Struktur organisasi</h3>
                    <img :src="sotk" class="target" v-motion-fade-visible>
                </div>

                <div class="row motto">
                    <div class="motto-container target" v-for="moto in motos" :key="moto.id" v-motion-slide-visible-once-right>
                        <h4 class="motto-title">{{ moto.title }}</h4>
                        <p class="motto-description">"{{ moto.description }}"</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
    .about-container{
        padding: 2rem;
        background: transparent;
    }
    .title h3{
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        color:#044e97;
        margin-bottom: 2rem;
    }
    /* .about-content{
        background-color: #044e97;
    } */
     .about-content h1{
        font-size: 32px;
        font-weight: 700;
        color: var(--first-color);
        margin-bottom: 1px;
        text-transform: uppercase;
     }
    .about-content p{
        display: inline-block;
        width: 100%;
        font-size: 16px; 
        padding: 3rem 2rem;  
        text-indent: 2em;
        text-align: justify;    
    }
    .about-content p span{
        font-weight: 700;
    }

    .about-image img{
        border-radius: 2rem;
        height: 400px;
    }
    .history{
        margin-top: 5rem;
    }
    .year-history {
        color: var(--first-color);
    }
    .year-history h1{
        text-transform: uppercase;
        font-weight: 800;
    }
    .history-content{
        padding: .5rem;
        position: relative;
        display: flex;
    }
    .history-content .line{
        display: block;
        position: absolute;
        height: 5px;
        background-color: var(--first-color);
        width: 100px;
        border-radius: 3px;
    }
    .history-content a{
        display: inline-block;
        text-decoration: none;
        font-size: 25px;
        font-weight: 700;
        color: var(--first-color);
    }
    /* .history-content a::before{
        content: "";
        display: block;
        position: absolute;
        height: 5px;
        width: 100px;
        background-color: var(--first-color);
    } */
    .description-history{
        position: relative;
        width: 513px;
        height: 244px;
        padding: 2rem;
        background: var(--gradient);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .description-history h4{
        font-size: 32px;
        font-weight: 700;
        color: var(--first-color);
    }
    .description-history p{
        font-weight: 25px;
        font-weight: 600;
        color: #fff;
    }
    .description-arrow a{
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        position: absolute;
        bottom: 5px; right: 30px;
    }
    .motto{
        display: flex;
        justify-content: center;
        margin-top: 4rem;
    }
    .motto-container{
        height: 200px;
        width: 450px;
        background-color: #6696C3;
        border-radius: 20px;
        padding: 20px;
        text-align: center;
    }
    .motto-container:first-child, .motto-container:last-child{
        background-color: var(--first-color);
    }
    .motto-title{
        text-transform: uppercase;
        font-size: 35px;
        font-weight: 800;
        color: #fff;
    }
    .motto-description{
        font-size: 12px;
        font-weight: 500;
        color: #fff;
        margin-top: 30px;
    }
    .milestone-title{
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        color: var(--first-color);
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
    .milestone-year{
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        color: var(--first-color);
    }
    .milestone-description{
        width: 500px;
        margin: 0 auto;
        text-align: center;
    }
    .milestone-line{
        display: block;
        width: 5px;
        background-color: var(--first-color);
        height: 200px;
        margin: 0 auto;
        border-radius: 5px;
    }

    .sotk{
        margin-top: 3rem;
    }
    .sotk-title{
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        color: var(--first-color);
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
</style>