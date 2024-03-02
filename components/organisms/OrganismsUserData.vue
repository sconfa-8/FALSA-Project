<script setup>
defineProps({
  firstName: String,
  lastName: String,
  role: String,
  department: String,
  site: String,
  email: String,
  phone: String,
  businessTools: String,
  assumption: String,
})
</script>

<template>
  <div>
    <p class="underline">I tuoi dati</p>
    <div class="grid grid-cols-2">
      <div>
        <p>{{ `${firstName} ${lastName}` }}</p>
        <p>{{ role }}</p>
        <p>{{ department }}</p>
        <p>{{ site }}</p>
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
        <p>{{ businessTools }}</p>
        <p>{{ assumption }}</p>
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
