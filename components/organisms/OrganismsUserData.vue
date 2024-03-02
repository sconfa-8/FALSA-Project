<script setup>
// TODO: get data from user list
const userData = {
  firstName: 'Pino',
  lastName: 'Hdawdn',
  role: 'user',
  department: 'Atoms',
  site: 'Milano',
  email: 'example@test.com',
  phone: '3333333333',
  businessTools: 'awkjnad',
  extraData: 'adnwjadna',
}
</script>

<template>
  <div>
    <p class="underline">I tuoi dati</p>
    <div class="grid grid-cols-2">
      <div>
        <p>{{ `${userData.firstName} ${userData.lastName}` }}</p>
        <p>{{ userData.role }}</p>
        <p>{{ userData.department }}</p>
        <p>{{ userData.site }}</p>
        <p>{{ userData.email }}</p>
        <p>{{ userData.phone }}</p>
        <p>{{ userData.businessTools }}</p>
        <p>{{ userData.extraData }}</p>
      </div>

      <div class="flex items-center justify-center">
        <div
          class="h-[100px] w-[100px] rounded-full border border-black flex justify-center items-center"
        >
          <p>Foto</p>
        </div>
      </div>
    </div>
  </div>
</template>
