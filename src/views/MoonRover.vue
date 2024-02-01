<script setup></script>
<template>
    <div class="content text-white">
        <img id="mainImage" src="../assets/Moonrover1.png" alt="Main Page Image">
        <!-- Add more content as needed -->
        <div class="purple-container align-left">
            <img id="container-image"
                src="https://sphero.com/cdn/shop/products/SpaceRover_GALLERY_3_9f8e1a87-fdaf-4660-b886-f05f88ada99a_800x.jpg?v=1594781718"
                alt="Left Image">
            <div class="container-content flex-collum">
                <h1 flex>Robotel Lunar de Colectare</h1>
                <p>Descoperă inovația în spațiu cu robotelul lunar dedicat colectării și interacțiunii inteligente.
                    Echipat cu o mână multifuncțională, acest mic explorator nu numai că colectează eficient
                    deșeuri, dar poate și să interacționeze cu mediul său. Cu funcții precum ciocanirea și emiterea
                    de sunete, acest robotel adaugă o dimensiune ludică și expresivă în explorarea spațiului.</p>
            </div>
        </div>

        <div class="purple-container align-right">
            <div class="container-content flex-collum">
                <h1>Interacțiune Avansată</h1>
                <p>Capabil să distingă diferențele subtile de lumină, acest companion tehnologic se adaptează la
                    mediul său lunar, navigând cu inteligență și eficiență. Descoperă noile frontiere ale roboților
                    spațiali cu acest mic explorator care aduce inovația și eficiența în colectarea deșeurilor în
                    spațiul cosmic.</p>
            </div>
            <img id="container-image"
                src="https://normanandjules.com/cdn/shop/products/littlebits-space-rover-inventor-kit-5__37930.jpg?v=1680290650&width=300"
                alt="Right Image">
        </div>
    </div>

    <div class="metal-container align-center">
        <RouterLink :to="{ name: 'r2d2' }">

            <i class="icon bi-arrow-left-square-fill "></i>
        </RouterLink>
        <RouterLink :to="{ name: 'r2d2' }">
            <p class="paragraph">Robotul Anterior</p>
        </RouterLink>


        <RouterLink :to="{ name: 'ironman' }">

            <p class="paragraph">Robotu Urmator</p>
        </RouterLink>
        <RouterLink :to="{ name: 'ironman' }">

            <i class="icon bi bi-arrow-right-square-fill"></i>
        </RouterLink>

    </div>
</template>
<style scoped></style>