<script setup>
</script>

<template>
  <div class="grid grid-cols-3 justify-between w-full border-t-black border-t pt-2">
    <NuxtLink to="/hr" class="flex flex-col items-center text-center">
      <IconsHome class="h-4 w-4" />
      <p>Home</p>
    </NuxtLink>
    <NuxtLink to="/hr/feedback" class="flex flex-col items-center text-center">
      <IconsFeedback class="h-4 w-4"/>
      <p>Feedback</p>
    </NuxtLink>
    <NuxtLink to="/hr/notification" class="flex flex-col items-center text-center">
      <IconsNotifications class="h-4 w-4"/>
      <p>Notification</p>
    </NuxtLink>
  </div>
</template>
