<script setup>
    import pelayanan1 from '@/assets/img/pelayanan/rehab1.png';
    import pelayanan2 from '@/assets/img/pelayanan/ICU.png';
    import pelayanan3 from '@/assets/img/pelayanan/UGD.png';
    const pelayanans = [
        {
            id : 1,
            imgs : [pelayanan1,pelayanan2,pelayanan3],
            jamPelayanan : '24 Jam',
            description : `Instalasi Gawat Darurat (IGD) RSKB Hasta Husada merupakan instalasi yang memberikan
                penanganan awal bagi pasien yang memerlukan tindakan segera untuk mengurangi risiko
                kecacatan/kematian bagi pasien. IGD juga merupakan bagian dari pelayanan rumah sakit yang
                memberikan pelayanan kepada masyarakat selama 24 24 jam setiap hari.
                Pelayanan gawat darurat dilaksanakan pada ruangan IGD, selain itu IGD RSKB Hasta
                Husada juga dilengkapi dengan Pelayanan Obstetri dan Neonatal Emergensi Komprehensif
                (PONEK). Di IGD terdapat 7 (tujuh tempat tidur dan 2 (dua) ruangan kohorting yang
                dikhususkan untuk pasien suspek Covid-19, masing-masing tempat tidur dilengkapi dengan
                tiang infus dan oksigen sentral. Instalasi ini dilengkapi dengan ruang tunggu pengantar pasien,
                pos security, lahan parkir IGD, dan pelayanan ambulance 24 jam.`,
            jenisPelayanan : ['Pelayanan pasien dengan kegawatdaruratan', 'Pemeriksaan kesehatan oleh dokter umum', 'Konsultasi kesehatan', "Visum et Repertum"],
        },
        ];
</script>

<template>
    <section class="pelayanan mt-5">
        <div class="container">
            <div class="pelayanan-content" v-for="pelayanan in pelayanans" :key="pelayanan.id">
                <div class="row">
                <div class="col-md-6">
                    <div class="pelayanan-title">
                        <h1>Instalasi Gawat Darurat</h1>
                    </div>
                    <div class="pelayanan-gallery d-flex gap-2 mt-5 mb-5">
                        <img :src="`${img}`" v-for="(img,i) in pelayanan.imgs" :key="i">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3>Jam Pelyanan :</h3>
                    <h3>{{ pelayanan.jamPelayanan }}</h3>
                    <p class="deskripsi-pelayanan">{{ pelayanan.description }}</p>
                </div>
            </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
    .pelayanan-gallery img{
        width: 400px;
    }
</style>