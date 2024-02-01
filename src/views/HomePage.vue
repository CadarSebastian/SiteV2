<script setup></script>
<template>
    <!-- dat big image -->
    <div class="content text-white">
        <img id="mainImage" src="../assets/MainPage1.png" alt="Main Page Image">
        <!-- the purple containers -->
        <div class="purple-container align-left">
            <img id="container-image" src="../assets/MainPage2.png" alt="Left Image">
            <div class="container-content flex-collum">
                <h1 flex>Construieste si controleaza roboti</h1>
                <p>Vom invata cum sa construiesti roboti ca la carte sau dupa propria imaginatie</p>
            </div>
        </div>

        <div class="purple-container align-right">
            <div class="container-content flex-collum">
                <h1>Programeaza</h1>
                <p>Vom scrie cod astfel incat robotii vor face actiuni fara telecomanda</p>
            </div>
            <img id="container-image" src="../assets/MainPage3.jpg" alt="Right Image">
        </div>

        <div class="purple-container align-left">
            <img id="container-image" src="../assets/MainPage4.png" alt="Left Image">
            <div class="container-content flex-collum">
                <h1 flex>Completeaza Misiuni</h1>
                <p>Fiecare Robot are o aplicatie speciala, in care poti face misiuni si in care inveti moduri noi de
                    a
                    construi roboti </p>
            </div>
        </div>
    </div>

    <div class="purple-container">
        <div class="container-content flex-collum ">
            <RouterLink :to="{ name: 'r2d2' }">

                <p>🤖Ｈａｉｄｅ　ｓａ　ｉｎｔａｌｎｉｍ　ｒｏｂｏｔｉｉ⚡️</p>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped></style>