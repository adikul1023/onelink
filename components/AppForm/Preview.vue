<template>
  <div class="h-screen grid place-items-center bg-white dark:bg-slate-900">
    <div
      class="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 dark:ring-slate-600 overflow-hidden"
    >
      <component :is="templateComponent" :acc="data" />
    </div>
  </div>
</template>
<script setup>
import TemplatesSimple from '../Templates/Simple.vue'
import TemplatesCard from '../Templates/Card.vue'
import TemplatesGradient from '../Templates/Gradient.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const templateComponents = {
  simple: TemplatesSimple,
  card: TemplatesCard,
  gradient: TemplatesGradient,
}

const templateComponent = computed(() => {
  return templateComponents[props.data.t] || TemplatesSimple
})
</script>
<style scoped></style>
