<script setup>

</script>
<template>
    <div class="igd-container container">
        <h1 class="target"  v-motion-slide-visible-once-right>Instalasi Rehab Medik</h1>
        <div class="igd-gallery target"  v-motion-slide-visible-once-right>
            <img src="./../assets/img/pelayanan/rehab1.png">
            <!-- <img src="./../assets/img/pelayanan/igd1.png"> -->
            <!-- <img src="./../assets/img/pelayanan/igd3.JPG"> -->
        </div>
        <div class="igd-content">
            <h3 class="target"  v-motion-slide-visible-once-right>Jam Pelayanan :</h3>
            <h4 class="jam-pelayanan target"  v-motion-slide-visible-once-right> Senin-Sabtu : 07.00-16.00</h4>
            <!-- <h3 class="target"  v-motion-slide-visible-once-right>Keterangan : </h3> -->
            <div class="content-description">
                <img src="../assets/img/dokter/vivid.png" class="content-img">
                <p class="igd-description target"  v-motion-slide-visible-once-right>
                Instalasi Rehabilitasi Medik merupakan suatu instalasi yang memberikan pelayanan 
                rehabilitasi medik, yaitu pelayanan kesehatan terhadap gangguan, baik yang bersifat fisik 
                maupun fungsi akibat dari penyakit, kondisi akibat penyakit, atau trauma melalui intervensi 
                media, modalitas, dan/atau terapi fisik sebagai bagian dari upaya rehabilitatif untuk mencapai 
                kemampuan fungsi yang optimal dan/atau kemandirian.
                </p>
            </div>
            <div class="jenis-pelayanan">
                <div class="content target"  v-motion-slide-visible-once-right>
                    <h3>Kondisi yang dapat ditangani di Rehabilitasi Medik RSKB Hasta Husada adalah :</h3>
                    <ul>
                        <li> Gangguan muskuloskeletal : nyeri punggung bawah, osteoarthritis, nyeri leher, 
                            kekakuan sendi</li>
                        <li> Pasca stroke</li>
                        <li>Program latihan pasca deconditioning, tirah baring lama, pasien gangguan jantung</li>
                        <li> Pasca fraktur</li>
                        <li> Gangguan saraf : carpal tunnel syndrome, bell’s palsy, dan lain-lain</li>
                        <li>Kelemahan anggota gerak</li>
                    </ul>
                </div>
                <div class="content target"  v-motion-slide-visible-once-right>
                    <h3>Pelayanan Rehabilitasi Medik di RSKB Hasta Huasa ditunjang oleh tim yang ramah dan 
                        professional, di antaranya :</h3>
                    <ul>
                        <li> Dokter Spesialis Kedokteran Fisik dan Rehabilitasi</li>
                        <li> Fisioterapi</li>
                        <li> Perawat</li>
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

    .content-description{
        display: flex;
        gap: 2rem;
    }
    .content-description img{
        height: 400px;
        width: 350px;

    }
</style>