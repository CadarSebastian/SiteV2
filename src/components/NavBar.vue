<script setup></script>
<template>
    <header class="flex justify-between items-center px-3 py-2">
        <div class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <RouterLink :to="{ name: 'homepage1' }"
                class="underline decoration-solid text-white rounded hover:bg-violet-600  px-1 py-1">Acasa</RouterLink>
        </div>
        <div class="text-sm sm:text-l md:text-xl lg:text-2xl xl:text-3xl">
            <h2 id="color-changing-title"
                class=" hidden sm:inline font-extrabold text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                Scoala Robotilor
            </h2>
        </div>
        <div class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex gap-4">
            <RouterLink :to="{ name: 'locatii' }" class="text-white rounded hover:bg-violet-600  px-1 py-1">Locatii
            </RouterLink>
            <RouterLink :to="{ name: 'orare' }" class="text-white rounded hover:bg-violet-600  px-1 py-1">Orare</RouterLink>
            <RouterLink :to="{ name: 'contactare' }" class="text-white rounded hover:bg-violet-600  px-1 py-1">Contactare
            </RouterLink>
            <div>

                <RouterLink :to="{ name: 'inscrieri' }"
                    class="text-white animate__animated animate__bounce  bg-violet-500  rounded hover:bg-violet-600  px-1 py-1">
                    Inscrieri</RouterLink>
            </div>
        </div>
    </header>
</template>
<style scoped></style>