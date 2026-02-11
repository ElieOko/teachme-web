<!-- src/components/ContactSection.vue -->
<template>
  <section id="contact" class="py-24 bg-[#f0f9ff]">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      
      <!-- Header minimaliste -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
          Contact
        </span>
        <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
          Restons en <span class="text-[#2F4F4F]">contact</span>
        </h2>
        <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        <p class="mt-6 text-gray-500 text-lg font-light">
          Pour toute collaboration, projet ou échange
        </p>
      </div>

      <!-- Cartes de contact - Design épuré -->
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        
        <!-- Carte 1 - Email (Principale) -->
        <div class="group bg-[#2F4F4F]/10 hover:bg-[#2F4F4F] p-8 rounded-2xl transition-all duration-500 text-center md:col-span-1">
          <div class="w-14 h-14 rounded-full bg-white group-hover:bg-[#40b3b3]/20 flex items-center justify-center mx-auto mb-5 transition-all duration-500">
            <i class="fas fa-envelope text-xl text-[#2F4F4F] group-hover:text-white transition-colors duration-500"></i>
          </div>
          <h3 class="text-lg font-medium text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
            Email
          </h3>
          <a 
            href="mailto:emymayumbi94@gmail.com"
            class="text-gray-600 group-hover:text-white/90 text-sm font-light transition-colors duration-500 hover:underline break-all"
          >
            emymayumbi94@gmail.com
          </a>
          <p class="text-xs text-gray-400 group-hover:text-white/70 mt-4 transition-colors duration-500">
            Réponse sous 24-48h
          </p>
        </div>

        <!-- Carte 2 - Téléphone -->
        <div class="group bg-[#2F4F4F]/10 hover:bg-[#2F4F4F] p-8 rounded-2xl transition-all duration-500 text-center md:col-span-1">
          <div class="w-14 h-14 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-all duration-500">
            <i class="fas fa-phone-alt text-xl text-[#40b3b3] group-hover:text-white transition-colors duration-500"></i>
          </div>
          <h3 class="text-lg font-medium text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
            Téléphone
          </h3>
          <a 
            href="tel:+243903500886"
            class="text-gray-600 group-hover:text-white/90 text-sm font-light transition-colors duration-500 hover:underline"
          >
            +243 903 500 886
          </a>
          <p class="text-xs text-gray-400 group-hover:text-white/70 mt-4 transition-colors duration-500">
            Lun-Ven, 9h-17h
          </p>
        </div>

        <!-- Carte 3 - Bureau -->
        <div class="group bg-[#2F4F4F]/10 hover:bg-[#2F4F4F] p-8 rounded-2xl transition-all duration-500 text-center md:col-span-1">
          <div class="w-14 h-14 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-all duration-500">
            <i class="fas fa-map-marker-alt text-xl text-[#62dcdc] group-hover:text-white transition-colors duration-500"></i>
          </div>
          <h3 class="text-lg font-medium text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
            Bureau
          </h3>
          <p class="text-gray-600 group-hover:text-white/90 text-sm font-light transition-colors duration-500">
            Kinshasa, RDC
          </p>
          <p class="text-xs text-gray-400 group-hover:text-white/70 mt-4 transition-colors duration-500">
            Sur rendez-vous
          </p>
        </div>
      </div>

      <!-- CTA Principal - Mailto Button -->
      <div class="text-center mt-16">
        <a 
          href="mailto:emymayumbi94@gmail.com?subject=Prise%20de%20contact%20-%20Site%20web&body=Bonjour%20Emy%2C%0D%0A%0D%0AJe%20vous%20contacte%20via%20votre%20site%20web.%0D%0A%0D%0ACordialement%2C%0D%0A%5BPr%C3%A9nom%20%26%20Nom%5D"
          class="inline-flex items-center gap-3 px-8 py-4 bg-[#2F4F4F] text-white text-sm font-medium rounded-full hover:bg-[#40b3b3] transition-all duration-300 shadow-sm hover:shadow-md group"
        >
          <span>M'écrire par email</span>
          <i class="fas fa-paper-plane text-xs group-hover:translate-x-1 transition-transform"></i>
        </a>
        <p class="text-xs text-gray-400 mt-4">
          Ou cliquez directement sur l'adresse email pour ouvrir votre messagerie
        </p>
      </div>

      <!-- Réseaux sociaux - Discrets -->
      <div class="mt-20 pt-8 border-t border-gray-100">
        <div class="flex flex-col items-center gap-6">
          <span class="text-xs uppercase tracking-wider text-gray-400">
            Me retrouver sur
          </span>
          <div class="flex items-center gap-5">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#2F4F4F] hover:text-white transition-all duration-300"
              :title="social.name"
            >
              <i :class="[social.icon, 'text-base']"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://cd.linkedin.com/in/emy-mayumbi-092834302', icon: 'fab fa-linkedin-in' },
  { name: 'Instagram', url: 'https://www.instagram.com/emy_mayumbi_teachemy?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==', icon: 'fab fa-instagram' },
//   { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' }
]
</script>