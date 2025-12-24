<template>
  <main class="p-4 h-full min-h-screen w-full space-y-6 pt-12 max-w-lg mx-auto transition-colors duration-300">
    <div class="text-center animate-fade-in">
      <div
        v-if="acc.i"
        class="h-24 w-24 rounded-2xl overflow-hidden shadow-xl mx-auto transition-all duration-300 hover:scale-105"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-3xl font-bold mt-4 text-slate-800 dark:text-slate-100">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600 dark:text-slate-400">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap text-slate-700 gap-2"
    >
      <span v-if="acc.f">
        <a :href="acc.f" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.tw">
        <a :href="acc.tw" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.ig">
        <a :href="acc.ig" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.tg">
        <a :href="acc.tg" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:telegram-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.w">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:whatsapp-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.y">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:youtube-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.e">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:envelope-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.gh">
        <a :href="acc.gh" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:github-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.l">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
    </div>
    <ul class="space-y-3">
      <li v-for="(link, id) in acc.ls" :key="id">
        <nuxt-link v-if="link.l && link.u" :to="link.u" target="_blank">
          <div class="group relative bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800 hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:to-slate-700 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 shadow-sm">
                <icon v-if="link.i" :name="link.i" class="h-6 w-6" />
                <icon v-else name="ph:link-simple" class="h-6 w-6" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-base text-slate-900 dark:text-slate-100 truncate">
                  {{ link.l }}
                </p>
              </div>
              <icon name="ph:arrow-right-bold" class="h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.tw &&
    !props.acc.ig &&
    !props.acc.gh &&
    !props.acc.tg &&
    !props.acc.l &&
    !props.acc.e &&
    !props.acc.w &&
    !props.acc.y
  );
});
</script>
<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>
