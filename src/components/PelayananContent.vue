<script setup>
    import pelayanan1 from './../assets/img/pelayanan1.png'
    import pelayanan2 from './../assets/img/pelayanan2.png'
    import pelayanan3 from './../assets/img/pelayanan3.png'
    import pelayanan4 from './../assets/img/pelayanan4.png'
    import pelayanan5 from './../assets/img/pelayanan5.png'
    import pelayanan6 from './../assets/img/pelayanan6.png'
    import pelayanan7 from './../assets/img/pelayanan7.png'
    import pelayanan8 from './../assets/img/pelayanan8.png'
    import pelayanan9 from './../assets/img/pelayanan9.png'
    import pelayanan10 from './../assets/img/pelayanan10.png'
    import pelayanan11 from './../assets/img/pelayanan11.png'
    import pelayanan12 from './../assets/img/pelayanan12.png'
    
    const fotoPelayanan = [
        {
            "img" : pelayanan1,
            "nama" : "Pendaftaran",
            "id" : 1
        },
        {
            "img" : pelayanan2,
            "nama" : "informasi",
            "id" : 2
        },
        {
            "img" : pelayanan3,
            "nama" : "ICU",
            "id" : 3
        },
        {
            "img" : pelayanan4,
            "nama" : "Rawat Jalan",
            "id" : 4
        },
        {
            "img" : pelayanan5,
            "nama" : "Laboratorium",
            "id" : 5
        },
        {
            "img" : pelayanan6,
            "nama" : "Rehab Medik",
            "id" : 6
        },
        {
            "img" : pelayanan7,
            "nama" : "Radiologi",
            "id" : 7
        },
        {
            "img" : pelayanan8,
            "nama" : "Ambulance",
            "id" : 8
        },
        {
            "img" : pelayanan9,
            "nama" : "IGD 24 jam",
            "id" : 9
        },
        {
            "img" : pelayanan10,
            "nama" : "Rawat Inap",
            "id" : 10
        },
        {
            "img" : pelayanan11,
            "nama" : "Farmasi",
            "id" : 11
        },
        {
            "img" : pelayanan12,
            "nama" : "Ruang Bayi",
            "id" : 12   
        },
    ]
</script>
<template>
    <div class="pelayanan-container">
        <div class="container">
            <div class="row">
                <div class="col list-pelayanan">
                    <h3>Pelayanan Poliklinik</h3>
                    <div class="content">
                        <ul>
                        <li><a href="/pelayanan/obgyn">Klinik Obgyn</a></li>
                        <li><a href="#">Klinik Penyakit Dalam</a></li>
                        <li><a href="#">Klinik Bedah Umum</a></li>
                        <li><a href="#">Klinik Bedah Anak</a></li>
                        <li><a href="#">Klinik Bedah Plastik</a></li>
                        <li><a href="#">Klinik Ortopedi</a></li>
                        <li><a href="#">Klinik Rehab Medik</a></li>
                        <li><a href="#">Klinik jantung</a></li>
                        <li><a href="#">Klinik Kulit</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Klinik Saraf</a></li>
                        <li><a href="#">Klinik THT</a></li>
                        <li><a href="#">Klinik Urologi</a></li>
                        <li><a href="#">Klinik Mata</a></li>
                        <li><a href="#">Klinik Anak</a></li>
                        <li><a href="#">Klinik Umum</a></li>
                        <li><a href="#">Klinik Geriatri</a></li>
                        <li><a href="#">Klinik Gizi</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col list-pelayanan">
                    <h3>Pelayanan Penunjang Medik</h3>
                    <div class="content">
                        <ul>
                            <li><a href="/pelayanan/farmasi">Farmasi</a></li>
                            <li><a href="/pelayanan/rehabMedik">Rehab Medik</a></li>
                            <li><a href="#">Instalasi Patologi Klinik</a></li>
                            <li><a href="#">Instalasi Patologi Anatomi</a></li>
                            <li><a href="#">Radiologi</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col list-pelayanan">
                    <h3>Pelayanan</h3>
                    <div class="content">
                        <ul>
                            <li><a href="/pelayanan/gawatdarurat">IGD 24 Jam</a></li>
                            <li><a href="/pelayanan/rawatInap">Rawat Inap</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 image-pelayanan" v-for="img in fotoPelayanan" :key="img.id">
                    <img :src="img.img" class="target" v-motion-slide-visible-once-right>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .pelayanan-container{
        margin-top: 4rem;
    }

    .list-pelayanan h3{
        font-size: 17px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
    .list-pelayanan .content{
        display: flex;
        margin-top: 2rem;
    }

    .list-pelayanan ul li{
        list-style-type: disc;
        cursor: pointer;
        font-weight: 500;
        transition: all .3s ease-in-out;
    }
    .list-pelayanan ul li a{
        text-decoration: none;
        color: #000;
    }
    .list-pelayanan ul li a:hover{
        color: var(--first-color);
    }
    .image-pelayanan{
        margin-bottom: 1rem;
        position: relative;
        overflow: hidden;
    }
    .image-pelayanan::after{
        content: "";
        display: block;
        color: #000;
        width: 100%;
        height: 100%;
    }
    .image-pelayanan img{
        cursor: pointer;
        width: 100%;
    }
    /* .image-pelayanan::before{
        content: "";
        background-color: var(--first-color);
        background: linear-gradient(to top,rgba(4,78,151,1),rgba(186,217,248,0));
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        bottom: -100%;
    }
    .image-pelayanan img:hover .image-pelayanan::before{
        bottom: 0;
    } */
</style>