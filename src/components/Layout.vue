<script lang="ts" setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

</script>
<template>
    <div>
         <Navbar />
         <div  class="bg-[#f0f9ff]">
            <slot />
         </div>
         <Footer />
    </div>
</template>