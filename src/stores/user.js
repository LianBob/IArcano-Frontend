import { computed,ref, reactive } from 'vue'
import { defineStore } from 'pinia'


const Auth = {
  None:0,
  Simple:1,
  Full:2
}

export const useUser = defineStore('user', () => {
  
  let user = reactive(null)

  let levelAuth = ref(0)

let isSimpleAuth = computed(()=>{
    return levelAuth.value == Auth.Simple
  })
  let isFullAuth = computed(()=>{
    return levelAuth.value == Auth.Full
  })
  let isAuth = computed(()=>{
    return levelAuth.value == Auth.Full
  })

  let getUser = () => {}
  let removeUser = () => {}

  return {
    isSimpleAuth,
    isFullAuth,
    isAuth,
    user,
    getUser,
    removeUser
  }
})
