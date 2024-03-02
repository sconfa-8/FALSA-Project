<script setup>
import usersData from '../data/events.json'
</script>

<template>
  <div class="space-y-8 pb-6">
    <p class=" text-2xl">News e Eventi</p>
    <p>
      Scopri i nuovi eventi proposti da Retex e le news riguardanti la tua azienda
    </p>

    <!-- Events cards -->
    <div
      v-for="(item, index) in usersData"
      :key="index"
      class="grid grid-cols-12 gap-2 rounded-lg border border-black"
    >
      <div class="w-full h-full col-span-3 flex justify-center items-center">
        <p>img</p>
      </div>
      <div class="col-span-9 pr-2 py-4">
        <h3 class="font-bold">{{ item.title }}</h3>
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
