<script setup>
import { reactive } from 'vue';
import alodoc from './../assets/img/alodoc.png'
import halodoc from './../assets/img/halodoc.png'
import jmo from './../assets/img/jmo.png'

    const kliniks = ["Ortopedi", "Mata", "Penyakit Dalam", "Anak", "Jantung", "Obgyn", "Bedah Anak", "Bedah", "Urologi", "Kulit", "Syaraf", "Patologi Anatomi", "THT-KL", "Rehab Medik"]

    const platformLain = [
        {
            "img": alodoc,
            "link": "https://www.alodokter.com/cari-rumah-sakit/rs-bedah-hasta-husada",
            "id" : 1
        },
        {
            "img": halodoc,
            "link": "https://www.halodoc.com/rumah-sakit",
            "id" : 2
        },
        {
            "img": jmo,
            "link": "https://www.bpjsketenagakerjaan.go.id/jmo/",
            "id" : 3
        },
        
    ]

    const userInput = reactive({
        nama: "",
        nik: "",
        klinik: " ",
        tanggal: ""
    })

    const handleSubmit = () =>{
        console.log(userInput)
    }
</script>
<template>
    <div class="body-form">
        <div class="row form-container">
            <form class="col" @submit="handleSubmit">
                <h3 class="form-title">reservasi layanan kesehatan</h3>
                <div class="mb-3">
                    <!-- <label for="exampleInputEmail1" class="form-label">Email address</label> -->
                    <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Nama" v-model="userInput.nama">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="nik" placeholder="NIK" maxlength="16" v-model="userInput.nik">
                </div>
                <div class="mb-3">
                    <select id="klinik" name="klinik" class="form-control" v-model="userInput.klinik">
                        <option :value="klinik" v-for="(klinik, i) in kliniks" :key="i">{{ klinik }}</option>
                        <!-- <option value="ortopedi">Mata</option>
                        <option value="ortopedi">Penyakit Dalam</option> -->
                    </select>
                </div>
                <div class="mb-3">
                    <input type="date" class="form-control" id="date" placeholder="Tanggal Reservasi" v-model="userInput.tanggal">
                </div>
                <div id="form-note" class="form-text">* Reservasi hanya bisa digunakan untuk pasien dengan cara bayar umum</div>
                <!-- <button type="submit" class="btn">Reservasi</button> -->
                <a :href="`https://api.whatsapp.com/send/?phone=628113785511&text=Nama: ${userInput.nama} NIK:${userInput.nik} Poli tujuan: ${userInput.klinik} Tanggal Reservasi: ${userInput.tanggal}&type=phone_number&app_absent=0`" class="btn" target="_blank">Reservasi</a>


            </form>
            <div class="form-description-container col">
                <div class="description">
                    <h4>Hubungi Kami</h4>
                    <p>anda dapat menghubungi kami terlebih dahulu untuk melakukan update jadwal klinik ataupun layanan informasi pelayanan di :</p>
                </div>
                <div class="contact d-flex gap-3">
                    <ul>
                        <li>Emergency</li>
                        <li>IGD</li>
                        <li>Kamar Bersalin (PONEK)</li>
                        <li>Informasi</li>
                        <li>Pendaftaran Online</li>
                        <li>Pengguna BPJS</li>
                        <li>UMUM</li>
                    </ul>
                    <ul>
                        <li><br></li>
                        <li>0811-3785-544</li>
                        <li>0822-3199-0901</li>
                        <li>0811-3785-511</li>
                        <li><br></li>
                        <li><a href="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id&pli=1" target="_blank">MOBILE JKN</a></li>
                        <li>WEB,WA,<a href="https://www.alodokter.com/cari-dokter" target="_blank">ALODOKTER</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row platform-lain">
            <h3>untuk pendaftaran platform lain silahkan klik gambar dibawah ini:</h3>
            <a :href="p.link" v-for="p in platformLain" :key="p.id" target="_blank">
                <img :src="p.img">
            </a>
        </div>
    </div>
</template>

<style scoped>
.body-form{
    padding: 10rem 2rem;
    background: url("./../assets/img/bgbody.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
}
.form-container{
    background-color: #fff;
    border-radius:30px ;
    padding: 2rem;
}

.form-description-container{
    background-color: #044e97;
}
.form-title{
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--first-color);
    text-align: center;
    margin-bottom: 3rem;
}
.contact ul li a{
    text-decoration: none;
    color: #fff;
}
/* .input[type="number"]{
    -moz-appearance: textfield;
} */
/* .input[type="number"]::-webkit-inner-spin-button,
.input[type="number"]::-webkit-outer-spin-button{
    display: none;
} */

#form-note{
    color: red;
}
.btn{
  margin: 3rem auto;
  text-align: center;
  padding: 1rem;
  background-color: #044e97;
  color: #fff;
  border-radius: 1rem;
  transition: .3s all ease-in-out;
  text-align: center;
  width: 229px;
  text-transform: uppercase;
  font-size: 18px;
  margin-left: 25%;
  font-weight: 700;

}
.btn:hover{
  background-color: #fff;
  color: #044e97;
  border: solid 1px #044e97;
}

.form-description-container{
    border-radius: 20px;
    padding: 2rem;
    color: #fff;
}
.contact ul li{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1rem;
}
.platform-lain{
    margin-top: 2rem;
    width: 800px;
    display: flex;
    justify-content: center;
    gap: 1rem;
}
.platform-lain h3{
    font-size: 18px;
    font-weight: 600;
    color: var(--first-color);
    text-transform: capitalize;
}
.platform-lain a{
    display: block;
    width: 200px;
}

.platform-lain a img{
    width: 200px;
    aspect-ratio: 3/1;
}
</style>