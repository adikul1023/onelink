<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click.self="close"
      >
        <div class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md h-[90vh] flex flex-col">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
              Preview Your Page
            </h3>
            <button
              @click="close"
              class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <icon name="ph:x-bold" class="h-6 w-6" />
            </button>
          </div>

          <!-- Preview Content -->
          <div class="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900">
            <div class="min-h-full">
              <component :is="templateComponent" :acc="data" />
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-2">
            <button
              @click="$emit('publish')"
              class="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <icon name="ph:check-bold" class="h-5 w-5" />
              <span>Looks Good - Publish</span>
            </button>
            <button
              @click="close"
              class="w-full px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
            >
              Make Changes
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import TemplatesSimple from './Templates/Simple.vue'
import TemplatesCard from './Templates/Card.vue'
import TemplatesGradient from './Templates/Gradient.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'publish'])

const templateComponents = {
  simple: TemplatesSimple,
  card: TemplatesCard,
  gradient: TemplatesGradient,
}

const templateComponent = computed(() => {
  return templateComponents[props.data.t] || TemplatesSimple
})

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from > div {
  transform: scale(0.95) translateY(20px);
}

.modal-leave-to > div {
  transform: scale(0.95) translateY(20px);
}
</style>
