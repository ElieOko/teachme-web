<!-- views/projets/BaruaView.vue -->
<script setup lang="ts">
import africa2 from '../../../assets/images/emy.jpeg'
import ProjectCTA from './ProjectCTA.vue'
import ProjectHero from './ProjectHero.vue'


// Piliers de Barua
const piliers = [
  {
    titre: 'Centralisation',
    description: 'Tous vos documents administratifs regroupés en un seul endroit, accessibles instantanément depuis n\'importe quel appareil.'
  },
  {
    titre: 'Sécurisé',
    description: 'Conformité avec les normes de protection des données.'
  },
  {
    titre: 'Intelligent',
    description: 'Moteur de recherche avancé, classification automatique.'
  }
]

// Fonctionnalités clés
const fonctionnalites = [
//   {
//     titre: 'Scan & Numérisation',
//     description: 'Numérisez vos documents en un clic depuis votre téléphone ou votre scanner.',
//     icon: 'fas fa-qrcode'
//   },
  {
    titre: 'Recherche instantanée',
    description: 'Trouvez n\'importe quel document en quelques secondes grâce à notre moteur de recherche.',
    icon: 'fas fa-search'
  },
  {
    titre: 'Partage contrôlé',
    description: 'Partagez vos documents en toute sécurité avec des droits d\'accès personnalisés.',
    icon: 'fas fa-share-alt'
  },
//   {
//     titre: 'Signature électronique',
//     description: 'Signez vos documents légalement, où que vous soyez.',
//     icon: 'fas fa-signature'
//   },
  {
    titre: 'Historique complet',
    description: 'Toutes les modifications tracées, toutes les versions conservées.',
    icon: 'fas fa-history'
  },
  {
    titre: 'Application mobile',
    description: 'Accédez à vos documents partout, même hors-ligne.',
    icon: 'fas fa-mobile-alt'
  }
]

// Cas d'usage
const casUsage = [
  {
    titre: 'Particuliers',
    description: 'Centralisez vos documents personnels : CNI, passeport, diplômes, contrats, factures...',
    icon: 'fas fa-user'
  },
  {
    titre: 'Professionnels',
    description: 'Gérez les dossiers clients, contrats fournisseurs, documents comptables.',
    icon: 'fas fa-briefcase'
  },
  {
    titre: 'Institutions',
    description: 'Solution sur mesure pour les administrations et grandes organisations.',
    icon: 'fas fa-building'
  }
]

// Témoignages
const temoignages = [
  // {
  //   initials: 'MM',
  //   nom: 'Marie M.',
  //   role: 'Particulière',
  //   texte: 'Barua m\'a sauvé la vie ! Plus jamais je ne perds mes documents importants. Tout est classé, accessible, sécurisé.'
  // },
  // {
  //   initials: 'PK',
  //   nom: 'Pierre K.',
  //   role: 'Chef d\'entreprise',
  //   texte: 'La gestion de mes dossiers clients est devenue un jeu d\'enfant. Gain de temps énorme et tranquillité d\'esprit.'
  // }
]

// Équipe
const equipe = [
  {
    nom: 'Emy Mayumbi',
    role: 'Fondatrice & Directrice',
    photo: africa2
  }
]

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}
scrollToSection('#barua')
</script>

<template>
  <main class="bg-white" id="barua">
    
    <!-- Hero Section -->
    <ProjectHero
      projetName="Barua"
      projetCategory="Solution · Numérisation documentaire"
      projetTitle="Vos documents <span class='text-[#40b3b3]'>centralisés,</span> votre esprit libéré"
      projetDescription="Barua est une solution digitale qui permet de numériser et centraliser tous les documents administratifs. Finis les classeurs poussiéreux et les dossiers éparpillés. Une plateforme simple, sécurisée et accessible partout."
      imageUrl="https://actualitte.com/uploads/images/livre-numerique-numerisation-digital-book-ereader-liseuse-60c2284f4710a437685873.jpg"
      iconClass="fas fa-folder-open"
      statut="En développement · Lancement 2025"
      :stats="[
        // { value: '10k+', label: 'Documents traités' },
        // { value: '98%', label: 'Sécurisé' },
        // { value: '24/7', label: 'Disponible' }
      ]"
    />

    <!-- Section Problématique -->
    <section class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">Le constat</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Trop de papiers, <span class="text-[#40b3b3]">pas assez de temps</span>
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div class="space-y-8">
            <div class="prose prose-lg text-gray-600 font-light space-y-6">
              <p>
                En République Démocratique du Congo, la gestion des documents administratifs reste un défi quotidien pour des milliers de citoyens et d'entreprises.
              </p>
              <p class="bg-white p-8 rounded-2xl border-l-4 border-[#2F4F4F]">
                <span class="font-medium text-gray-900">Les problèmes :</span> dossiers perdus, classements archaïques, risques de falsification, perte de temps considérable dans les recherches.
              </p>
              <p>
                <span class="font-medium text-gray-900">Barua est née de ce constat :</span> offrir à chacun la possibilité de gérer ses documents de manière simple, sécurisée et moderne.
              </p>
            </div>
          </div>

          <!-- Piliers de la solution -->
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

    <!-- Section Fonctionnalités -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">Fonctionnalités</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Tout ce dont vous avez <span class="text-[#40b3b3]">besoin</span>
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in fonctionnalites" :key="index" 
               class="group bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-gray-100">
            <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#2F4F4F]/10 to-[#40b3b3]/10 flex items-center justify-center mb-6 group-hover:from-[#2F4F4F] group-hover:to-[#40b3b3] transition-all duration-500">
              <i :class="[feature.icon, 'text-2xl text-[#2F4F4F] group-hover:text-white transition-colors']"></i>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-3">{{ feature.titre }}</h3>
            <p class="text-gray-600 font-light">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Cas d'usage -->
    <section class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">Cas d'usage</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Pour <span class="text-[#40b3b3]">qui</span> ?
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(cas, index) in casUsage" :key="index" 
               class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all text-center">
            <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#2F4F4F]/10 to-[#40b3b3]/10 flex items-center justify-center mb-6">
              <i :class="[cas.icon, 'text-2xl text-[#2F4F4F]']"></i>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-3">{{ cas.titre }}</h3>
            <p class="text-gray-600 font-light">{{ cas.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Équipe -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-[0.2em] text-[#2F4F4F]/60 font-medium">L'équipe</span>
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mt-6 mb-4">
            Derrière <span class="text-[#40b3b3]">Barua</span>
          </h2>
          <div class="w-12 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-12">
          <div v-for="(membre, index) in equipe" :key="index" class="text-center">
            <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img :src="membre.photo" :alt="membre.nom" class="w-full h-full object-cover">
            </div>
            <h3 class="font-medium text-gray-900">{{ membre.nom }}</h3>
            <p class="text-sm text-gray-500">{{ membre.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <ProjectCTA
      titre="Prêt à digitaliser vos documents ?"
      description="Demandez une démo personnalisée dès aujourd'hui et découvrez comment Barua peut transformer votre gestion documentaire."
      buttonText="Demander une démo"
      email="emymayumbi94@gmail.com"
      :emailSubject="'Demande de démo - Barua'"
      :emailBody="'Bonjour,\n\nJe souhaite découvrir Barua et ses fonctionnalités. Pourriez-vous me contacter pour organiser une démonstration ?\n\nMes coordonnées :\nNom : \nTéléphone : \n\nDans l\'attente de votre retour.\n\nCordialement'"
    />
    
  </main>
</template>