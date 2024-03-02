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
    label: 'News',
    icon: 'news',
    url: '/user/news',
  },
]
</script>

<template>
  <div
    class="grid grid-cols-4 justify-between w-full bg-gray-800 border-t-black border-t py-4"
  >
    <NuxtLink
      to="/user"
      class="flex flex-col items-center justify-betweentext-center"
    >
      <IconsCalendar class="h-4 w-4" />
      <p class="text-white text-sm">Home</p>
    </NuxtLink>
    <NuxtLink
      to="/user/calendar"
      class="flex flex-col justify-between items-center text-center"
    >
      <IconsCalendar class="h-4 w-4" />
      <p class="text-white text-sm">Calendario</p>
    </NuxtLink>
    <NuxtLink
      to="/user/info"
      class="flex flex-col justify-between items-center text-center"
    >
      <IconsInfo class="h-4 w-4" />
      <p class="text-white text-sm">Info Utili</p>
    </NuxtLink>
    <NuxtLink
      to="/user/news"
      class="flex flex-col justify-between items-center text-center"
    >
      <IconsNews class="h-4 w-4" />
      <p class="text-white text-sm">News</p>
    </NuxtLink>
  </div>
</template>
