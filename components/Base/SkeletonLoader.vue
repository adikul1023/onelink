<template>
  <div class="animate-pulse space-y-8 p-4 pt-12">
    <!-- Profile skeleton -->
    <div class="text-center space-y-4">
      <div class="h-20 w-20 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto"></div>
      <div class="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
      <div class="h-4 w-48 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
    </div>

    <!-- Social icons skeleton -->
    <div class="flex items-center justify-center space-x-4">
      <div v-for="i in 6" :key="i" class="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-700"></div>
    </div>

    <!-- Links skeleton -->
    <div class="space-y-2">
      <div v-for="i in 4" :key="i" class="h-14 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
    </div>
  </div>
</template>
