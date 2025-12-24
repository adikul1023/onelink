<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center p-4">
    <div class="text-center space-y-6 max-w-md">
      <div class="text-9xl">🔗</div>
      <h1 class="text-4xl font-bold text-slate-800 dark:text-slate-100">
        404 - Page Not Found
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist or the link might be broken.
      </p>
      <NuxtLink
        to="/"
        class="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
      >
        <icon name="ph:arrow-left-bold" class="h-5 w-5" />
        <span>Create Your Own Link Page</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '404 - Page Not Found'
})
</script>
