<script setup>

</script>
<template>
    <div class="igd-container container">
        <h1 class="target"  v-motion-slide-visible-once-right>Instalasi Farmasi</h1>
        <div class="igd-gallery target"  v-motion-slide-visible-once-right>
            <!-- <img src="./../assets/img/pelayanan/farmasi1.JPG"> -->
            <!-- <img src="./../assets/img/pelayanan/farmasi2.png"> -->
            <!-- <img src="./../assets/img/pelayanan/farmasi3.JPG"> -->
        </div>
        <div class="igd-content">
            <h3 class="target"  v-motion-slide-visible-once-right>Jam Pelayanan :</h3>
            <h4 class="jam-pelayanan target"  v-motion-slide-visible-once-right> Setiap Hari 24 Jam</h4>
            <h3 class="target"  v-motion-slide-visible-once-right>Keterangan : </h3>
            <p class="igd-description target"  v-motion-slide-visible-once-right>
                Instalasi Farmasi adalah suatu instalasi di rumah sakit yang merupakan fasilitas 
                penyelenggaraan kefarmasian di bawah pimpinan seorang Apoteker dan memenuhi 
                persyaratan secara hokum untuk mengadakan, menyediakan, dna mengelola seluruh apotek 
                penyediaan perbekalan kesehatan di rumah sakit.
            </p>
            <p class="igd-description target"  v-motion-slide-visible-once-right>
                Instalasi Farmasi RSKB Hasta Husada melayani pasien setiap hari selama 24 jam, 
                dikepalai oleh seorang Apoteker yang sudah berpengalaman. Layanan yang diberikan berupa 
                pelayanan obat untuk pasien rawat jalan, pasien rawat inap, dan pasien IGD, serta pelayanan 
                pemberian informasi obat dan tatacara penggunaannya kepada pasien dan keluarga pasien. 
            </p>
        </div>
    </div>
</template>

<style scoped>
    .igd-container h1   {
        font-size: 42px;
        font-weight: 600;
        color: var(--first-color);
        margin: 2rem 0;
        text-transform: uppercase;
    }
    .igd-gallery{
        display: flex;
        gap: 1.5rem;
        margin: 4rem 0;
    }
    .igd-gallery img{
        width: 300px;
    }
    .igd-container h3{
        font-size: 32px;
        font-weight: 600;
        color: var(--first-color); 
        text-transform: uppercase;
    }
    .jam-pelayanan{
        font-size: 28px !important;
        font-weight: 700;
        text-transform: capitalize;
        color: var(--first-color);
        margin: 2rem 1rem;
    }
    .igd-description{
        font-size: 17px;
        font-weight: 500;
        text-indent: 2em;
        margin-top: 1rem;
    }
    .jenis-pelayanan{
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .jenis-pelayanan .content h3{
        font-size: 24px;
    }
    .jenis-pelayanan .content ul{
        margin-top:2rem ;
    }
    .jenis-pelayanan .content ul li{
        list-style: disc;
        margin-bottom: 10px;
        color: var(--first-color);
        font-weight: 600;
    }
</style>