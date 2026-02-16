<!-- components/projets/ProjetHero.vue -->
<template>
  <section class="relative bg-white pt-10 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Éléments décoratifs de fond -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-20 w-64 h-64 bg-[#2F4F4F]/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-80 h-80 bg-[#40b3b3]/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Fil d'Ariane -->
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <a href="/" class="hover:text-[#2F4F4F] transition-colors">Accueil</a>
        <i class="fas fa-chevron-right text-xs text-gray-400"></i>
        <a href="/#projets" class="hover:text-[#2F4F4F] transition-colors">Projets</a>
        <i class="fas fa-chevron-right text-xs text-gray-400"></i>
        <span class="text-[#2F4F4F] font-medium">{{ projetName }}</span>
      </div>

      <!-- Contenu Hero -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Colonne gauche - Texte -->
        <div class="space-y-8">
          <div class="inline-flex items-center gap-3 bg-[#2F4F4F]/5 px-4 py-2 rounded-full">
            <span class="w-2 h-2 bg-[#2F4F4F] rounded-full"></span>
            <span class="text-[#2F4F4F] text-sm uppercase tracking-wider font-medium">{{ projetCategory }}</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            <span v-html="projetTitle"></span>
          </h1>

          <p class="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            {{ projetDescription }}
          </p>

          <!-- Stats ou métriques -->
          <div class="grid grid-cols-3 gap-6 pt-6">
            <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
              <div class="text-2xl md:text-3xl font-light text-[#2F4F4F]">{{ stat.value }}</div>
              <div class="text-xs uppercase tracking-wider text-gray-500 mt-1">{{ stat.label }}</div>
            </div>
          </div>

     
        </div>

        <!-- Colonne droite - Image/Illustration -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img 
              :src="imageUrl" 
              :alt="projetName"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Badge flottant -->
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  projetName: string
  projetCategory: string
  projetTitle: string
  projetDescription: string
  imageUrl: string
  iconClass: string
  statut: string
  stats: Array<{ value: string; label: string }>
 
}>()
</script>