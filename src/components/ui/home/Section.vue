<script setup lang="ts">
//@ts-ignore
import home_020 from '../../../assets/images/fleur.jpg'
import profile_emy from '../../../assets/images/emy.png'
import lawacademy_01 from '../../../assets/images/fleur.jpg'
import lawacademy_02 from '../../../assets/images/fleur.jpg'
// import lawapp_01 from '../../../assets/images/lawapp-1.jpg'
// import lawapp_02 from '../../../assets/images/lawapp-2.jpg'
// import eloquentia_01 from '../../../assets/images/eloquentia-1.jpg'
// import eloquentia_02 from '../../../assets/images/eloquentia-2.jpg'
// import clinique_mobile from '../../../assets/images/clinique-mobile.jpg'
// import dictionnaire from '../../../assets/images/emy.png'
import conference from '../../../assets/images/emy.png'

import { computed, ref } from 'vue'

// Données pour la galerie
const galleryImages = [
  { src: lawacademy_01, alt: "LawAcademy - Atelier en école", category: "LawAcademy" },
  { src: lawacademy_02, alt: "LawAcademy - Simulation de procès", category: "LawAcademy" },
  { src: "lawapp_01", alt: "LawApp50 - Présentation application", category: "LawApp50" },
  { src: "lawapp_02", alt: "LawApp50 - Équipe technique", category: "LawApp50" },
  { src: "eloquentia_01", alt: "Éloquentia - Concours d'éloquence", category: "Éloquentia" },
  { src: "eloquentia_02", alt: "Emy Mayumbi - Championne Éloquentia", category: "Éloquentia" },
  { src: "clinique_mobile", alt: "Clinique Juridique Mobile", category: "Impact Social" },
  { src: "dictionnaire", alt: "Dictionnaire Juridique Visuel", category: "Impact Social" },
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
// Statistiques animées
const stats = [
  { value: 100, suffix: "K+", label: "Abonnés", icon: "users", color: "#2F4F4F" },
  { value: 15, suffix: "M", label: "Vues/an", icon: "eye", color: "#40b3b3" },
  { value: 50, suffix: "", label: "Écoles", icon: "school", color: "#62dcdc" },
  { value: 6, suffix: "", label: "Prix & Distinctions", icon: "award", color: "#2F4F4F" }
]

// Timeline
const timeline = [
  { year: "2020", title: "Création TeachEmy", description: "Début de la vulgarisation juridique sur les réseaux sociaux" },
  { year: "2022", title: "LawAcademy", description: "Programme pilote dans 3 écoles de Kinshasa" },
  { year: "2023", title: "Championne Éloquentia", description: "1ère place au concours national d'éloquence" },
  { year: "2024", title: "LawApp50 Group", description: "Création de la Legal Tech et prix Jeune Talent" },
  { year: "2025", title: "Lancement LawApp50", description: "Déploiement national de l'application mobile" },
  { year: "2026", title: "Expansion régionale", description: "Ouverture des bureaux en Afrique de l'Ouest" }
]

// État pour la galerie

const activeCategory = ref('Tous')
const categories = ['Tous', 'LawAcademy', 'LawApp50', 'Éloquentia', 'Impact Social', 'Leadership']

const filteredImages = computed(() => {
  if (activeCategory.value === 'Tous') return galleryImages
  return galleryImages.filter(img => img.category === activeCategory.value)
})
</script>

<template>

<section id="initiative" class="py-16 md:py-28 bg-[#f0f9ff] relative overflow-hidden font-['Bricolage_Grotesk',system-ui,sans-serif]">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#f0f9ff,_transparent_50%)]"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#f0f9ff] rounded-full blur-3xl opacity-30"></div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    

    <div class="text-center max-w-3xl mx-auto mb-12 md:mb-20">
      <span class="inline-flex items-center gap-2 bg-[#f0f9ff] px-4 py-2.5 rounded-full text-[#0369a1] font-semibold text-sm tracking-wide mb-6">
        <span class="w-2 h-2 bg-[#0ea5e9] rounded-full"></span>
        Nos solutions
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0c4a6e] tracking-tight mb-6">
        Des <span class="bg-gradient-to-r from-[#0369a1] to-[#0284c7] bg-clip-text text-transparent">initiatives</span>
        <br class="hidden md:block" />pour démocratiser le droit
      </h2>
      <p class="text-lg md:text-xl text-[#334155] max-w-2xl mx-auto">
        LawApp50 Group développe des solutions concrètes pour rendre le droit accessible à tous, partout en RDC.
      </p>
    </div>

    <!-- Cartes style DWELT - numéros et structure -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

  <!-- Card 01 -->
  <article class="group relative bg-[#1F2A44] border border-gray-200 hover:border-gray-300 transition-colors duration-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md flex flex-col">
    <!-- top accent -->
    <div class="absolute top-0 left-0 w-16 h-0.5 bg-gray-300 group-hover:bg-gray-700 transition-colors"></div>

    <div class="p-8 md:p-10 flex flex-col h-full">
      <header class="flex items-center justify-between mb-6">
        <span class="font-mono tracking-wider text-2xl text-gray-400">01</span>
        <div class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
      </header>

      <h3 class="text-2xl md:text-3xl font-light text-white tracking-tight">LawAcademy</h3>
      <p class="mt-4 text-gray-300 text-base md:text-lg leading-relaxed font-light">
        Vulgarisation du droit en milieu scolaire. Former dès l’école les citoyens éclairés de demain.
      </p>

   

      <!-- <footer class="mt-auto pt-6 border-t border-gray-100">
        <a href="#"
           class="inline-flex items-center gap-2 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">
          Découvrir l’initiative
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </footer> -->
    </div>
  </article>

  <!-- Card 02 -->
  <article class="group relative bg-[#1F2A44] border border-gray-200 hover:border-gray-300 transition-colors duration-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md flex flex-col">
    <div class="absolute top-0 left-0 w-16 h-0.5 bg-gray-300 group-hover:bg-gray-700 transition-colors"></div>

    <div class="p-8 md:p-10 flex flex-col h-full">
      <header class="flex items-center justify-between mb-6">
        <span class="text-2xl font-mono tracking-wider text-gray-400">02</span>
        <div class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
        </div>
      </header>

      <h3 class="text-2xl md:text-3xl font-light text-white tracking-tight">LawApp50</h3>
      <p class="mt-4 text-gray-300 text-base md:text-lg leading-relaxed font-light">
        Application mobile juridique, codes juridiques, modèles de contrats et assistance.
      </p>
