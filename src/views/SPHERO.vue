<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

const propImage = ref("../assets/sphero.png");
const propLeftImage = ref("https://assets.newatlas.com/dims4/default/5f453c6/2147483647/strip/true/crop/6369x4246+0+48/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fsphero-sprk-plus-3.jpg");
const propRightImage = ref("../assets/image (2).png");

watch(propImage, (newVal, oldVal) => {
    console.log('propImage changed:', newVal, oldVal);
    // Additional logic or method call when propImage changes
});

watch(propLeftImage, (newVal, oldVal) => {
    console.log('propLeftImage changed:', newVal, oldVal);
});

watch(propRightImage, (newVal, oldVal) => {
    console.log('propRightImage changed:', newVal, oldVal);
});
</script>
<template>
    <div class="content text-white">
        <img id="mainImage" src="../assets/sphero.png" alt="Main Page Image">

        <div class="purple-container align-left">
            <img id="container-image"
                src="https://assets.newatlas.com/dims4/default/5f453c6/2147483647/strip/true/crop/6369x4246+0+48/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fsphero-sprk-plus-3.jpg"
                alt="Left Image">
            <div class="container-content flex-collum">
                <h1 flex>Roboțeii Sphero: Viteza </h1>
                <p>Întâmpină generația următoare de roboți cu sfericii noștri dinamici, micuți exploratori pe roți
                    controlați cu telecomanda, pregătiți să aducă o doză de viteză și programare în lumea ta.

                    Cu dimensiuni compacte și o mișcare agilă, acești roboți sferici transformă orice spațiu într-un
                    teren de joacă plin de aventură. Cu ajutorul telecomenzii intuitive, vei putea să-i dirijezi cu
                    precizie și să experimentezi o gamă variată de mișcări captivante.</p>
            </div>
        </div>

        <div class="purple-container align-right">
            <div class="container-content flex-collum">
                <h1>Si Programare</h1>
                <p>
                    Dar distracția nu se oprește aici! Acești roboți în miniatură îți oferă posibilitatea de a scrie
                    și încărca coduri, deschizând ușa către lumea fascinantă a programării. Descoperă viteză și
                    creativitate într-un singur pachet cu roboții sferici, companioni perfecți pentru oricine
                    dorește să-și exploreze latura captivantă a tehnologiei.</p>
            </div>
            <img id="container-image" src="../assets/image (2).png" alt="Right Image">
        </div>
    </div>

    <div class="metal-container align-center">
        <RouterLink :to="{ name: 'ironman' }">

            <i class="icon bi-arrow-left-square-fill "></i>
        </RouterLink>
        <RouterLink :to="{ name: 'ironman' }">
            <p class="paragraph">Robotul Anterior</p>
        </RouterLink>


        <RouterLink :to="{ name: 'r2d2' }">

            <p class="paragraph">Robotu Urmator</p>
        </RouterLink>
        <RouterLink :to="{ name: 'r2d2' }">

            <i class="icon bi bi-arrow-right-square-fill"></i>
        </RouterLink>

    </div>
</template>
<style scoped></style>