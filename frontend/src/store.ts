import { defineStore } from 'pinia'

import { computed, ref } from 'vue'

export type Store = ReturnType<typeof useStore>

export const useStore = defineStore('app', () => {
    
    const token = ref<string>()

    const isLogin = computed(() => !!token.value)

    return { token, isLogin }
}, {
    // @ts-ignore
    persist: {
        enabled: true,
        strategies: [{
            key: "app",
            storage: localStorage
        }]
    }   
})