<!-- 
      <ul class="mt-8 space-y-3 text-sm text-gray-300">
        <li class="flex items-center">
          <span class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
          <span>Consultation juridique instantanée</span>
        </li>
        <li class="flex items-center">
          <span class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
          <span>Codes juridiques congolais actualisés</span>
        </li>
       
      </ul> -->

      
    </div>
  </article>

</div>

    
    <!-- Bouton "Voir tout" à la Dwelt -->
    <!-- <div class="text-center mt-12 md:mt-16">
      <a href="#" class="inline-flex items-center gap-2 bg-[#0c4a6e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0369a1] transition-all duration-300 shadow-lg hover:shadow-xl">
        <span>Découvrir toutes nos initiatives</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div> -->
  </div>
</section>


  <!-- Section Partenaires
  <section class="py-20 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="text-center mb-12">
        <span class="text-[#2F4F4F] font-semibold text-sm uppercase tracking-wider bg-[#2F4F4F]/10 px-4 py-2 rounded-full mb-4 inline-block">
          Ils nous font confiance
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Partenaires institutionnels et académiques</h2>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-center h-24">
          <span class="text-gray-400 font-semibold text-center">Ministère de la Justice</span>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-center h-24">
          <span class="text-gray-400 font-semibold text-center">Barreau de Kinshasa</span>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-center h-24">
          <span class="text-gray-400 font-semibold text-center">UNFPA</span>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-center h-24">
          <span class="text-gray-400 font-semibold text-center">Université de Kinshasa</span>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Section Contact et Newsletter -->
  <!-- <section class="py-20 bg-gradient-to-r from-[#2F4F4F] to-[#1a2f2f] text-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Restez informé(e)</h2>
          <p class="text-gray-300 text-lg mb-6">
            Recevez les actualités de LawApp50 Group, les dates des cliniques juridiques mobiles et les prochains ateliers LawAcademy.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              class="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#62dcdc]"
            />
            <button class="px-8 py-4 bg-[#62dcdc] text-[#2F4F4F] font-semibold rounded-xl hover:bg-white transition-all">
              S'abonner
            </button>
          </div>
          <p class="text-sm text-gray-400 mt-4">
            En vous inscrivant, vous acceptez de recevoir nos communications. Désabonnement possible à tout moment.
          </p>
        </div>
        
        <div class="flex flex-col items-end">
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-3xl w-full lg:w-auto">
            <h3 class="text-2xl font-bold mb-4">Contactez-nous</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-[#62dcdc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>contact@lawapp50.cd</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-[#62dcdc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+243 800 000 000</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-[#62dcdc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Kinshasa, Gombe - RDC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Footer -->
  <!-- <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="grid md:grid-cols-4 gap-12">
        <div>
          <h3 class="text-3xl font-bold mb-4">Teach<span class="text-[#62dcdc]">Emy</span></h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Juriste, Techpreneure.<br>
            Le droit compris, transmis et accessible à tous.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2F4F4F] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            
            <a href="">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#62dcdc] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.07c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.89-2.38c-.83.5-1.75.86-2.73 1.06a4.3 4.3 0 0 0-7.32 3.92 12.2 12.2 0 0 1-8.86-4.49 4.3 4.3 0 0 0 1.33 5.73 4.3 4.3 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.45 4.21c-.36.1-.74.15-1.13.15-.28 0-.55-.03-.82-.08a4.3 4.3 0 0 0 4.02 2.99 8.6 8.6 0 0 1-5.34 1.84c-.35 0-.69-.02-1.03-.06A12.2 12.2 0 0 0 11.9 20c8.1 0 12.53-6.71 12.53-12.53 0-.19 0-.38-.01-.57.86-.62 1.61-1.4 2.2-2.28l.05-.03z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2F4F4F] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.7 3H4.3C3.6 3 3 3.6 3 4.3v15.4c0 .7.6 1.3 1.3 1.3h15.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3zM8.3 18.7H5.7v-9h2.6v9zM7 8.3c-.8 0-1.5-.7-1.5-1.5S6.2 5.3 7 5.3s1.5.7 1.5 1.5S7.8 8.3 7 8.3zm11.7 10.4h-2.6v-4.8c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-2.6v-9h2.5v1.3c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.4v4.7z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-6">LawApp50 Group</h4>
          <ul class="space-y-4 text-gray-400">
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">LawAcademy</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">LawApp50</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Cliniques Juridiques Mobiles</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">LegalTech4Women</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Dictionnaire Juridique Visuel</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-6">Ressources</h4>
          <ul class="space-y-4 text-gray-400">
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Blog juridique</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">FAQ</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Devenir partenaire</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Presse</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Carrières</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-6">Légal</h4>
          <ul class="space-y-4 text-gray-400">
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Mentions légales</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">CGU</a></li>
            <li><a href="#" class="hover:text-[#62dcdc] transition-colors">Paramètres des cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">
          &copy; 2025 LawApp50 Group Sarlu. Tous droits réservés.
        </p>
        <p class="text-gray-500 text-sm mt-4 md:mt-0">
          Porté par <span class="text-[#62dcdc] font-semibold">Emy Mayumbi YIMPI (TeachEmy)</span>
        </p>
      </div>
    </div>
  </footer> -->
</template>

<style scoped>
/* Animations personnalisées */
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

@keyframes pulse-slower {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

@keyframes blob-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -20px) scale(1.05);
  }
}

.animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 4s ease-in-out infinite;
}

.animate-blob-slow {
  animation: blob-slow 12s ease-in-out infinite;
}

.animate-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Effets 3D */
.perspective-1000 {
  perspective: 1000px;
}

.group:hover .group-hover\:rotate-y-6 {
  transform: rotateY(6deg) translateZ(20px);
}

/* Transitions fluides */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Lightbox transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Masonry grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #2F4F4F;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #40b3b3;
}

/* Selection */
::selection {
  background: #2F4F4F;
  color: white;
}
</style>