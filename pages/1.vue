<template>
  <div 
    class="min-h-screen transition-colors duration-300"
    :class="pageBackgroundClass"
  >
    <component v-if="decodedData && !isLoading" :is="templateComponent" :acc="decodedData" />
    <base-skeleton-loader v-else-if="isLoading" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4"
    >
      <icon name="ph:warning-circle-bold" class="h-16 w-16 mx-auto text-slate-400" />
      <p class="text-slate-600 dark:text-slate-400">Invalid or missing link data</p>
      <NuxtLink to="/" class="text-indigo-600 hover:underline">Create your own link</NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { decodeData } from "../utils/transformer";
import TemplatesSimple from "../components/Templates/Simple.vue";
import TemplatesCard from "../components/Templates/Card.vue";
import TemplatesGradient from "../components/Templates/Gradient.vue";

const route = useRoute();
const acc = route.query.data;
const decodedData = ref({});
const isLoading = ref(true);

const templateComponents = {
  simple: TemplatesSimple,
  card: TemplatesCard,
  gradient: TemplatesGradient,
};

const templateComponent = computed(() => {
  return templateComponents[decodedData.value.t] || TemplatesSimple;
});

const pageBackgroundClass = computed(() => {
  const template = decodedData.value.t || 'simple';
  
  if (template === 'gradient') {
    return 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900';
  } else if (template === 'card') {
    return 'bg-slate-50 dark:bg-slate-900';
  } else {
    return 'bg-white dark:bg-slate-900';
  }
});

onMounted(() => {
  setTimeout(() => {
    decodedData.value = decodeData(acc);
    isLoading.value = false;
  }, 500); // Small delay to show skeleton
});

useHead({
  title: decodedData.value.n || 'View Profile',
  meta: [
    { name: 'description', content: decodedData.value.d || 'Personal link page' }
  ]
})
</script>
<style scoped></style>
