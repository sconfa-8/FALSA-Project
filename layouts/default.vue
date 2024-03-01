<script setup>
const { fullPath } = useRoute()
</script>

<template>
  <div>
    <slot />

    <div class="absolute bottom-0 left-0 right-0">
      <OrganismsMenuHr v-if="fullPath.split('/').at(1) === 'hr'" />
      <OrganismsMenuUser v-else />
    </div>
  </div>
</template>
