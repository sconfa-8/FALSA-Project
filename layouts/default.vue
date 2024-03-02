<script setup>
const { fullPath } = useRoute()
</script>

<template>
  <div class="max-h-[100vh]">
    <div class="flex items-center justify-around p-4 flex-shrink-0 flex-grow-0">
      <p class="text-2xl ">
        RetexWelcome
      </p>
      <NuxtLink to="/">
        <Logo class="h-10 w-10"/>
      </NuxtLink>
    </div>
    <div class="h-[calc(100vh_-_120px)]">
      <slot />
    </div>

    <div class="flex-shrink-0 flex-grow-0">
      <OrganismsMenuHr v-if="fullPath.split('/').at(1) === 'hr'" />
      <OrganismsMenuUser v-else />
    </div>
  </div>
</template>
