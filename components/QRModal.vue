<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="close"
      >
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">
              Share Your Link
            </h3>
            <button
              @click="close"
              class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <icon name="ph:x-bold" class="h-6 w-6" />
            </button>
          </div>

          <div class="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 flex flex-col items-center space-y-4">
            <canvas ref="qrCanvas" class="rounded-lg"></canvas>
            <p class="text-sm text-slate-600 dark:text-slate-400 text-center">
              Scan this QR code to open your link
            </p>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-700 dark:text-slate-300">
              Your Link
            </label>
            <div class="flex space-x-2">
              <input
                :value="url"
                readonly
                class="flex-1 px-3 py-2 text-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                @click="copyUrl"
                class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <icon name="ph:copy-bold" class="h-5 w-5" />
              </button>
            </div>
          </div>

          <button
            @click="downloadQR"
            class="w-full px-4 py-3 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <icon name="ph:download-bold" class="h-5 w-5" />
            <span>Download QR Code</span>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import QRCode from 'qrcode'

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'copied'])

const qrCanvas = ref(null)
const { success } = useToast()

const generateQR = async () => {
  if (qrCanvas.value && props.url) {
    try {
      await QRCode.toCanvas(qrCanvas.value, props.url, {
        width: 256,
        margin: 2,
        color: {
          dark: '#1e293b',
          light: '#ffffff',
        },
      })
    } catch (error) {
      console.error('QR generation error:', error)
    }
  }
}

const copyUrl = () => {
  navigator.clipboard.writeText(props.url).then(() => {
    success("Copied!", "Link copied to clipboard")
    emit('copied')
  })
}

const downloadQR = () => {
  if (qrCanvas.value) {
    const url = qrCanvas.value.toDataURL('image/png')
    const link = document.createElement('a')
    link.download = 'onelink-qr-code.png'
    link.href = url
    link.click()
    success("Downloaded!", "QR code saved to your device")
  }
}

const close = () => {
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    nextTick(() => {
      generateQR()
    })
  }
})
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

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white {
  transform: scale(0.9);
}

.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>
