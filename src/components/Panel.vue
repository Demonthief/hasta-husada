<template>
    <div class="container container-fluid panel-container">
        <div class="row">
            <div class="col-md-4">
                <div class="panel-jadwal">
                    <h3 class="panel-title">Jadwal Dokter</h3>
                    <span> > </span>
                    <div class="panel-button">
                        <a href="#">Cek Jadwal</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-10">
                <div class="panel-mid">
                    <h3 class="panel-title">Emergency</h3>
                    <div class="panel-igd">
                        <h3>IGD</h3>
                        <p class="panel-contact">0811-3785-544</p>
                    </div>
                    <div class="panel-kaber">
                        <h3 class="panel-title">Kamar Bersalin</h3>
                        <p class="panel-contact">0822-3199-0901</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel-end">
                    <h3 class="panel-title">Daftar Online</h3>
                    <h3>PAT</h3>
                    <a href="https://wa.me/628113785511" target="_blank" class="panel-contact-daftar">0811-3785-511</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .panel-container{
        padding: 1.5rem;
        position: relative;
        margin-top: -14%;
        z-index: 30;
    }
    .panel-jadwal{
        /* position: absolute; */
        background-color: #fff;
        border-radius: 1rem;
        padding: 2rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        
    } 
    .panel-mid{
        background-color: #044e97;
        color: #fff;
        border-radius: 1rem;
        padding : 2rem;
        text-align: center;
    } 
    .panel-end{
        background-color: #fff;
        color: #044e97;
        border-radius: 1.25rem;
        padding: 2rem;
        /* position: absolute; */
        margin-left: -2%;
        z-index: -2;
        text-align: center;
        font-size: 20px;
    }
/* .panel-container {
  padding: 1.5rem;
  margin-top: -5%;
  z-index: 999;
}

.panel-jadwal,
.panel-mid,
.panel-end {
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}


.panel-jadwal {
  background-color: #fff;
  color: #044e97;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.panel-mid {
  background-color: #044e97;
  color: #fff;
  border-radius: 1rem;
}


.panel-end {
  background-color: #fff;
  color: #044e97;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
} */

    .panel-jadwal .panel-title{
        font-size: 20px;
        font-weight: 700;
        color: #044e97
    }
    .panel-jadwal span{
        font-size: 2rem;
        font-weight: 700;
        color: #044e97;
    }

    .panel-jadwal .panel-button{
        padding: 1.25rem;
        background-color: #044e97;
        border-radius: 1rem;
    }
    .panel-jadwal .panel-button a{
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
    }

    .panel-title{
        font-weight: 700;
    }
    .panel-contact-daftar {
        font-size: 1.2rem;
        text-decoration: none;
        color: var(--first-color);
    }

</style>