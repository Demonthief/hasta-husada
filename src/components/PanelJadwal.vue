<template>
    <div class="container container-fluid panel-container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
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
            <div class="col">
                <div class="panel-end">
                    <h3 class="panel-title">Daftar Online</h3>
                    <h3>PAT</h3>
                    <p class="panel-contact">0811-3785-511</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .panel-container{
        padding: 1.5rem;
        position: relative;
        margin-top: -15%;
        z-index: 30;
        position: relative;
        margin-right: -5%;
    }

    .panel-mid{
        background-color: #044e97;
        color: #fff;
        position: absolute;
        padding-left: 8rem;
        padding-top: 2rem;
        padding-right: 1.5rem;
        border-top-left-radius: 10rem;
        border-bottom-left-radius: 10rem;
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        top: -30%; 
        z-index: -1;
    }
    .panel-end{
        background-color: #fff;
        color: #044e97;
        border-radius: 1.25rem;
        padding: 2rem;
        position: absolute;
        margin-left: -2%;
        z-index: -2;
        text-align: center;
        font-size: 20px;
    }
    .panel-title{
        font-weight: 700;
    }
    .panel-contact{
        font-size: 17px;
    }

</style>