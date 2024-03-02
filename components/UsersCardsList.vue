<script setup>
const isOpen = useState('isOpen')
const isOpenInfo = useState('isOpenInfo')
</script>

<template>
  <p class="text-xl underline pb-4">Calendario incontri</p>
  <div class="w-full flex pb-2">
    <p class="font-bold w-1/2 flex">Nome</p>
    <p class="font-bold w-1/2 flex">Data Ingresso</p>
  </div>
  <div class="user-cards flex flex-col gap-2">
    <div>
      <div class="w-full flex relative" @click="isOpenInfo = true">
        <p class="w-1/2">Federico Rossi</p>
        <p class="w-1/2">12-02-2023</p>
        <IconsArrowLeft class="h-4 w-4 absolute right-0" />
      </div>

      <div class="h-[1px] bg-slate-700 my-2" />
    </div>
    <div>
      <div class="w-full flex relative" @click="isOpenInfo = true">
        <p class="w-1/2">Federico Rossi</p>
        <p class="w-1/2">26-01-2023</p>
        <IconsArrowLeft class="h-4 w-4 absolute right-0" />
      </div>

      <div class="h-[1px] bg-slate-700 my-2" />
    </div>
    <div class="w-full flex relative" @click="isOpenInfo = true">
      <p class="w-1/2">Luigi Verdi</p>
      <p class="w-1/2">13-01-2023</p>
      <IconsArrowLeft class="h-4 w-4 absolute right-0" />
    </div>
    <ModalForm />
    <button
      @click="isOpen = true"
      class="fixed bottom-[160px] bg-slate-200 rounded-lg p-4 w-1/2 left-1/2 -translate-x-1/2"
    >
      Crea nuovo utente
    </button>
    <ModalInfo />
  </div>
</template>
