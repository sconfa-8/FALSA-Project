<script setup>
const { fullPath } = useRoute()
const isHR = fullPath.split('/').at(1) === 'hr'
</script>

<template>
  <div class="max-h-[100vh] overflow-auto">
    <div
      class="fixed top-0 right-0 left-0 bg-white flex items-center justify-around p-4 flex-shrink-0 flex-grow-0"
    >
      <p class="text-2xl">RetexWelcome</p>
      <NuxtLink to="/">
        <Logo class="h-10 w-10" />
      </NuxtLink>
    </div>
    <div class="px-6 pt-[72px] pb-[113px]">
      <slot />
    </div>
    <div
      class="fixed bottom-0 right-0 left-0 bg-white flex-shrink-0 flex-grow-0"
    >
      <OrganismsFeedbackUser />
      <OrganismsMenuHr v-if="isHR" />
      <OrganismsMenuUser v-else />
    </div>
  </div>
</template>
