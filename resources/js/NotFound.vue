<template>
    <div class="h-screen w-screen bg-gray-200 flex justify-center">
        <div class="text-center text-gray-600 self-center">
            <h1 class="text-6xl">404</h1>
            <h3 class="text-4xl">This page can not be found</h3>
        </div>

        <div class="absolute bottom-0 mb-12 text-gray-600 text-center text-xl hover:cursor-pointer hover:underline"><span @click="$router.go(-1)"> Take me back to where i was</span></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>