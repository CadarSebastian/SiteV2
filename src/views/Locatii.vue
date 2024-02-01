<script setup></script>
<template>
    <div class="purple-container align-right">
        <div class="container-content flex-collum">
            <a
                href="https://www.google.com/maps/search/liceul+baptist+emanuel+google+location/@47.0561291,21.9144556,17z?hl=ro&entry=ttu">
                <h1 class="underline decoration-solid">Liceul Emanuel</h1>
            </a>

            <p>Bulevardul Decebal NR65</p>
            <p2>Cladirea Mica etajul 2 a patra clasa pe dreapta</p2>
        </div>
        <img id="container-image" src="../assets/Location1-2.png" alt="Right Image">


    </div>

    <div class="purple-container align-left">
        <img id="container-image" src="../assets/Location3.jpg" alt="Left Image">
        <div class="container-content flex-collum">
            <a
                href="https://www.google.com/maps/place/%22The+Spot%22+-+Centru+de+tineret/@47.0568916,21.9211587,17z/data=!3m1!4b1!4m6!3m5!1s0x4746471790c70a9d:0xc7f8ab783322fcc9!8m2!3d47.0568916!4d21.9237336!16s%2Fg%2F11qg4lrz1s?hl=ro&entry=ttu">

                <h1 class="underline decoration-solid"> Centrul The Spot</h1>
            </a>
            <p>Strada Rahovei NR1 </p>
        </div>
    </div>
    <div class="purple-container align-left">
        <div class="container-content flex-collum">
            <RouterLink :to="{ name: 'contactare' }" class="text-white underline decoration-solid">

                <h1 class="text-white text-4xl font-bold mb-4">❁ 𝐼𝓃 𝒸𝒶𝓏 𝒹𝑒 𝓃𝑒𝒸𝓁𝒶𝓇𝒾𝓉𝒶𝓉𝒾,
                    𝒸o𝓃𝓉𝒶𝒸𝓉𝒶𝓉𝒾-𝓃𝑒 ❁</h1>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped></style>