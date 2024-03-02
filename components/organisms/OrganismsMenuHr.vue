<script setup>
// TODO: map icons
const menuItems = [
  {
    label: 'Home',
    icon: 'home',
    url: '/hr',
  },
  {
    label: 'Feedback',
    icon: 'feedback',
    url: '/hr/feedback',
  },
  {
    label: 'Notification',
    icon: 'Notification',
    url: '/hr/notification',
  },
]
</script>

<template>
  <div class="grid grid-cols-3 justify-between w-full border-t-black border-t">
    <NuxtLink
      v-for="(item, index) in menuItems"
      :key="index"
      :to="item.url"
      class="flex flex-col items-center text-center bg-slate-300 m-2 hover:bg-slate-400 transition-colors ease-in duration-300 rounded-lg"
    >
      <p>▢</p>
      <p>{{ item.label }}</p>
    </NuxtLink>
  </div>
</template>
