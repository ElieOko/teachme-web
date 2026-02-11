<!-- src/components/FooterSection.vue -->
<template>
  <footer class="relative bg-white border-t border-gray-100 mt-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-10">
      
      <!-- TOP : Brand + Crédit développeur -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-gray-100">
        
        <!-- Brand EY -->
        <div class="flex items-start gap-4">
          <div class="relative">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-[#2F4F4F] to-[#40b3b3] flex items-center justify-center shadow-sm">
              <span class="text-white font-light text-lg tracking-wider">EY</span>
            </div>
            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-[#62dcdc] rounded-full border-2 border-white"></div>
          </div>
          <div class="flex flex-col">
            <span class="text-base font-medium text-gray-900 tracking-wide">EMY MAYUMBI</span>
            <span class="text-xs text-gray-500 font-light tracking-wide">YIMPI</span>
            <p class="text-sm text-gray-500 font-light max-w-md mt-2 leading-relaxed">
              Conseillère juridique, créatrice de contenu éducative et techpreneure congolaise.
            </p>
          </div>
        </div>

        <!-- Crédit développeur - ELIE OKO -->
        <div class="flex flex-col items-start md:items-end gap-2">
          <span class="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Développé par</span>
          <a 
            href="https://me-elieoko.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-[#2F4F4F] rounded-full transition-all duration-300"
          >
            <span class="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
              Elie Oko
            </span>
            <i class="fas fa-arrow-up-right-from-squares text-xs text-gray-400 group-hover:text-white/90 transition-colors"></i>
          </a>
          <a 
            href="https://me-elieoko.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-gray-400 hover:text-[#2F4F4F] transition-colors flex items-center gap-1"
          >
            <span>Portfolio</span>
            <i class="fas fa-external-link-alt text-[10px]"></i>
          </a>
        </div>
      </div>

      <!-- MIDDLE : Grille 4 colonnes -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-12 border-b border-gray-100">
        
        <!-- Colonne 1 - Navigation -->
        <div>
          <h3 class="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.id">
              <a 
                :href="link.href"
                @click.prevent="scrollToSection(link.href)"
                class="text-sm text-gray-600 hover:text-[#2F4F4F] transition-colors font-light"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Colonne 2 - Initiatives -->
        <div>
          <h3 class="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Initiatives</h3>
          <ul class="space-y-3">
            <li>
              <a href="#lawacademy" class="text-sm text-gray-600 hover:text-[#2F4F4F] transition-colors font-light">
                LawAcademy
              </a>
            </li>
            <li>
              <a href="#lawapp50" class="text-sm text-gray-600 hover:text-[#2F4F4F] transition-colors font-light">
                LawApp50 Group
              </a>
            </li>
        
            <li>
              <a href="#teachemy" class="text-sm text-gray-600 hover:text-[#2F4F4F] transition-colors font-light">
                TeachEmy
              </a>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 - Contact -->
        <div>
          <h3 class="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Contact</h3>
          <ul class="space-y-4">
            <li>
              <a 
                :href="'mailto:' + contact.email"
                class="text-sm text-gray-600 hover:text-[#2F4F4F] transition-colors font-light flex items-center gap-2"
              >
                <i class="fas fa-envelope text-[11px] text-gray-400"></i>
                {{ contact.email }}
              </a>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 font-light">
              <i class="fas fa-map-marker-alt text-[11px] text-gray-400 mt-1"></i>
              <span>{{ contact.location }}</span>
            </li>
          </ul>
        </div>

        <!-- Colonne 4 - Réseaux + Crédit mobile -->
        <div>
          <h3 class="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Réseaux</h3>
          <div class="flex gap-3 mb-6">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#2F4F4F] hover:text-white transition-all duration-300"
              :title="social.name"
            >
              <i :class="[social.icon, 'text-sm']"></i>
            </a>
          </div>
          
          <!-- Crédit mobile - visible uniquement sur mobile/tablet -->
          <div class="block md:hidden pt-4 mt-4 border-t border-gray-100">
            <span class="text-xs text-gray-400 font-light block mb-1">Développé par</span>
            <a 
              href="https://me-elieoko.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-[#2F4F4F] font-medium text-sm hover:text-[#40b3b3] transition-colors"
            >
              Elie Oko
              <i class="fas fa-external-link-alt text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- BOTTOM : Copyright + mentions légales -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
        <p class="text-xs text-gray-400 font-light order-2 sm:order-1">
          © {{ currentYear }} Emy Mayumbi Yimpi. Tous droits réservés.
        </p>
        <div class="flex items-center gap-4 order-1 sm:order-2">
          <a href="#" class="text-xs text-gray-400 hover:text-[#2F4F4F] transition-colors font-light">
            Mentions légales
          </a>
          <span class="text-gray-300 text-xs">•</span>
          <a href="#" class="text-xs text-gray-400 hover:text-[#2F4F4F] transition-colors font-light">
            Confidentialité
          </a>
        </div>
      </div>

      <!-- Back to top - discret -->
      <button 
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-[#2F4F4F] hover:text-white hover:border-transparent transition-all duration-300 z-50"
        title="Retour en haut"
      >
        <i class="fas fa-arrow-up text-sm"></i>
      </button>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Link {
  id: string
  text: string
  href: string
}

interface SocialLink {
  name: string
  url: string
  icon: string
}

// Contact
const contact = {
  email: "emymayumbi94@gmail.com",
  location: "Kinshasa, RDC"
}

// Navigation
const quickLinks: Link[] = [
  { id: 'home', text: 'Accueil', href: '#home' },
  { id: 'profil', text: 'Profil', href: '#profil' },
  { id: 'initiatives', text: 'Initiatives', href: '#initiative' },
  { id: 'contact', text: 'Contact', href: '#contact' }
]

// Réseaux sociaux - juste l'essentiel
const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://cd.linkedin.com/in/emy-mayumbi-092834302', icon: 'fab fa-linkedin-in' },
  { name: 'Instagram', url: 'https://www.instagram.com/emy_mayumbi_teachemy?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==', icon: 'fab fa-instagram' },
]

// Année dynamique
const currentYear = computed(() => new Date().getFullYear())

// Scroll methods
const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>