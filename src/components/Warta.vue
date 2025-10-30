<script setup>
    import warta1 from "./../assets/img/warta1.jpg"
    import warta2 from "./../assets/img/warta2.jpg"
    import warta3 from "./../assets/img/warta3.jpg"
    import { RouterLink } from "vue-router";
    const news = [
                {
                    "img" : warta1,
                    "description" : "RSKB Hasta Husada dulunya didirikan sebagaiKlinik Khusus Bedah pada tanggal 11 Maret 2001 oleh Alm. dr. Boedi Prijatno, Sp.B., FINACS.,SE.,M.M Kemudian pada tahun 2007, Klinik Khusus Bedah Hasta Husada berubah menjadi Rumah Sakit Khusus Bedah Hasta Husada.",
                    "date" : "28-31 April 2024",
                    "title" : "MCU di SMK Negeri 1 Kepanjen",
                    "id" : 1,
                },
                {
                    "img" : warta2,
                    "description" : "RSKB Hasta Husada dulunya didirikan sebagaiKlinik Khusus Bedah pada tanggal 11 Maret 2001 oleh Alm. dr. Boedi Prijatno, Sp.B., FINACS.,SE.,M.M Kemudian pada tahun 2007, Klinik Khusus Bedah Hasta Husada berubah menjadi Rumah Sakit Khusus Bedah Hasta Husada.",
                    "date" : "9 Maret 2024",
                    "title" : "Seminar Kesehatan HUT RSKB Hasta Husada",
                    "id" : 2,
                },
                {
                    "img" : warta3,
                    "description" : "RSKB Hasta Husada dulunya didirikan sebagaiKlinik Khusus Bedah pada tanggal 11 Maret 2001 oleh Alm. dr. Boedi Prijatno, Sp.B., FINACS.,SE.,M.M Kemudian pada tahun 2007, Klinik Khusus Bedah Hasta Husada berubah menjadi Rumah Sakit Khusus Bedah Hasta Husada.",
                    "date" : "2 Maret 2024",
                    "title" : "Jalan Sehat HUT RSKB Hasta Husada",
                    "id" : 3,
                },
    ]
</script>

<template>
    <div class="warta-container d-flex justify-content-center">
        <router-link to="/warta" class="title">Warta Hasta</router-link>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 target" v-for="berita in news" :key="berita.id" v-motion-slide-visible-once-right>
                    <div class="warta-image">
                        <img :src="berita.img">
                    </div>
                    <div class="warta-content">
                        <div class="warta-title">
                            <h3> <router-link :to="`/wartaDetail/${berita.id}`" class="text-link">{{ berita.title }}</router-link></h3>
                        </div>
                        <div class="warta-date">
                            <p>{{ berita.date }}</p>
                        </div>
                        <div class="warta-description">
                            <p>{{ berita.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<style scoped>
    .warta-container{
        flex-direction: column;
        gap: 2rem;
    }
    .title{
        text-align: center;
        text-decoration: none;
        color: var(--first-color);
        font-size: 30px;
        font-weight: 600;
        
    }
    .warta-image img{
        width: 90%;
        height: 208px;
        border-radius: 1rem;
    }
    .warta-content{
        padding: 1rem 0;
    }
    .warta-title,.warta-date{
        padding: 0 1rem;
    }
    .warta-title .text-link{
        font-size: 1.15rem;
        color: #044e97;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        /* margin: 1rem .75rem; */
    }
    .warta-date p{
        font-size: .95rem;
        font-weight: 500;
        color: rgb(128, 128, 128);
    }
    .warta-description p{
        text-indent: 2em;
        text-align: justify;
        font-size: .95rem;
    }
</style>