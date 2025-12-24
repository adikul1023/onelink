<template>
  <base-form-section
    title="Template Style"
    description="Choose how your page looks"
  >
    <div class="grid grid-cols-3 gap-4">
      <button
        v-for="template in templates"
        :key="template.id"
        @click="selectTemplate(template.id)"
        class="group relative aspect-[9/16] rounded-xl overflow-hidden border-2 transition-all"
        :class="[
          selectedTemplate === template.id
            ? 'border-indigo-600 dark:border-indigo-500 shadow-lg'
            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
        ]"
      >
        <div :class="template.bgClass" class="h-full w-full p-2 flex flex-col items-center justify-center space-y-2">
          <!-- Mini preview -->
          <div :class="template.avatarClass" class="w-8 h-8 rounded-full"></div>
          <div :class="template.textClass" class="w-12 h-1.5 rounded"></div>
          <div :class="template.textClass" class="w-16 h-1 rounded opacity-60"></div>
          <div class="flex gap-1 mt-1">
            <div :class="template.iconClass" class="w-3 h-3 rounded"></div>
            <div :class="template.iconClass" class="w-3 h-3 rounded"></div>
            <div :class="template.iconClass" class="w-3 h-3 rounded"></div>
          </div>
          <div :class="template.linkClass" class="w-full h-3 rounded mt-2"></div>
          <div :class="template.linkClass" class="w-full h-3 rounded"></div>
        </div>
        
        <!-- Selected indicator -->
        <div
          v-if="selectedTemplate === template.id"
          class="absolute top-2 right-2 bg-indigo-600 dark:bg-indigo-500 rounded-full p-1"
        >
          <icon name="ph:check-bold" class="h-3 w-3 text-white" />
        </div>
      </button>
    </div>
    
    <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">
      Preview your selection before publishing
    </p>
  </base-form-section>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: 'simple'
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedTemplate = ref(props.modelValue)

const templates = [
  {
    id: 'simple',
    name: 'Simple',
    bgClass: 'bg-white dark:bg-slate-900',
    avatarClass: 'bg-slate-200 dark:bg-slate-700',
    textClass: 'bg-slate-300 dark:bg-slate-600',
    iconClass: 'bg-slate-300 dark:bg-slate-600',
    linkClass: 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
  },
  {
    id: 'card',
    name: 'Card',
    bgClass: 'bg-slate-50 dark:bg-slate-900',
    avatarClass: 'bg-slate-300 dark:bg-slate-700',
    textClass: 'bg-slate-400 dark:bg-slate-600',
    iconClass: 'bg-slate-200 dark:bg-slate-700 rounded-md',
    linkClass: 'bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-md'
  },
  {
    id: 'gradient',
    name: 'Gradient',
    bgClass: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    avatarClass: 'bg-white/50 ring-2 ring-white/50',
    textClass: 'bg-white/70',
    iconClass: 'bg-white/30 rounded-full',
    linkClass: 'bg-white/30 backdrop-blur-sm rounded-lg'
  }
]

const selectTemplate = (templateId) => {
  selectedTemplate.value = templateId
  emit('update:modelValue', templateId)
}

watch(() => props.modelValue, (newValue) => {
  selectedTemplate.value = newValue
})
</script>
