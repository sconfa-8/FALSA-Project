<script setup>
// TODO: map icons
const menuItems = [
  {
    label: 'Home',
    icon: 'home',
    url: '/user',
  },
  {
    label: 'Calendario',
    icon: 'calendar',
    url: '/user/calendar',
  },
  {
    label: 'Info Utili',
    icon: 'info',
    url: '/user/info',
  },
  {
    label: 'News ed Eventi',
    icon: 'news',
    url: '/user/news',
  },
]
</script>

<template>
  <div class="grid grid-cols-4 justify-between w-full border-t-black border-t">
    <NuxtLink
      v-for="(item, index) in menuItems"
      :key="index"
      :to="item.url"
      class="flex flex-col items-center text-center"
    >
      <p>▢</p>
      <p>{{ item.label }}</p>
    </NuxtLink>
  </div>
</template>
