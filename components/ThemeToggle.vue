<template>
  <button
    @click="toggleTheme"
    class="h-12 flex items-center space-x-2 px-4 border-r dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span>{{ isDark ? 'Light' : 'Dark' }} Mode</span>
    <icon v-if="isDark" name="ph:sun-bold" class="h-4 w-4" />
    <icon v-else name="ph:moon-bold" class="h-4 w-4" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
