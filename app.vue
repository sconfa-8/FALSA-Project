<script setup>
const email = ref()
const password = ref()

const {login,isLogged} = useAuth()

const submitLogin = () => {
  const isLogged = login(email.value,password.value)
}
</script>

<template>
  <div>
    <form class="flex flex-col gap-2 bg-slate-500" action="">
      <input  v-model="email" type="text">
      <input v-model="password" type="text">
      <button type="button" @click="submitLogin">Login</button>
    </form>
    {{ isLogged }}
  </div>
</template>
