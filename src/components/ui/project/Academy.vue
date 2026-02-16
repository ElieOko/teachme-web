<!-- views/projets/AcadEmyView.vue -->
 <script setup lang="ts">
import ProjectCTA from './ProjectCTA.vue'
import ProjectHero from './ProjectHero.vue'
import africa2 from '../../../assets/images/emy.jpeg'
import lawapp_01 from '../../../assets/images/app.jpeg'

// Piliers du concept
const piliers = [
  {
    titre: 'Premium',
    description: 'Une expérience d\'exception, des cadres inspirants, un accompagnement d\'excellence. Chaque détail est pensé pour révéler le meilleur.'
  },
  {
    titre: 'Humain',
    description: 'Au cœur du dispositif : la relation. Pas de cours magistraux, mais des dialogues, du mentorat, de l\'écoute. Chaque talent est unique.'
  },
  {
    titre: 'Intelligent',
    description: 'Des méthodes éprouvées, une pédagogie active, de l\'intelligence collective. On ne remplit pas des têtes, on allume des feux.'
  }
]

// Expériences formatives
const experiences = [
  {
    titre: 'Le parcours Révélation',
    description: 'Un voyage de 6 mois pour découvrir ses talents profonds, dépasser ses blocages et construire sa vision.',
    format: 'Format : individuel & collectif'
  },
  {
    titre: 'Les ateliers Impact',
    description: 'Des sessions intensives de 2 jours sur des compétences clés : leadership, communication, intelligence émotionnelle.',
    format: 'Format : collectif'
  },
  {
    titre: 'Le cercle des bâtisseurs',
    description: 'Un espace de coworking et de mentorat pour les porteurs de projets qui veulent passer à l\'action.',
    format: 'Format : continu'
  },
  {
    titre: 'Les masterclass Inspirations',
    description: 'Des rencontres exceptionnelles avec des personnalités inspirantes qui partagent leur parcours et leurs leçons de vie.',
    format: 'Format : mensuel'
  },
  {
    titre: 'Le lab Créatif',
    description: 'Un espace d\'expérimentation pour développer sa créativité et oser sortir du cadre.',
    format: 'Format : ateliers pratiques'
  },
  {
    titre: 'Le mentorat sur mesure',
    description: 'Un accompagnement individuel personnalisé, construit autour de vos objectifs spécifiques.',
    format: 'Format : sur mesure'
  }
]

// Témoignages
const temoignages = [
//   {
//     initials: 'MC',
//     nom: 'Marie-Claire',
//     parcours: 'Parcours Révélation 2024',
//     texte: 'Acad\'Emy m\'a permis de me découvrir moi-même. Je suis entrée avec des doutes, je repars avec une vision claire et la force d\'entreprendre.'
//   },
//   {
//     initials: 'JP',
//     nom: 'Jean-Paul',
//     parcours: 'Cercle des bâtisseurs',
//     texte: 'Ce n\'est pas une formation, c\'est une transformation. L\'approche humaine, l\'écoute, la qualité des échanges... Rien à voir avec ce que j\'ai connu ailleurs.'
//   }
]

