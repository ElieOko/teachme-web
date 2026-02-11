<script setup lang="ts">
//@ts-ignore
import profile from '../../../assets/images/profile.jpeg'




</script>

<template>
   <section class="py-24 bg-[#f0f9ff]" id="profil">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    
    <!-- Header minimaliste -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Présentation</span>
      <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4 tracking-tight">
        Profil
      </h2>
      <div class="w-12 h-px bg-gray-300 mx-auto"></div>
      <p class="mt-6 text-gray-500 text-lg font-light">
        Une vision engagée à la croisée du droit, de l'éducation et de l'innovation.
      </p>
    </div>

    <!-- Profile Card - Élégante et aérée -->
    <div class="bg-white rounded-none md:rounded-2xl border-t md:border border-gray-200 shadow-sm">
      <div class="grid lg:grid-cols-3 gap-0 lg:gap-12">
        
        <!-- Image - Pleine largeur sur mobile -->
        <div class="lg:col-span-1 h-full">
          <div class="relative h-80 lg:h-full w-full bg-gray-100">
            <!-- Image réelle (remplacer src) -->
            <img 
              :src="profile" 
              alt="Emy Mayumbi Yimpi"
              class="w-full h-full object-cover object-center lg:rounded-l-2xl"
            />
            <!-- Overlay très léger -->
            <div class="absolute inset-0 bg-black/5 lg:rounded-l-2xl"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="lg:col-span-2 p-8 md:p-12 lg:p-14">
          <!-- Badge ou identifiant discret -->
          <div class="flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-gray-300"></span>
            <span class="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium">Founder & CEO</span>
          </div>
          
          <!-- Nom et titre -->
          <h3 class="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
            Emy Mayumbi Yimpi
          </h3>
          <p class="text-base text-gray-500 font-light mb-8 max-w-2xl">
            Conseillère juridique · Techpreneure · Créatrice de contenu
          </p>

          <!-- Bio - Texte aéré et hiérarchisé -->
          <div class="space-y-6 text-gray-600 leading-relaxed">
            <p class="text-base md:text-lg font-light">
              <span class="font-medium text-gray-900">TeachEmy</span>, pseudonyme sous lequel elle fédère une communauté de 
              <span class="font-medium text-gray-900">plus de 100 000 personnes</span>, incarne une nouvelle génération de juristes engagés dans la transmission.
            </p>

            <p class="text-base md:text-lg font-light">
              Conseillère juridique et techpreneure basée à Kinshasa, elle construit des ponts entre le savoir juridique, 
              l'éducation et l'innovation numérique. Son travail s'articule autour de l'impact social et de l'autonomisation des femmes.
            </p>

            <!-- Initiatives - Format discret mais structuré -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div class="border-l border-gray-200 pl-4">
                <div class="text-xs uppercase tracking-wider text-gray-400 mb-1">Fondatrice</div>
                <div class="font-medium text-gray-900">LawAcademy</div>
                <div class="text-sm text-gray-500 mt-1">Vulgarisation juridique en milieu scolaire</div>
              </div>
              <div class="border-l border-gray-200 pl-4">
                <div class="text-xs uppercase tracking-wider text-gray-400 mb-1">Directrice Générale</div>
                <div class="font-medium text-gray-900">LawApp50 Group SARLU</div>
                <div class="text-sm text-gray-500 mt-1">Première Legal Tech congolaise</div>
              </div>
            </div>

            <p class="text-base md:text-lg font-light">
              Championne <span class="font-medium text-gray-900">Éloquentia</span>, elle fait de la prise de parole un outil de transmission 
              et de transformation sociale.
            </p>
          </div>

          <!-- Signature et réseaux -->
          <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div class="flex items-center gap-3">
              <span class="text-3xl text-gray-300 italic font-serif">"</span>
              <span class="text-gray-500 italic text-sm font-light max-w-md">
                Transmettre, innover et impacter durablement.
              </span>
            </div>
            
            <!-- Réseaux discrets -->
            <div class="flex items-center gap-5">
              <!-- <a href="#" class="text-gray-400 hover:text-gray-700 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-700 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a> -->
              <a href="https://cd.linkedin.com/in/emy-mayumbi-092834302" class="text-gray-400 hover:text-gray-700 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.7 3H4.3C3.6 3 3 3.6 3 4.3v15.4c0 .7.6 1.3 1.3 1.3h15.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3zM8.3 18.7H5.7v-9h2.6v9zM7 8.3c-.8 0-1.5-.7-1.5-1.5S6.2 5.3 7 5.3s1.5.7 1.5 1.5S7.8 8.3 7 8.3zm11.7 10.4h-2.6v-4.8c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-2.6v-9h2.5v1.3c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.4v4.7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>