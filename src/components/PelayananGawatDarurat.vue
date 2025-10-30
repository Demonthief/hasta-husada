<script setup>

</script>
<template>
    <div class="igd-container container">
        <h1 class="target"  v-motion-slide-visible-once-right>Instalasi Gawat Darurat</h1>
        <div class="igd-gallery target"  v-motion-slide-visible-once-right>
            <img src="@/assets/img/pelayanan/igd2.JPG">
            <img src="@/assets/img/pelayanan/igd1.png">
            <img src="@/assets/img/pelayanan/igd3.JPG">
        </div>
        <div class="igd-content">
            <h3 class="target"  v-motion-slide-visible-once-right>Jam Pelayanan :</h3>
            <h4 class="jam-pelayanan target"  v-motion-slide-visible-once-right> Setiap hari 24 Jam</h4>
            <h3 class="target"  v-motion-slide-visible-once-right>Keterangan : </h3>
            <p class="igd-description target"  v-motion-slide-visible-once-right>Instalasi Gawat Darurat (IGD) RSKB Hasta Husada merupakan instalasi yang memberikan
                penanganan awal bagi pasien yang memerlukan tindakan segera untuk mengurangi risiko
                kecacatan/kematian bagi pasien. IGD juga merupakan bagian dari pelayanan rumah sakit yang
                memberikan pelayanan kepada masyarakat selama 24 24 jam setiap hari.
                Pelayanan gawat darurat dilaksanakan pada ruangan IGD, selain itu IGD RSKB Hasta
                Husada juga dilengkapi dengan Pelayanan Obstetri dan Neonatal Emergensi Komprehensif
                (PONEK). Di IGD terdapat 7 (tujuh tempat tidur dan 2 (dua) ruangan kohorting yang
                dikhususkan untuk pasien suspek Covid-19, masing-masing tempat tidur dilengkapi dengan
                tiang infus dan oksigen sentral. Instalasi ini dilengkapi dengan ruang tunggu pengantar pasien,
                pos security, lahan parkir IGD, dan pelayanan ambulance 24 jam.
            </p>
            <div class="jenis-pelayanan">
                <div class="content target"  v-motion-slide-visible-once-right>
                    <h3>Jenis Pelayanan IGD :</h3>
                    <ul>
                        <li>Pelayanan pasien dengan kegawatdaruratan</li>
                        <li>Pemeriksaan kesehatan oleh dokter umum</li>
                        <li>Konsultasi kesehatan</li>
                        <li>Visum et Repertum</li>
                    </ul>
                </div>
                <div class="content target"  v-motion-slide-visible-once-right>
                    <h3>Jenis Pelayanan PONEK :</h3>
                    <ul>
                        <li>Pelayanan pasien dengan kegawatdaruratan</li>
                        <li>Pemeriksaan kesehatan oleh Tim PONEK</li>
                        <li>Penanganan cepat dan tepat sesuai dengan indikasi</li>
                    </ul>
                </div>
            </div>
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