<script setup>
const isOpen = useState('isOpen', () => false)
</script>

<template>
  <Transition name="fade">
    <div
      class="fixed overflow-y-scroll  inset-0 md:inset-20 z-[999] bg-white rounded-lg shadow-lg flex flex-col gap-4 p-8"
      v-if="isOpen"
    >
      <div class="form flex items-end justify-between pr-4 py-4 text-2xl">
        <p>Inserisci nuovo impiegato</p>
        <button class="items-end" @click="isOpen = false">
          <IconsClose class="h-8 w-8" />
        </button>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Nome:
          <Input>Pino</Input>
        </div>
        <div class="w-full md:w-1/2">
          Cognome:
          <Input>Pasticcio</Input>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Ruolo:
          <Select>Developer</Select>
        </div>
        <div class="w-full md:w-1/2">
          Divisione:
          <Select>Atoms</Select>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Sede:
          <Select>Mestrino</Select>
        </div>
        <div class="w-full md:w-1/2">
          Email:
          <Select>pino.pasticcio@atoms.retexspa.com</Select>
        </div>
      </div>
      <div>
        Data di ingresso:
          <div class="w-full flex gap-4 items-center">
          <Input class="w-1/3">13</Input>
          <p>/</p>
          <Input class="w-1/3">02</Input>
          <p>/</p>
          <Input class="w-1/3">2024</Input>
        </div>
      </div>
      <div class="h-[1px] bg-slate-500 my-2"></div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Team Leader:
          <Select>Massimo Pegoraro</Select>
        </div>
        <div class="w-full md:w-1/2">
          Buddy:
          <Select>Simone Confalonieri</Select>
        </div>
      </div>
    </div>
    
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
