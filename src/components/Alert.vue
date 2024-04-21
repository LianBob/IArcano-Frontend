<template>
  <Teleport to="#toTeleport">
    <div
      v-if="isShow"
      id="alert-4"
      :class="typeAlert.text"
      class="flex items-center p-4 mb-4 rounded-lg mt-2 dark:bg-[hsl(221,39%,18%)]"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div class="ms-3 text-sm font-medium">
        <slot />
      </div>
      <button
        @click="isShow = false"
        type="button"
        :class="typeAlert.btn"
        class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-4"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref } from 'vue'

let isShow = ref(true)

let props = defineProps({
  type: {
    type: String,
    default: 'info'
  }
})

const typeAlertSchema = {
  danger: {
    text: ['text-red-800', 'bg-red-50', 'dark:text-red-300'],
    btn: [
      'bg-red-50',
      'text-red-500',
      'focus:ring-red-400',
      'hover:bg-red-200',
      'dark:text-red-300'
    ]
  },
  info: {
    text: ['text-blue-800', 'bg-blue-50', 'dark:text-blue-300'],
    btn: [
      'bg-blue-50',
      'text-blue-500',
      'focus:ring-blue-400',
      'hover:bg-blue-200',
      'dark:text-blue-300'
    ]
  }
}

let typeAlert = computed(() => {
  return typeAlertSchema[props.type]
})
</script>

<style lang="scss" scoped></style>
