<!-- src/components/NavigationBar.vue -->
<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-500" :class="[isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 md:h-24">
        
        <!-- Logo -->
        <div class="flex items-center gap-3 cursor-pointer group" @click="scrollToTop">
          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#2F4F4F] to-[#40b3b3] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <span class="text-white font-light text-lg tracking-wider">EY</span>
            </div>
            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-[#62dcdc] rounded-full border-2 border-white"></div>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-600 tracking-wider">EMY MAYUMBI</span>
            <span class="text-xs text-gray-500 font-light tracking-wide">YIMPI</span>
          </div>
        </div>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="relative py-2 text-sm font-medium transition-colors"
            :class="activeSection === link.href.slice(1) ? 'text-[#2F4F4F]' : 'text-gray-600 hover:text-[#40b3b3]'"
          >
            {{ link.text }}
            <span 
              v-if="activeSection === link.href.slice(1)" 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2F4F4F] to-[#40b3b3] rounded-full"
            ></span>
          </a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Social Links - Desktop -->
          <div class="hidden md:flex items-center gap-3">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#2F4F4F] hover:text-white transition-all duration-300"
            >
              <i :class="[social.icon, 'text-sm']"></i>
            </a>
          </div>

          <!-- Contact Button -->
          <button 
            @click="scrollToContact"
            class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#2F4F4F] text-white text-sm font-medium rounded-full hover:bg-[#40b3b3] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Contact</span>
            <i class="fas fa-paper-plane text-xs"></i>
          </button>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-[#2F4F4F]/10 hover:bg-gray-200 transition-colors"
            :class="{ 'bg-gray-200': isMobileMenuOpen }"
          >
            <span class="block w-5 h-0.5 bg-gray-600 transition-transform" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
            <span class="block w-5 h-0.5 bg-gray-600 transition-opacity" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
            <span class="block w-5 h-0.5 bg-gray-600 transition-transform" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed left-0 right-0 bottom-0 top-20 w-full bg-white z-40 md:hidden animate-fadeIn"
    >
      <div class="flex flex-col h-full bg-white p-8">
        <!-- Navigation Links -->
        <div class="flex-1 space-y-2 bg-white">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="flex items-center justify-between p-4 text-gray-700 hover:text-[#2F4F4F] hover:bg-gray-50 rounded-xl transition-all"
          >
            <div class="flex items-center gap-4">
              <i :class="[link.icon, 'w-5 text-gray-400']"></i>
              <span class="font-medium">{{ link.text }}</span>
            </div>
            <i class="fas fa-chevron-right text-xs text-gray-400"></i>
          </a>
        </div>

        <!-- Social & Contact -->
        <div class="pt-8 border-t border-gray-100 space-y-6 bg-white">
          <div class="flex items-center justify-center gap-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#2F4F4F] hover:text-white transition-all"
            >
              <i :class="[social.icon, 'text-lg']"></i>
            </a>
          </div>
          
          <button 
            @click="scrollToContact"
            class="w-full py-4 bg-[#2F4F4F] text-white font-medium rounded-xl hover:bg-[#40b3b3] transition-all flex items-center justify-center gap-3"
          >
            <span>Me contacter</span>
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavLink {
  id: string
  text: string
  href: string
  icon: string
}

interface SocialLink {
  name: string
  url: string
  icon: string
}

// State
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

// Data - Navigation épurée
const navLinks: NavLink[] = [
  { id: 'home', text: 'Accueil', href: '#home', icon: 'fas fa-home' },
  { id: 'profil', text: 'Profil', href: '#profil', icon: 'fas fa-user' },
  { id: 'initiative', text: 'Initiatives', href: '#initiative', icon: 'fas fa-scale-balanced' },
  { id: 'galerie', text: 'Galerie', href: '#galerie', icon: 'fas fa-briefcase' },
//   { id: 'contact', text: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
]

// Data - Réseaux professionnels
const socialLinks: SocialLink[] = [
//   { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin-in' },
//   { name: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' },
//   { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' }
]

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'auto'
}

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
  activeSection.value = sectionId.slice(1)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  activeSection.value = 'home'
}

const scrollToContact = () => {
  scrollToSection('#contact')
}

const updateActiveSection = () => {
  const sections = navLinks.map(link => link.href.slice(1))
  const scrollPosition = window.scrollY + 100
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const top = element.offsetTop
      const bottom = top + element.offsetHeight
      
      if (scrollPosition >= top && scrollPosition < bottom) {
        activeSection.value = section
        break
      }
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  updateActiveSection()
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Animation douce pour le menu mobile */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

/* Transition douce pour tous les éléments */
.navigation-bar * {
  transition: all 0.2s ease;
}
</style>