import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
    state: () => {
        return {
            num: 0
        }
    },
    getters: {
        testStore() {
            return this.num
        }
    },
    actions: {
        changeNumFn(newVal) {
            this.num = newVal
        }
    },
    persist: {
        storage: sessionStorage
    }
})
