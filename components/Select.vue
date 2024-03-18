<script setup lang="ts">
const props = defineProps({options: {
    type: Object,
    required: true,
 },
 label:{
  type:String,
  required:true,
 }})
</script>

<template>
  <div class="w-full">
    <p>{{props.label}}:</p>
    <div class="relative z-0">
      <select
      id="floating_standard"
      class="block p-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-retex appearance-none"
      placeholder=" "
      >
      <option v-for="option in options" :value="option.value">{{ option.label }}</option>
    </select>
    <div class="absolute right-4 top-1/2 -translate-y-1/2">
      <IconsChevronDown class="w-4 h-4" />
    </div>
  </div>
</div>
</template>
