<template>
  <li>
    <nuxt-link :to="url" target="_blank" v-if="label && url">
      <dt
        class="flex items-center space-x-2 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 transition-colors"
      >
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 dark:text-slate-300"
        >
          <icon v-if="icon" :name="icon" class="h-5 w-5" />
          <icon v-else name="ph:link-simple" class="h-5 w-5" />
        </div>
        <div class="w-full flex-grow min-w-0">
          <p class="font-medium text-sm leading-6 text-gray-900 dark:text-slate-200">
            {{ label }}
          </p>
        </div>
      </dt>
    </nuxt-link>
  </li>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "ph:link-simple",
  },
});
</script>
