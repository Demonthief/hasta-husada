<script setup>
    import { useRoute } from 'vue-router';
    import { news } from '@/data/warta'; 
    // import warta1Jumbo from "./../assets/img/warta1Jumbo.png"
    // import warta2Jumbo from "./../assets/img/warta2Jumbo.png"
    // import warta3Jumbo from "./../assets/img/warta3Jumbo.png"
    // import imgcontent1  from "./../assets/img/content1.png"
    // import imgcontent2  from "./../assets/img/content2.png"
    // import imgcontent3  from "@/assets/img/content3.png"


    // const news = [
    //             {
    //                 "imgJumbo" : warta1Jumbo,
    //                 "imgContent": imgcontent1,
    //                 "description1" :` Pada tanggal 28-31 Mei 2024, Rumah Sakit Khusus Bedah Hasta Husada bersama SMK Negeri 1 Kepanjen (KANESA). Pada Kegiatan ini dilakukannya Pemeriksaan kesehatan mencakup pemeriksaan tekanan darah dan nadi, berat badan, tinggi badan, tes buta warna dan pemeriksaan fisik untuk pengecekan tatto, tindik, piercing atau sebagainya.
    //                 `,
    //                 "description2":`Pemeriksaan ini melibatkan seluruh calon peserta didik baru yang melakukan pendaftaran di SMA atau SMK Negeri di wilayah kabupaten malang. Peserta yang melakukan pemeriksaan kesehatan ini mayoritas wilayah kabupaten malang bagian selatan. Dari seluruh peserta yang hadir selama 4 hari, terdapat sejumlah kurang lebih 900 peserta.`,
    //                 "date" : "28-31 April 2024",
    //                 "title" : "MCU di SMK Negeri 1 Kepanjen",
    //                 "id" : 1,
    //             },
    //             {
    //                 "imgJumbo" : warta2Jumbo,
    //                 "imgContent": imgcontent2,
    //                 "description1" : "  Untuk memeriahkan Hari Ulang Tahun yang Ke - 23 tahun, Rumah Sakit Khusus Bedah Hasta Husada menggelar Seminar Kesehatan, acara yang bertema “TATA LAKSANA PASIEN DIABETES MELLITUS PADA ANAK BESERTA PENGGUNAAN INSULINNYA” ini membahas tentang diabetes pada anak  dengan pemateri oleh Dokter Spesialis Anak dan Dokter Spesialis Penyakit Dalam.",
    //                 "description2": "Bertempat di Hall Hotel Grand Kanjuruhan dan dihadiri oleh peserta dari fasilitas kesehatan tingkat pertama, dokter praktik mandiri, dll. Seminar ini juga diakan secara online melalui zoom meeting.",
    //                 "title" : "Seminar Kesehatan HUT RSKB Hasta Husada",
    //                 "id" : 2,
    //             },
    //             {
    //                 "imgJumbo" : warta3Jumbo,
    //                 "imgContent": imgcontent3,
    //                 "description1" : "    Untuk memeriahkan HUT RSKB HASTA HUSADA yang ke - 23 Tahun, Pada tanggal 2 Maret 2024 diadakan kegiatan Jalan Sehat dan Bazzar. Kegiatan ini diikuti oleh semua elemen yang ada di Rumah Sakit Khusus Bedah Hasta Husada.",
    //                 "description2": "Untuk memeriahkan HUT RSKB HASTA HUSADA yang ke - 23 Tahun, Pada tanggal 2 Maret 2024 diadakan kegiatan Jalan Sehat dan Bazzar. Kegiatan ini diikuti oleh semua elemen yang ada di Rumah Sakit Khusus Bedah Hasta Husada.",
    //                 "date" : "2 Maret 2024",
    //                 "title" : "Jalan Sehat dalam rangka HUT RSKB Hasta Husada",
    //                 "id" : 3,
    //             },
    // ]
    // const {title} = news;



    const route = useRoute()

    const wartaId = parseInt(route.params.id);
    const warta = news.find((w) => w.id === wartaId)

    console.log(warta)
    

</script>
<template>
    <div class="jumbotron">
        <img :src="warta.imgJumbo">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h1 class="heading-title">warta hasta</h1>
                <h3 class="warta-title">{{ warta.title }}</h3>
                <span class="warta-line"></span>
                <p class="description">{{ warta.description1 }}</p>
                <p class="description">{{ warta.description2 }}</p>
            </div>
            <div class="col warta-image">
                <img :src="warta.imgContent">
            </div>
        </div>
    </div>    
</template>

<style scoped>
     .jumbotron{
        padding-top: 4rem;
        position: relative;
        /* background-image: url('/src/assets/img/bgbody.jpg'); */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 500px;
        margin-bottom: 3rem;
    }
    .jumbotron img{
        width: 100%;
        height: 100%;
    }
    .heading-title{
        text-transform: uppercase;
        font-size: 55px;
        font-weight: 600;
        font-style: italic;
        color: var(--first-color);
    }
    .warta-title{
        font-size: 32px;
        font-weight: 500;
        font-style: italic;
        color: var(--first-color);
        text-transform: capitalize;
    }
    .warta-line{
        display: block;
        width: 100px;
        background-color: var(--first-color);
        height: 2px;
        margin: 2rem 0;
    }
    .description{
        font-size: 20px;
        text-align: justify;
        text-indent: 2em;
    }
    .container{
        margin-bottom: 2rem;
    }
    .warta-image img{
        border-radius: 10px;
    }
    .warta-image{
        padding: 1rem;
    }
</style>