// Facilitateurs
const facilitateurs = [
  {
    nom: 'Emy Mayumbi',
    role: 'Fondatrice & facilitatrice',
    photo: africa2
  },
//   {
//     nom: 'Marc Kalonji',
//     role: 'Facilitateur - Leadership',
//     photo: '/images/marc.jpg'
//   },
//   {
//     nom: 'Sarah Mbuyi',
//     role: 'Facilitatrice - Créativité',
//     photo: '/images/sarah.jpg'
//   }
]

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    const offset = 80 // Hauteur de ta navigation
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}
scrollToSection('#academy')
</script>
<template>
  <main class="bg-white" id="academy">
    <!-- Navigation (déjà existante) -->
    
    <!-- Hero Section - Révisée -->
    <ProjectHero
      projetName="Acad'Emy"
      projetCategory="Concept · Expériences formatives"
      projetTitle="Là où l'apprentissage devient une <span class='text-[#40b3b3]'>expérience</span>"
      projetDescription="Acad'Emy n'est pas une école. Ce n'est pas un centre de formation classique. C'est une académie d'expériences formatives, un espace premium, humain et intelligent où l'on apprend autrement. Ici, chaque parcours est unique, chaque apprenant est un talent à révéler."
      imageUrl="https://img.freepik.com/vecteurs-libre/gens-plats-organiques-formation-commerciale_23-2148909572.jpg"
      iconClass="fas fa-sparkles"
      statut="Concept vivant · Depuis 2023"
      :stats="[
        // { value: '500+', label: 'Talents accompagnés' },
        // { value: '15', label: 'Facilitateurs' },
        // { value: '4.8/5', label: 'Taux de révélation' }
      ]"
    
    />

    <!-- Section Philosophie - L'essence d'Acad'Emy -->
    <section id="philosophie" class=" bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <!-- Citation d'ouverture -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="text-6xl text-[#2F4F4F]/10 font-serif mb-4">"</div>
          <p class="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed">
            Acad'Emy n'enseigne pas, <span class="text-[#40b3b3] font-normal">elle révèle.</span>
          </p>
          <div class="w-12 h-px bg-gray-200 mx-auto mt-8"></div>
        </div>

        <!-- Concept expliqué -->
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div class="space-y-8">
            <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">Le concept</span>
            <h2 class="text-3xl md:text-4xl font-light text-gray-900">
              Une académie d'<span class="text-[#40b3b3]">expériences formatives</span>
            </h2>
            
            <div class="prose prose-lg text-gray-600 font-light space-y-6">
              <p>
                Acad'Emy est née d'une conviction profonde : l'apprentissage ne devrait pas être standardisé, 
                formaté, déshumanisé. Chaque individu porte en lui des talents uniques qui ne demandent 
                qu'à être révélés.
              </p>
              <p class="bg-white p-8 rounded-2xl border-l-4 border-[#2F4F4F]">
                <span class="font-medium text-gray-900">Ce que nous ne sommes pas :</span> un centre de formation classique, 
                une école avec des programmes figés, un lieu où l'on accumule des savoirs théoriques.
              </p>
              <p>
                <span class="font-medium text-gray-900">Ce que nous sommes :</span> un espace d'expérimentation, 
                un laboratoire humain où chaque parcours est co-construit, où l'intelligence collective 
                remplace le savoir descendant, où l'humain est au centre de tout.
              </p>
            </div>
          </div>

          <!-- Piliers du concept -->
          <div class="space-y-10">
            <div v-for="(pilier, index) in piliers" :key="index" class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#2F4F4F] to-[#40b3b3] flex items-center justify-center text-white font-light text-lg">
                  {{ index + 1 }}
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">{{ pilier.titre }}</h3>
                <p class="text-gray-600 font-light">{{ pilier.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Expériences (pas "programmes") -->
    <!-- <section id="experiences" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">Vivre l'expérience</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Des <span class="text-[#40b3b3]">parcours sur mesure,</span> pas des programmes
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
          <p class="mt-6 text-gray-500 max-w-2xl mx-auto">
            Ici, pas de cursus pré-défini. Chaque talent construit son propre chemin, accompagné par des facilitateurs.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(experience, index) in experiences" :key="index" 
               class="group bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-gray-100">
            <div class="text-5xl font-light text-[#2F4F4F]/10 group-hover:text-[#40b3b3]/20 transition-colors mb-6">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-4">{{ experience.titre }}</h3>
            <p class="text-gray-600 font-light">{{ experience.description }}</p>
            <div class="mt-6 pt-6 border-t border-gray-200/50">
              <span class="text-xs text-[#40b3b3]">{{ experience.format }}</span>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Section Témoignages - Ce qu'ils disent de leur expérience -->
    <!-- <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">Ce qu'ils disent</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Des <span class="text-[#40b3b3]">talents révélés</span>
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(temoignage, index) in temoignages" :key="index" 
               class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#2F4F4F] to-[#40b3b3] flex items-center justify-center text-white font-light text-xl">
                {{ temoignage.initials }}
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ temoignage.nom }}</h4>
                <p class="text-sm text-gray-500">{{ temoignage.parcours }}</p>
              </div>
            </div>
            <p class="text-gray-600 font-light italic leading-relaxed">"{{ temoignage.texte }}"</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Section L'équipe - Les facilitateurs -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">L'équipe</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Des <span class="text-[#40b3b3]">facilitateurs</span>, pas des professeurs
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-12">
          <div v-for="(facilitateur, index) in facilitateurs" :key="index" class="text-center">
            <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img :src="facilitateur.photo" :alt="facilitateur.nom" class="w-full h-full object-cover">
            </div>
            <h3 class="font-medium text-gray-900">{{ facilitateur.nom }}</h3>
            <p class="text-sm text-gray-500">{{ facilitateur.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA - Adapté -->
    <!-- Section CTA - Version avec email -->
    <ProjectCTA
    titre="Et si vous viviez l'expérience ?"
    description="Acad'Emy n'est pas un centre de formation à rejoindre, c'est une expérience à vivre. Réservez votre premier échange découverte."
    buttonText="Demander un échange découverte"
    email="emymayumbi94@gmail.com"
    :emailSubject="'Demande d\'échange découverte - Acad\'Emy'"
    :emailBody="'Bonjour,\n\nJe souhaite en savoir plus sur Acad\'Emy et réserver un échange découverte.\n\nMes coordonnées :\nNom : \nTéléphone : \n\nMerci d\'avance pour votre retour.\n\nCordialement'"
    />
    
    <!-- Footer (déjà existant) -->
  </main>
</template>
