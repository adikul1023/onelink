<template>
  <main class="relative p-4 h-full min-h-screen w-full space-y-6 pt-16 max-w-lg mx-auto overflow-hidden">
    <!-- Decorative circles -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    
    <div class="relative z-10 text-center animate-fade-in">
      <div
        v-if="acc.i"
        class="h-24 w-24 rounded-full overflow-hidden ring-4 ring-white/50 mx-auto transition-all duration-300 hover:scale-110 shadow-2xl"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-3xl font-bold mt-4 text-white drop-shadow-lg">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-white/90">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="relative z-10 flex items-center justify-center flex-wrap gap-2"
    >
      <span v-if="acc.f">
        <a :href="acc.f" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:facebook-logo-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.tw">
        <a :href="acc.tw" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:twitter-logo-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.ig">
        <a :href="acc.ig" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:instagram-logo-fill" class="h-5 w-5" />
        </a>
      </span>

      <span v-if="acc.tg">
        <a :href="acc.tg" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:telegram-logo-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.w">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:whatsapp-logo-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.y">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:youtube-logo-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.e">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:envelope-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.gh">
        <a :href="acc.gh" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:github-logo-fill" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.l">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer" class="flex items-center justify-center h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all text-white">
          <icon name="ph:linkedin-logo-fill" class="h-5 w-5" />
        </a>
      </span>
    </div>
    <ul class="relative z-10 space-y-3">
      <li v-for="(link, id) in acc.ls" :key="id">
        <nuxt-link v-if="link.l && link.u" :to="link.u" target="_blank">
          <div class="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl p-4 border border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white/30 text-white">
                <icon v-if="link.i" :name="link.i" class="h-5 w-5" />
                <icon v-else name="ph:link-simple" class="h-5 w-5" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-white truncate">
                  {{ link.l }}
                </p>
              </div>
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
