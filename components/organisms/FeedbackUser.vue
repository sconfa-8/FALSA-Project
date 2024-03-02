<script setup>
const isOpen = ref(false)
const isConfirm = ref(false)

const clickHandler = () => {
    isOpen.value = false
    isConfirm.value = true
    isDefinitive.value = true
    setTimeout(() => {
        isConfirm.value = false
    }, 5000);
}
const isDefinitive = ref(false)
</script>
<template>
  <div class="w-full">
    <div v-if="!isConfirm && !isDefinitive" @click="isOpen = true" class="cursor-pointer">
      <p @click="isOpen = true" class="bg-slate-400 p-2">
        Ci dai un feedback sul tuo primo giorno?
      </p>
    </div>

    <div>
      <Transition>
        <div v-if="isOpen" class="flex gap-2">
          <IconsStar class="h-4 w-4 cursor-pointer" v-for="i in 5" @click="clickHandler"/>
        </div>
      </Transition>
    </div>
    <div v-if="isConfirm">
        <p class="text-green-500">Grazie della risposta!</p>
    </div>
  </div>
</template>
