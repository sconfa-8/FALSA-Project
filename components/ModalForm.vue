<script setup>
const isOpen = useState('isOpen', () => false)
</script>

<template>
  <Transition name="fade">
        <div
      class="fixed overflow-y-scroll inset-0 md:inset-20 z-[999] bg-white rounded-lg shadow-lg flex flex-col gap-4 p-8"
      v-if="isOpen"
    >
      <div class="form flex items-end justify-between pr-4 py-4 text-2xl">
        <p>Inserisci nuovo Retexer</p>
        <button class="items-end" @click="isOpen = false">
          <IconsClose class="h-8 w-8" />
        </button>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Nome:
          <Input>Federico</Input>
        </div>
        <div class="w-full md:w-1/2">
          Cognome:
          <Input>Rossi</Input>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <Select class="w-full md:w-1/2" label="Ruolo" :options="[{label:'Developer',value:'developer'}]"></Select>
        <Select class="w-full md:w-1/2" label="Divisione" :options="[{label:'Atoms',value:'atoms'}]"></Select>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <Select class="w-full md:w-1/2" label="Sede" :options="[{label:'Mestrino',value:'mestrino'}]"></Select>
        <div class="w-full md:w-1/2">
          Email:
          <Input>federico.rossi@atoms.retexspa.com</Input>
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
        <Select class="w-full md:w-1/2" label="Team Leader" :options="[{label:'Massimo Pegoraro',value:'massimo_pegoraro'},{label:'Antonello Sanna',value:'antonello_sanna'}]"></Select>
        <Select class="w-full md:w-1/2" label="Buddy" :options="[{label:'Simone Confalonieri',value:'simone_confalonieri'}]"></Select>
      </div>
      <div class="flex justify-center items-center">
        <button
          @click="isOpen = true"
          class="bg-[#b1b2b4] font-bold rounded-lg p-4 w-1/2"
        >
          Crea nuovo utente
        </button>
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
