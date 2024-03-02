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
  <div class="w-full ">
    <div v-if="!isConfirm && !isDefinitive" @click="isOpen = true" class="cursor-pointer bg-retex">
      <div  @click="isOpen = true" class="w-full flex justify-center ">
        <p class="px-2 py-4 text-white">
          Ci dai un feedback sul tuo primo giorno?
        </p>
      </div>
    </div>

    <div class=" bg-retex">
      <Transition >
        <div v-if="isOpen" class="flex gap-2 justify-center">
          <IconsStarWhite class="h-8 w-8 cursor-pointer fill-white" v-for="i in 5" @click="clickHandler"/>
        </div>
      </Transition>
    </div>
    <div class="flex justify-center bg-retex" v-if="isConfirm">
        <p class="text-white p-2">Grazie della risposta!</p>
    </div>
  </div>
</template>

<style></style>
