<script setup>
    import aboutImage from './../assets/img/About.jpg'
</script>

<template>
    <div class="about-container">
        <div class="container-fluid p-5">
            <div class="row">
                <div class="col-7 about-content target" v-motion-slide-visible-once-right>
                    <div class="title my-2"><h3>Tentang Kami</h3></div>
                    <p class="content"> 
                        <span class="p1">RSKB Hasta Husada dulunya didirikan sebagai
                                    Klinik Khusus Bedah pada tanggal 11 Maret 2001 oleh
                                    Alm. dr. Boedi Prijatno, Sp.B., FINACS.,SE.,M.M

                                    Kemudian pada tahun 2007, Klinik Khusus
                                    Bedah Hasta Husada berubah menjadi
                                    Rumah Sakit Khusus Bedah Hasta Husada.
                        </span>
                        <span class="p2">
                            Saat ini Rumah Sakit Khusus Bedah Hasta Husada menyediakan 17 layanan poliklinik dan 5 layanan penunjang medik
                        </span>
                    </p>
                </div>
                <div class="col-5 about-image target" v-motion-slide-visible-once-right>
                    <img :src="aboutImage" alt="tentang kami" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-container{
        margin-top: 11rem ;
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
    .about-content p{
        font-size: 18px; 
        padding: 0 2rem;      
    }
    .about-content p .p1{
        display: inline-block;
        text-indent: 2em;
        margin-bottom: 1rem;
    }
    .about-content p .p2{
        display: inline-block;
        text-indent: 2em;
    }
    .about-image img{
        border-radius: 2rem;
        height: 400px;
    }
</style>