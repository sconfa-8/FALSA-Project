<script setup>
const email = ref('MarioRossi')
const password = ref('Ciao123!')

const { login, isLogged } = useAuth()

const submitLogin = () => {
  login(email.value, password.value)
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
