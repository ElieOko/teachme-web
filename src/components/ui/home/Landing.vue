<script setup lang="ts">
//@ts-ignore
import portait from '../../../assets/images/fleur.jpg'
import portrait from '../../../assets/images/emy.png'
//https://wallspic.com/fr/topic/windows_wallpapers
</script>
<template>
     <!-- Hero Section avec animation améliorée -->
  <div id="home" class="relative min-h-[100dvh] flex items-center justify-center bg-cover bg-center overflow-hidden"
    :style="{
      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 100%), url(${portait})`
    }"
  >
    <!-- Particules animées -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-2 h-2 bg-white/20 rounded-full animate-ping-slow top-1/4 left-1/4"></div>
      <div class="absolute w-3 h-3 bg-[#40b3b3]/30 rounded-full animate-blob-slow top-3/4 left-2/3"></div>
      <div class="absolute w-4 h-4 bg-[#62dcdc]/20 rounded-full animate-pulse-slow top-1/3 left-3/4"></div>
      <div class="absolute w-2 h-2 bg-[#2F4F4F]/40 rounded-full animate-float-slow top-2/3 left-1/5"></div>
    </div>

    <div class="w-full max-w-screen-xl px-4 sm:px-6 lg:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-20 py-20 sm:py-32">
      
      <!-- Texte avec animations séquentielles -->
      <div class="flex flex-col justify-center text-center lg:text-left space-y-6 sm:space-y-8">
        <div class="overflow-hidden">
          <h1 class="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight animate-slide-up">
            Teach<span class="text-[#62dcdc]">Emy</span>
          </h1>
        </div>
        <div class="overflow-hidden">
          <p class="text-white text-xl sm:text-2xl md:text-3xl font-light animate-slide-up animate-delay-200">
            Juriste, Techpreneure,<br> 
            <span class="font-semibold bg-gradient-to-r from-[#62dcdc] to-[#40b3b3] bg-clip-text text-transparent">Championne Éloquentia</span>
          </p>
        </div>
        
        <!-- Badges de reconnaissance -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in animate-delay-400">
          <span class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
            🇨🇩 RDC
          </span>
          <span class="px-4 py-2 bg-[#2F4F4F]/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            Legal Tech
          </span>
          <span class="px-4 py-2 bg-[#40b3b3]/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            +100K apprenants
          </span>
        </div>

        <div class="overflow-hidden">
          <p class="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed animate-slide-up animate-delay-300 max-w-2xl">
            <span class="text-[#62dcdc] font-semibold">« Le droit compris, transmis et accessible à tous. »</span><br>
            Engagée dans la démocratisation du savoir juridique par l'éducation, le numérique et l'innovation sociale.
          </p>
        </div>

        <!-- Call to actions -->
        <!-- <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-500">
          <button class="px-8 py-4 bg-gradient-to-r from-[#2F4F4F] to-[#40b3b3] text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>Découvrir LawApp50</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <button class="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Voir les réalisations
          </button>
        </div> -->
      </div>

      <!-- Image portrait avec halo animé -->
      <div class="relative flex justify-center items-center">
        <!-- Halos animés -->
        <div class="absolute w-64 h-64 bg-[#2F4F4F] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute w-80 h-80 bg-[#40b3b3] opacity-10 rounded-full blur-3xl animate-pulse-slower"></div>
        
        <!-- Cadre décoratif -->
        <div class="relative z-10 group">
          <div class="absolute inset-0 bg-gradient-to-r from-[#62dcdc] to-[#2F4F4F] rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <img
            class="relative z-10 w-72 sm:w-80 md:w-96 rounded-2xl shadow-2xl object-cover border-4 border-white/10 animate-float"
            :src="portrait"
            alt="Emy Mayumbi YIMPI - TeachEmy"
          />
          
          <!-- Badge flottant -->
          <div class="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl z-20 animate-float-slow">
            <p class="text-[#2F4F4F] font-bold text-sm">Fondatrice</p>
            <p class="text-gray-700 text-xs">LawApp50 Group</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vague décorative -->
    <div class="absolute bottom-0 left-0 right-0 text-[#f0f9ff]">
      <svg class="w-full h-24 sm:h-32 lg:h-48" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"/>
      </svg>
    </div>
  </div>
</template>
<style scoped>

/* Animation pour les slides */
.swiper-slide {
  transition: transform 0.3s ease;
}

.swiper-slide-active {
  transform: scale(1.02);
}

/* Effet d'ombre amélioré pour les cards */
.shadow-xl {
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .swiper-slide-active {
    transform: none; /* Désactiver le zoom sur mobile */
  }
}

/* Animation de progression */
@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.progress-bar {
  animation: progress 5s linear infinite;
}

/* Styles pour les boutons de navigation */
.nav-button {
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-button:hover {
  background: #2F4F4F;
  color: white;
  transform: scale(1.1);
}





/* Pour rendre le texte lisible et le bouton bien en vue */
.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  opacity: 1 !important;
  background: #2F4F4F !important;
}



@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Nouveaux styles pour les cartes améliorées */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation d'entrée améliorée */
@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Effet de brillance au survol */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Transition pour les overlays */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Style pour le dégradé de prix */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Amélioration des ombres */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Backdrop blur pour le support moderne */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  .p-6 {
    padding: 1rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}



/* Fade in up */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp 1s forwards; }
.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
.animate-delay-400 { animation-delay: 0.4s; }

/* Style personnalisé pour le range input */
.slider-thumb {
  -webkit-appearance: none;
  background: linear-gradient(to right, #f59e0b, #f59e0b);
  background-size: 0% 100%;
  background-repeat: no-repeat;
}

.slider-thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  background: #f59e0b;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: all 0.2s ease;
}

.slider-thumb::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.slider-thumb::-moz-range-thumb {
  width: 22px;
  height: 22px;
  background: #f59e0b;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: all 0.2s ease;
}

.slider-thumb::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.slider-thumb::-webkit-slider-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
}

.slider-thumb::-moz-range-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
  border: none;
}

/* Animation pour l'apparition des cartes */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-appear {
  animation: cardAppear 0.6s ease-out forwards;
}

/* Transition pour le panel mobile */
.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  opacity: 0;
}

.mobile-panel-content-enter-active,
.mobile-panel-content-leave-active {
  transition: transform 0.3s ease;
}

.mobile-panel-content-enter-from,
.mobile-panel-content-leave-to {
  transform: translateY(100%);
}
@keyframes blobSlow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -50px) scale(1.05); }
}

@keyframes blobFast {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, 20px) scale(1.03); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.animate-blob-slow {
  animation: blobSlow 12s ease-in-out infinite;
}

.animate-blob-fast {
  animation: blobFast 15s ease-in-out infinite;
}

.animate-gradient-text {
  background-size: 200% auto;
  animation: gradient 4s ease infinite alternate;
}

/* Effets 3D et transitions */
.perspective-1000 {
  perspective: 1000px;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .text-5xl.md\:text-6xl {
    font-size: 2.5rem;
  }
}


</style>