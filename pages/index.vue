<script setup>
definePageMeta({
  layout: 'login',
})
const email = ref('PinoPasticcio')
const password = ref('Ciao123!')

const { login, isLogged } = useAuth()

const submitLogin = () => {
  const response = login(email.value, password.value)
  if (!response.status) {
    //TODO handle error feedback
    return
  }
  if (response.isHR) {
    navigateTo('hr')
  } else {
    navigateTo('user')
  }
}
</script>

<template>
  <div>
    <form class="flex flex-col gap-2 bg-slate-500">
      <input v-model="email" type="text" />
      <input type="password" v-model="password" />
      <button type="button" @click="submitLogin">Login</button>
    </form>
    <Modal
      ><template #trigger><button>Test</button></template
      ><template #title>Title</template
      ><template #description>Description</template></Modal
    >
  </div>
</template>
