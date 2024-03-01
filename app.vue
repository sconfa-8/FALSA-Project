<script setup>
const email = ref("MarioRossi");
const password = ref("Ciao123!");

const { login, isLogged } = useAuth();

const submitLogin = () => {
  login(email.value, password.value);
};
</script>

<template>
  <div>
    <form class="flex flex-col gap-2 bg-slate-500" action="">
      <input v-model="email" type="text" />
      <input type="password" v-model="password" />
      <button type="button" @click="submitLogin">Login</button>
    </form>
    {{ isLogged }}
  </div>
</template>
