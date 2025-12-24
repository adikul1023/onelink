import { ref } from 'vue'

const toasts = ref([])
let id = 0

export const useToast = () => {
  const show = (message, options = {}) => {
    const toast = {
      id: id++,
      message,
      description: options.description || '',
      type: options.type || 'info',
      duration: options.duration || 3000,
    }
    
    toasts.value.push(toast)
    
    return toast.id
  }

  const success = (message, description) => {
    return show(message, { type: 'success', description })
  }

  const error = (message, description) => {
    return show(message, { type: 'error', description })
  }

  const info = (message, description) => {
    return show(message, { type: 'info', description })
  }

  const remove = (toastId) => {
    const index = toasts.value.findIndex(t => t.id === toastId)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  return {
    toasts,
    show,
    success,
    error,
    info,
    remove,
  }
}
