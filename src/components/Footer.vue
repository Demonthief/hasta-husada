<script setup>
    const sosmed = [
        {
          "icon" : "fa-brands fa-facebook-f",
          "name" : "Facebook",
          "id": 1
        },
        {
          "icon" : "fa-brands fa-instagram",
          "name" : "instagram",
          "id"  : 2
        },
        {
          "icon" : "fa-brands fa-youtube",
          "name" : "youtube",
          "id"  : 3
        },
        {
          "icon" : "fa-brands fa-tiktok",
          "name" : "tiktok",
          "id"  : 4
        },
        {
          "icon" : "fa-brands fa-whatsapp",
          "name" : "whatsapp",
          "id" : 5
        }
      ]
</script>

<template>
    <footer>
        <div class="line"></div>
        <div class="footer-container">
            <div class="footer-content">
            <div class="footer-warta">
                <h3>Warta Hasta</h3>
                <a href="/wartaDetail/1">MCU di SMK Negeri 1 Kepanjen</a>
                <a href="/wartaDetail/2">Seminar Kesehatan HUT RSKB Hasta Husada</a>
                <a href="/wartaDetail/3">Jalan Sehat HUT RSKB Hasta Husada</a>
            </div>
            <div class="footer-contact">
                <h3>Kontak Kami</h3>
                <p>Jl.Bromo No.98-100 Sukun,Kepanjen, Kab. Malang, 65163</p>
                <p>Telp. (0341) 399 499</p>
                <p>Email. husada.hasta@gmail.com</p>
            </div>
            </div>
        </div>
        <div class="credit">
            <div class="copyright">
                <p><span>&#169</span> copyright - RSKBHH - 2024 - hak cipta dilindungi undang undang</p>
            </div>
            <div class="icon-container">
                <div class="icon-sosmed" v-for="logo in sosmed" :key="logo.id">
                    <i :class="logo.icon"></i>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scooped>
    footer{
        background-color: var(--background-color);
        position: relative;
    }
    .line{
        display: inline-block;
        width: 100%;
        height: 5px;
        background-color: #044e97;
        position: absolute;
        top: 0;
    }
    .footer-container{
        padding: 2rem;
    }
    .footer-content{
        display: flex;
        gap: 4rem;
        padding-top: 4rem;
    }
    .footer-warta, .footer-contact{
        width: 250px;
    }

    h3{
        font-size: 18px;
        font-weight: 600;
        color: var(--first-color);
        margin-bottom: 2rem;
    }
    p{
        font-size: 14px;
        margin-bottom: 2rem;
    }
    .footer-warta a{
        display: block;
        font-size: 14px;
        margin-bottom: 1rem;
        text-decoration: none;
        color: #000;
    }
    .credit{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
        padding: 0 2rem;
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
</style>