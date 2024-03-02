<script setup>
definePageMeta({
  layout: 'login',
})
const email = ref('FedericoRossi')
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
  <div
    class="w-full bg-gradient m-auto h-screen flex justify-center items-center"
  >
    <div class="space-y-20 w-4/5 max-w-[400px]">
      <div>
        <LogoDark class="h-28 w-28 m-auto" />
      </div>

      <form class="flex flex-col w-full gap-4">
        <input
          v-model="email"
          type="text"
          class="border-2 border-black rounded-lg p-4"
        />
        <input
          type="password"
          v-model="password"
          class="border-2 border-black rounded-lg p-4"
        />
        <button
          type="button"
          @click="submitLogin"
          class="bg-black text-white rounded-lg p-4"
        >
          Accedi
        </button>
      </form>
      <Modal
        ><template #trigger><button>Test</button></template
        ><template #title>Title</template
        ><template #description>Description</template></Modal
      >
    </div>
  </div>
</template>

<style scooped>
.bg-gradient {
  background-image: url('/retex-gradient.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
