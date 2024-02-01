<script setup></script>
<template>
    <div class="content text-white">
        <img id="mainImage" src="../assets/r2d2.png" alt="Main Page Image">

        <div class="purple-container align-left">
            <img id="container-image" src="../assets/r2d22.png" alt="Left Image">
            <div class="container-content flex-collum">
                <h1 flex>Explorator cu Secrete și Control Jedi</h1>
                <p>Descoperă universul Star Wars cu R2D2, robotul controlabil care îndeplinește misiuni secrete și
                    răspunde la comenzi cu coduri misterioase. Îl poți manevra cu gesturi Jedi, aducând magia Star
                    Wars direct în mâinile tale!</p>
            </div>
        </div>

        <div class="purple-container align-right">
            <div class="container-content flex-collum">
                <h1>Navighează prin Galaxie cu Efort Minim</h1>
                <p>Adună-ți forța și explorează galaxia cu robotul controlat gestual. Cu mișcări intuitive, acest
                    companion aduce senzația de a manevra obiecte virtuale într-o aventură interactivă. O experiență
                    Star Wars autentică, la îndemâna ta!</p>
            </div>
            <img id="container-image"
                src="https://i5.walmartimages.com/asr/fc3e06eb-0502-44e7-84eb-cb213ca40590_1.48fcd53acdb21bf9d066c68097845f3a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                alt="Right Image">
        </div>
    </div>

    <div class="metal-container align-center">
        <RouterLink :to="{ name: 'sphero' }">

            <i class="icon bi-arrow-left-square-fill "></i>
        </RouterLink>
        <RouterLink :to="{ name: 'sphero' }">
            <p class="paragraph">Robotul Anterior</p>
        </RouterLink>


        <RouterLink :to="{ name: 'moonrover' }">

            <p class="paragraph">Robotu Urmator</p>
        </RouterLink>
        <RouterLink :to="{ name: 'moonrover' }">

            <i class="icon bi bi-arrow-right-square-fill"></i>
        </RouterLink>

    </div>
</template>
<style scoped></style>