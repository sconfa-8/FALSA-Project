<script setup lang="ts">
definePageMeta({
  layout: 'login',
})
const email = ref('MarioRossi')
const password = ref('Ciao123!')

const { login, isLogged } = useAuth()

const submitLogin = () => {
  const response = login(email.value, password.value)
  if(!response.status){
    //TODO handle error feedback
    return
  }
  if(response.isHR){
    navigateTo('hr')
  }
  else{
    navigateTo('user')
  }
}
</script>

<template>
  <div>
    <form class="flex flex-col gap-2 bg-slate-500" >
      <input v-model="email" type="text" />
      <input type="password" v-model="password" />
      <button type="button" @click="submitLogin">Login</button>
    </form>
  </div>
</template>
