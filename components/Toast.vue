<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="visible"
        class="fixed top-4 right-4 z-50 max-w-sm bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 border border-slate-200 dark:border-slate-700 flex items-start space-x-3"
      >
        <div class="flex-shrink-0">
          <icon
            v-if="type === 'success'"
            name="ph:check-circle-fill"
            class="h-6 w-6 text-green-500"
          />
          <icon
            v-else-if="type === 'error'"
            name="ph:x-circle-fill"
            class="h-6 w-6 text-red-500"
          />
          <icon
            v-else
            name="ph:info-fill"
            class="h-6 w-6 text-blue-500"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
            {{ message }}
          </p>
          <p v-if="description" class="text-xs text-slate-600 dark:text-slate-400 mt-1">
            {{ description }}
          </p>
        </div>
        <button
          @click="close"
          class="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <icon name="ph:x-bold" class="h-4 w-4" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  message: String,
  description: String,
  type: {
    type: String,
    default: 'info', // 'success', 'error', 'info'
  },
  duration: {
    type: Number,
    default: 3000,
  },
})

const emit = defineEmits(['close'])

const visible = ref(true)
let timer = null

const close = () => {
  visible.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

onMounted(() => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close()
    }, props.duration)
  }
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
