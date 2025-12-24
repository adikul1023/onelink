<template>
  <div>
    <NuxtPage />
    <div class="toast-container">
      <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :message="toast.message"
        :description="toast.description"
        :type="toast.type"
        :duration="toast.duration"
        @close="remove(toast.id)"
      />
    </div>
  </div>
</template>

<script setup>
const { toasts, remove } = useToast()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - OneLink` : 'OneLink - Create Your Personal Link Page';
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { 
      name: 'description', 
      content: 'Create a beautiful personal link page to share all your social media profiles and important links in one place.' 
    },
    { name: 'format-detection', content: 'telephone=no' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'OneLink - Create Your Personal Link Page' },
    { property: 'og:description', content: 'Create a beautiful personal link page to share all your social media profiles and important links in one place.' },
    { property: 'og:site_name', content: 'OneLink' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'OneLink - Create Your Personal Link Page' },
    { name: 'twitter:description', content: 'Create a beautiful personal link page to share all your social media profiles and important links in one place.' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/favicon.svg' }
  ]
})
</script>
