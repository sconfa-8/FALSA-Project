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
  <div class="grid grid-cols-4 justify-between w-full border-t-black border-t pt-2">
    <NuxtLink to="/user" class="flex flex-col items-center text-center">
      <IconsCalendar class="h-4 w-4"/>
      <p>Home</p>
    </NuxtLink>
    <NuxtLink to="/user/calendar" class="flex flex-col items-center text-center">
      <IconsCalendar class="h-4 w-4" />
      <p>Calendario</p>
    </NuxtLink>
    <NuxtLink to="/user/info" class="flex flex-col items-center text-center">
      <IconsInfo class="h-4 w-4" />
      <p>Info Utili</p>
    </NuxtLink>
    <NuxtLink to="/user/news" class="flex flex-col items-center text-center">
      <IconsNews class="h-4 w-4"/>
      <p>News</p>
    </NuxtLink>
  </div>
</template>
