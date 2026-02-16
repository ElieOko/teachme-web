
<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-6">{{ titre }}</h2>
      <p class="text-lg text-gray-600 font-light mb-10 max-w-2xl mx-auto">{{ description }}</p>
      
      <!-- Lien mailto direct -->
      <a 
        :href="`mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`"
        class="inline-flex items-center gap-3 px-10 py-5 bg-[#2F4F4F] text-white text-base font-medium rounded-full hover:bg-[#40b3b3] transition-all duration-300 shadow-sm hover:shadow-md group"
      >
        <span>{{ buttonText }}</span>
        <i class="fas fa-paper-plane text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
      </a>
      
      <!-- Petit texte optionnel -->
      <p class="text-xs text-gray-400 mt-4">
        Réponse sous 24-48h
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  titre: string
  description: string
  buttonText: string
  email?: string
  emailSubject?: string
  emailBody?: string
}

const props = withDefaults(defineProps<Props>(), {
  email: 'contact@emyyimpi.com',
  emailSubject: 'Prise de contact - Site web',
  emailBody: 'Bonjour,\n\nJe vous contacte suite à ma visite sur votre site web.\n\nCordialement'
})
</script>