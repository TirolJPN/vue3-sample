import { defineStore } from 'pinia'
// import { computed, ref } from 'vue'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      name: 'TirolJPN'
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    }
  }
})

// You can use reactive properties and methods to define a store object

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const name = ref('TirolJPN')
//   const doubleCount = computed(() => count.value * 2)
//   function increment () {
//     count.value++
//   }

//   return { count, name, doubleCount, increment }
// })
