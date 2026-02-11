<script setup lang="ts">
//@ts-ignore
import lawacademy_01 from '../../../assets/images/academy2.jpeg'
import lawacademy_02 from '../../../assets/images/academy.jpeg'
import lawapp_01 from '../../../assets/images/app.jpeg'
import lawapp_02 from '../../../assets/images/lawapp_price.jpeg'
import eloquentia_01 from '../../../assets/images/eloq.jpeg'
import eloquentia_02 from '../../../assets/images/emy.jpeg'
import impact1 from '../../../assets/images/impact1.jpeg'
import impact2 from '../../../assets/images/impact2.jpeg'
import conference from '../../../assets/images/conf.jpeg'
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Définition du breakpoint mobile (généralement 768px)
const MOBILE_BREAKPOINT = 768

// États réactifs
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

// Computed pour les conditions
const isMobile = computed(() => windowWidth.value < MOBILE_BREAKPOINT)
// Données pour la galerie
const galleryImages = [
  { src: lawacademy_01, alt: "LawAcademy - Atelier en école", category: "LawAcademy" },
  { src: lawacademy_02, alt: "LawAcademy - Simulation de procès", category: "LawAcademy" },
  { src: lawapp_01, alt: "LawApp50 - Présentation application", category: "LawApp50" },
  { src: lawapp_02, alt: "LawApp50 - 1er prix ", category: "LawApp50" },
  { src: eloquentia_01, alt: "Éloquentia - Concours d'éloquence", category: "Éloquentia" },
  { src: eloquentia_02, alt: "Emy Mayumbi - Championne Éloquentia", category: "Éloquentia" },
  { src: impact1, alt: "Clinique Juridique Mobile", category: "Impact Social" },
  { src: impact2, alt: "Dictionnaire Juridique Visuel", category: "Impact Social" },
  { src: conference, alt: "Conférence - Droit et Numérique", category: "Leadership" }
]

// État pour la lightbox
const lightboxOpen = ref(false)
const lightboxImage = ref({ src: '', alt: '', category: '' })

const openLightbox = (image: any) => {
  lightboxImage.value = image
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const activeCategory = ref('Tous')
const categories = ['Tous', 'LawAcademy', 'LawApp50', 'Éloquentia', 'Impact Social', 'Leadership']
if (isMobile.value) {
    activeCategory.value = 'Leadership' // Affiche toutes les images sur mobile
}
const filteredImages = computed(() => {
  if (activeCategory.value === 'Tous') return galleryImages
  return galleryImages.filter(img => img.category === activeCategory.value)
})
</script>


<template>            
    <div  id="galerie" class="max-w-screen-xl bg-[#f0f9ff] mx-auto px-4 sm:px-6 lg:px-12">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-[#2F4F4F] font-semibold text-sm uppercase tracking-wider bg-[#2F4F4F]/10 px-4 py-2 rounded-full mb-4 inline-block">
          Galerie
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          L'impact en <span class="text-[#40b3b3]">images</span>
        </h2>
        <p class="text-xl text-gray-600">
          De LawAcademy aux concours d'éloquence, en passant par le développement de LawApp50 — immersion au cœur de la mission.
        </p>
      </div>

      <!-- Filtres catégories -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          :class="[
            activeCategory === category 
              ? 'bg-[#40b3b3] text-white shadow-lg scale-105' 
              : 'bg-[#2F4F4F]/10 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Grille masonry améliorée -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        <div 
          v-for="(image, index) in filteredImages" 
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
          :class="[
            index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : '',
            index % 7 === 0 ? 'md:row-span-2' : '',
            index % 3 === 0 ? 'lg:col-span-1' : ''
          ]"
          @click="openLightbox(image)"
        >
          <!-- Image avec overlay progressif -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
          
          <img 
            :src="image.src" 
            :alt="image.alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          <!-- Badge catégorie -->
          <div class="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
            <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2F4F4F] text-xs font-semibold rounded-full shadow-lg">
              {{ image.category }}
            </span>
          </div>
          
          <!-- Contenu overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <h3 class="text-white font-bold text-lg mb-1">{{ image.alt }}</h3>
            <div class="flex items-center text-white/80 text-sm">
              <span>Voir plus</span>
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton voir plus -->
      <!-- <div class="text-center mt-12">
        <button class="px-8 py-4 bg-white border-2 border-[#2F4F4F] text-[#2F4F4F] font-semibold rounded-xl hover:bg-[#2F4F4F] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group">
          <span>Charger plus d'images</span>
          <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </button>
      </div> -->
    </div>


  <!-- Lightbox modal -->
  <transition name="fade">
    <div v-if="lightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md" @click="closeLightbox">
      <div class="relative max-w-6xl max-h-[90vh] mx-4" @click.stop>
        <button @click="closeLightbox" class="absolute -top-12 right-0 text-white hover:text-[#62dcdc] transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <img :src="lightboxImage.src" :alt="lightboxImage.alt" class="max-w-full max-h-[90vh] object-contain rounded-lg">
        <p class="text-white text-center mt-4 text-lg">{{ lightboxImage.alt }}</p>
        <p class="text-gray-400 text-center">{{ lightboxImage.category }}</p>
      </div>
    </div>
  </transition>
</template>