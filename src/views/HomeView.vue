<script setup lang="ts">
import Section from '@/components/ui/home/Section.vue';
import TheWelcome from '../components/TheWelcome.vue'
import Landing from '../components/ui/home/Landing.vue'
import Galerie from '@/components/ui/home/Galerie.vue';
import Profile from '@/components/ui/home/Profile.vue';
import Navbar from '@/components/Navbar.vue';
import Contact from '@/components/ui/home/Contact.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <main>
    <Navbar />
    <Landing />
    <section class="bg-[#f0f9ff]">
 <Profile />
    <Section/>
     <Galerie />
    </section>
    <Contact/>
    <Footer />
  </main>
</template>
<style>

</style>
