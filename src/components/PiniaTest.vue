<template>
  <div>
    <div>{{name}}</div>
    <div>{{count}}</div>
    <button @click="buttonClickHandler">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup () {
    const store = useStore()
    const { name, count, doubleCount } = storeToRefs(store)
    const { increment } = store

    return {
      name,
      count,
      doubleCount,
      increment
    }
  },
  name: 'PiniaTest',
  methods: {
    buttonClickHandler () {
      this.increment()
    }
  }
})
</script>
