<script setup></script>

<template>
  <div
    class="grid grid-cols-3 justify-between w-full bg-gray-800 border-t-black border-t py-4"
  >
    <NuxtLink
      to="/hr"
      class="flex flex-col items-center justify-between text-center"
    >
      <IconsHome class="h-4 w-4" />
      <p class="text-white text-sm">Home</p>
    </NuxtLink>
    <NuxtLink
      to="/hr/feedback"
      class="flex flex-col justify-between items-center text-center"
    >
      <IconsFeedback class="h-4 w-4" />
      <p class="text-white text-sm">Feedback</p>
    </NuxtLink>
    <NuxtLink
      to="/hr/notification"
      class="flex flex-col justify-between items-center text-center"
    >
      <IconsNotifications class="h-4 w-4" />
      <p class="text-white text-sm">Notification</p>
    </NuxtLink>
  </div>
</template>
