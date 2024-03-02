<script setup>
const { fullPath } = useRoute()
const isHR = fullPath.split('/').at(1) === 'hr'
</script>

<template>
  <div class="max-h-[100vh]">
    <div class="flex items-center justify-around p-4 flex-shrink-0 flex-grow-0">
      <p class="text-2xl">
        RetexWelcome
      </p>
      <NuxtLink to="/">
        <Logo class="h-10 w-10"/>
      </NuxtLink>
    </div>
    <div class="h-[calc(100vh_-_160px)] p-6">
      <slot />
    </div>
    <OrganismsFeedbackUser />
    <div class="relative flex-shrink-0 flex-grow-0">
      <OrganismsMenuHr v-if="isHR" />
      <OrganismsMenuUser v-else />
    </div>
  </div>
</template>
