<template>
  <main class="p-4 h-full min-h-screen w-full space-y-8 pt-12 max-w-lg mx-auto transition-colors duration-300">
    <div class="text-center animate-fade-in">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 dark:ring-slate-700 mx-auto transition-all duration-300 hover:scale-105"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800 dark:text-slate-100">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600 dark:text-slate-400">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap text-slate-700"
    >
      <span v-if="acc.f" class="p-1">
        <a :href="acc.f" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.tw" class="p-1">
        <a :href="acc.tw" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.ig" class="p-1">
        <a :href="acc.ig" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.tg" class="p-1">
        <a :href="acc.tg" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:telegram-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.w" class="p-1">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:whatsapp-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.y" class="p-1">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:youtube-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.e" class="p-1">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:envelope-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.gh" class="p-1">
        <a :href="acc.gh" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:github-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.l" class="p-1">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
        </a>
      </span>      <span v-if="acc.l" class="p-1">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
        </a>
      </span>    </div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
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
    !props.acc.m &&
    !props.acc.tg &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.gh &&
    !props.acc.l
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
