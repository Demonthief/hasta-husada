<script setup>

</script>
<template>
    <div class="igd-container container">
        <h1 class="target"  v-motion-slide-visible-once-right>Ruang Rawat Inap</h1>
        <div class="igd-gallery target"  v-motion-slide-visible-once-right>
            <!-- <img src="@/assets/img/pelayanan/garudavip1.jpg">
            <img src="@/assets/img/pelayanan/garudakelas2.jpg">
            <img src="@/assets/img/pelayanan/ICU.jpg"> -->
        </div>
        <div class="igd-content">
            <h3 class="target"  v-motion-slide-visible-once-right>Jam Pelayanan :</h3>
            <h4 class="jam-pelayanan target"  v-motion-slide-visible-once-right> Setiap hari 24 Jam</h4>
            <h3 class="target"  v-motion-slide-visible-once-right>Keterangan : </h3>
            <p class="igd-description target"  v-motion-slide-visible-once-right>
                Dalam menghadapi pandemi Covid-19, pemberian layanan perlu kembali dijalankan 
                dengan cara yang aman, di mana risiko penularan tetap dimitigasi berdasarkan pada adptasi 
                yang sudah dimulai dalam konteks new normal.
                Upaya penanggulangan dan pengendalian penularan Covid-19 terus diupayakan, di 
                antaranya tidak diberlakukannya jam besuk bagi pasien rawat inap dan penjaga pasien hanya 
                diperbolehkan satu orang, serta diwajibkan menggunakan masker setiap saat selama berada di 
                wilaha RSKB Hasta Husada.
                Pelayanan rawat inap dilakukan pada 4 (empat) ruang perawatan, yaitu Garuda, 
                Rajawali, Camar, dan Kasuari. Di dalamnya masing-masing terdapat ruangan VIP, Kelas I, Kelas 
                II, dan Kelas III. Khusus untuk Ruang Perawatan Kasuari di sana merupakan ruang perawatan 
                khusus ibu dan anak. Selain itu, RSKB Hasta Husada juga dilengkapi dengan fasilitas perawatan 
                Perinatologi.
            </p>
            <div class="jenis-pelayanan">
                <div class="content target"  v-motion-slide-visible-once-right>
                    <h3>Jenis Pelayanan Rawat Inap :</h3>
                    <ul>
                        <div class="content-wrapper">
                            <li class="pelayanan-title target" v-motion-slide-visible-once-right>Perawatan VIP</li>
                            <div class="vip-content">
                                <img src="../assets/img/pelayanan/garudavip1.jpg" class="content-img target" v-motion-slide-visible-once-right>
                                <p class="content-description target" v-motion-slide-visible-once-right>
                                    Ruang Perawatan VIP di RSKB Hasta Husada tersedia sebanyak 3 (tiga) ruang VIP, 
                                    fasilitas yang tersedia berupa 1 (satu) tempat tidur untuk pasien, 1 (satu) selimut pasien, 1 
                                    (satu) bantal pasien, oksigen sentral, tiang infus, 1 (satu) tempat tidur/sofa untuk penjaga 
                                    pasien, AC, televisi, kulkas, meja kecil, lemari kecil, dan kamar mandi dengan water heater, 
                                    serta disediakan alat mandi.
                                </p>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <li class="pelayanan-title target" v-motion-slide-visible-once-right>Perawatan Kelas I</li>
                            <div class="vip-content">
                                <p class="content-description target" v-motion-slide-visible-once-right>
                                    Ruang Perawatan Kelas I di RSKB Hasta Husada dalam setiap ruangan terdapat 
                                    fasilitas 1 (satu) buah tempat tidur untuk pasien, 1 (satu) bantal pasien, oksigen sentral, 
                                    tiang infus, kipas angin, meja kecil, dan fasilitas kamar mandi
                                </p>
                                <!-- <img src="../assets/img/pelayanan/ranapkelas1.JPG" class="content-img target" v-motion-slide-visible-once-right> -->
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <li class="pelayanan-title target" v-motion-slide-visible-once-right>Perawatan Kelas II</li>
                            <div class="vip-content">
                                <!-- <img src="../assets/img/pelayanan/garudakelas2.JPG" class="content-img target" v-motion-slide-visible-once-right> -->
                                <p class="content-description target" v-motion-slide-visible-once-right>
                                    Ruang Perawatan kelas II di RSKB Hasta Husada dalam setiap ruangan terdapat 
                                    fasilitas 2 (dua) buah tempat tidur untuk pasien, kipas angin, masing-masing tempat tidur 
                                    terdapat 1 (satu) bantal pasien, oksigen sentral, tiang infus, meja kecil, dan fasilitas kamar 
                                    mandi bersama
                                </p>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <li class="pelayanan-title target" v-motion-slide-visible-once-right>Perawatan Kelas III</li>
                            <div class="vip-content">
                                <p class="content-description target" v-motion-slide-visible-once-right>
                                    Ruang Perawatan Kelas III di RSKB Hasta Husada dalam setiap ruangan terdapat 
                                    fasilitas 7 (tujuh) buah tempat tidur untuk pasien, kipas angin, masing-masing tempat tidur 
                                    terdapat 1 (satu) bantal pasien, oksigen sentral, tiang infus, meja kecil, dan fasilitas kamar 
                                    mandi bersama
                                </p>
                                <img src="../assets/img/pelayanan/ranapkelas3.jpg" class="content-img target" v-motion-slide-visible-once-right>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <li class="pelayanan-title target" v-motion-slide-visible-once-right>Instalasi Kamar Bersalin</li>
                            <div class="vip-content">
                                <img src="../assets/img/pelayanan/RUANG BERSALIN edit.jpg" class="content-img target" v-motion-slide-visible-once-right>
                                <p class="content-description target" v-motion-slide-visible-once-right>
                                    Proses persalinan yang baik adalah harapan dari setiap ibu yang ingin melahirkan buah 
                                    hati tercinta. Persalinan di RSKB Hasta Husada sangat didukung oleh tenaga medis yang ahli, 
                                    fasilitas, dan ruangan yang memadai untuk menunjang pelayanan proses persalinan tersebut.
                                    RSKB Hasta Husada juga memiliki fasilitas kamar bersalin yang nyaman untuk pasien yang akan 
                                    melahirkan, terdiri dari 4 (empat) tempat tidur.
                                </p>
                            </div>
                        </div>
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

    .vip-content{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 1rem;
        padding: 1rem;
    }
    .content-img{
        width: 300px;
    }
    .content-description{
        width: 700px;
        font-size: 1.125rem;
        font-weight: 400;
        text-align: justify;
    }
    .pelayanan-title{
        font-size: 1.5rem;
    }
    .content-wrapper{
        margin-bottom: 2rem;
    }
</style>