<script setup>
defineProps({
  teamLeader: {
    fullName: String,
    email: String,
  },
  teamBuddy: {
    fullName: String,
    email: String,
  },
})
</script>

<template>
  <div>
    <p class="underline">Il tuo team</p>
    <div>
      <div class="flex items-center gap-2">
        <div class="flex items-center justify-center">
          <div
            class="h-[30px] w-[30px] rounded-full border border-black flex justify-center items-center"
          >
            <p>Img</p>
          </div>
        </div>
        <div class="w-full">
          <p>Team Leader: {{ teamLeader.fullName }}</p>
          <p>{{ teamLeader.email }}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center justify-center">
          <div
            class="h-[30px] w-[30px] rounded-full border border-black flex justify-center items-center"
          >
            <p>Img</p>
          </div>
        </div>
        <div class="w-full">
          <p>Team Leader: {{ teamBuddy?.fullName }}</p>
          <p>{{ teamBuddy?.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
