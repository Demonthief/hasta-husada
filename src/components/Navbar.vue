<script setup>
 import {ref} from 'vue'
 import logoRS from './../assets/img/logoRs.png'
 import logoKARS from './../assets/img/paripuna.png'
 import { RouterLink } from 'vue-router';

 const sosmed = [
        {
          "icon" : "fa-brands fa-facebook-f",
          "name" : "Facebook",
          "link" : "https://www.facebook.com/hasta.husada.98?locale=id_ID",
          "id": 1
        },
        {
          "icon" : "fa-brands fa-instagram",
          "name" : "instagram",
          "link" : "https://www.instagram.com/rskb.hastahusada/",
          "id"  : 2
        },
        {
          "icon" : "fa-brands fa-youtube",
          "name" : "youtube",
          "link" : "https://www.youtube.com/@rs.khususbedahhastahusada968",
          "id"  : 3
        },
        {
          "icon" : "fa-brands fa-tiktok",
          "name" : "tiktok",
          "link" : "https://www.tiktok.com/@rskbhastahusada",
          "id"  : 4
        },
        {
          "icon" : "fa-brands fa-whatsapp",
          "name" : "whatsapp",
          "link" : "https://wa.me/628113785511",
          "id" : 5
        }
      ]
  
  
</script>
<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-light">
      <span class="line"></span>
    <div class="container container-fluid">
      <div class="logo">
        <a class="navbar-brand me-auto" href="#"><img :src="logoRS"></a>
        <a class="navbar-brand me-auto" href="#"><img :src="logoKARS"></a>
      </div>
      <div class="nav-line"></div>
      <div class="icon-container">
        <div class="icon-sosmed" v-for="logo in sosmed" :key="logo.id">
          <a :href="logo.link" target="_blank">
            <i :class="logo.icon"></i>
          </a>
        </div>
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hasta Husada</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tentangKami" class="nav-link">Profil</router-link>
            </li>
            <!-- <li class="nav-item">
               <router-link to="/jadwalDokter" class="nav-link">Jadwal Dokter</router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/pendaftaran" class="nav-link">Pendaftaran</router-link>
               <!-- <a href="/pendaftaran" class="nav-link"> Pendaftaran </a> -->
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="/timMedis">Tim Medis</a> -->
              <router-link to="/timMedis" class="nav-link">Tim Medis</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/pelayanan" class="nav-link">Pelayanan</router-link>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Layanan 
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Rawat Jalan</a></li>
                <li><a class="dropdown-item" href="#">Rawat Inap</a></li>
                <li><a class="dropdown-item" href="#">IGD</a></li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
        <!-- <a href="" class="button me-3">Daftar Sekarang</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
</template>

<style scoped>
.line{
  display: inline-block;
  width: 100%;
  height: 5px;
  background-color: #044e97;
  position: absolute;
  top: 0;
}
  .navbar{
    font-family: "Montserrat", sans-serif;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
    z-index: 99;
    font-weight: 600;
  }
  .button{
    display: inline-block;
    border: 1px solid #044e97;
    border-radius: 10px;
    padding: .5rem;
    text-decoration: none;
    color: #044e97;
    transition: .3s all ease-in-out;  
  }
  .button:hover{
    color: #fff;
    background-color: #044e97;
  }
  .logo img{
    width: 100px; 
    margin-right: 1rem;
  }
  .nav-item .nav-link{
    font-size: .95rem;
  }

  .icon-container{
    display: flex;
    justify-content: center;
    gap:.5rem ;
  }
  .icon-container .icon-sosmed{
    background-color: #000;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding-left: 5%;
    padding-top: 2%;
    transition:.3s all ease-in-out;
  }
  .icon-container .icon-sosmed i{
    color: #fff;
    font-size: 1rem;
  }
  .icon-container .icon-sosmed:hover{
    background-color: #fff;
    border: solid 1px #000;
    cursor: pointer;
  }
  .icon-container .icon-sosmed:hover i{
    color: #000;
  }
  .nav-line{
    width: 1px;
    height: 2rem;
    background-color: #706565;
    margin-right: 1.5rem;
  }
@media (max-width: 768px){
  .icon-container, .nav-line{
    display: none;
  }
}

</style>