<script setup></script>
<template>
    <div class="content text-white">
        <img id="mainImage" src="../assets/Iron-man.png" alt="Main Page Image">

        <div class="purple-container align-left">
            <img id="container-image" src="https://s.yimg.com/ob/image/79fc3d81-ff40-451c-960a-6370e6690c48.jpg"
                alt="Left Image">
            <div class="container-content flex-collum">
                <h1 flex>Mănușa Interactivă</h1>
                <p>Echipată cu luminite și sunete inspirate de tehnologia Iron Man, această mănușă oferă o
                    experiență futuristă și distractivă. Cu o suprafață interactivă care permite desenul și
                    schițarea, devii creatorul propriilor tale lumii digitale.

                </p>
            </div>
        </div>

        <div class="purple-container align-right">
            <div class="container-content flex-collum">
                <h1>Creativitate și Tehnologie la Vârful Degetelor</h1>
                <p>Inovația stă în stiva electronică integrată, care nu doar controlează luminile și sunetele, ci și
                    creează o interacțiune captivantă cu lumina din mediul înconjurător. Experimentează magia
                    tehnologiei moderne într-un mod inedit, devenind eroul propriului tău univers cu ajutorul
                    mănușei interactive.</p>
            </div>
            <img id="container-image" src="https://m.media-amazon.com/images/I/716jMRHFPmL._AC_UF894,1000_QL80_.jpg"
                alt="Right Image">
        </div>
    </div>

    <div class="metal-container align-center">
        <RouterLink :to="{ name: 'moonrover' }">

            <i class="icon bi-arrow-left-square-fill "></i>
        </RouterLink>
        <RouterLink :to="{ name: 'moonrover' }">
            <p class="paragraph">Robotul Anterior</p>
        </RouterLink>


        <RouterLink :to="{ name: 'sphero' }">

            <p class="paragraph">Robotu Urmator</p>
        </RouterLink>
        <RouterLink :to="{ name: 'sphero' }">

            <i class="icon bi bi-arrow-right-square-fill"></i>
        </RouterLink>

    </div>
</template>
<style scoped></style>