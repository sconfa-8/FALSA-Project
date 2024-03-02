<script setup>
const isOpenInfo = useState('isOpenInfo', () => false)
</script>

<template>
  <Transition name="fade">
    <div
      class="fixed overflow-y-scroll inset-0 md:inset-20 z-[999] bg-white rounded-lg shadow-lg flex flex-col gap-4 p-8"
      v-if="isOpenInfo"
    >
      <div class="form flex items-end justify-end pr-4 py-4 text-2xl">
        <button class="items-end" @click="isOpenInfo = false">
          <IconsClose class="h-8 w-8" />
        </button>
      </div>
      <div class="flex justify-center">
          <p class="text-xl underline">Dati utente:</p>
        </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Nome:
          <p class="text-sm">Pino</p>
        </div>
        <div class="w-full md:w-1/2">
          Cognome:
          <p class="text-sm">Pasticcio</p>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Ruolo:
          <p class="text-sm">Developer</p>
        </div>
        <div class="w-full md:w-1/2">
          Divisione:
          <p class="text-sm">Atoms</p>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Sede:
          <p class="text-sm">Mestrino</p>
        </div>
        <div class="w-full md:w-1/2">
          Email:
          <p class="text-sm">pino.pasticcio@atoms.retexspa.com</p>
        </div>
      </div>
      <div>
        Data di ingresso:
        <div class="w-full flex gap-4 items-center">
          <p class="text-sm">13</p>
          <p class="text-sm">/</p>
          <p class="text-sm">02</p>
          <p class="text-sm">/</p>
          <p class="text-sm">2024</p>
        </div>
      </div>
      <div class="h-[1px] bg-slate-500 my-2"></div>
      <div class="flex justify-center">
        <p class="text-xl underline">Team:</p>
      </div>
      <div class="w-full flex flex-col md:flex-row gap-4">
        <div class="w-full md:w-1/2">
          Team Leader:
          <p class="text-sm">Massimo Pegoraro</p>
        </div>
        <div class="w-full md:w-1/2">
          Buddy:
          <p class="text-sm">Simone Confalonieri</p>
        </div>
      </div>
      <div>
        <div class="flex justify-center">
          <p class="text-xl underline">Feedback:</p>
        </div>
        <div class="space-y-4">

    <div class="flex gap-8">
      
      <div class="space-y-2">
        <h3>Pino Pasticcio</h3>
        <div class="flex gap-2">
          <IconsStar class="w-4 h-4 text-gray-305000" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
        </div>
        
      </div>
    </div>
      <div class="flex justify-center">

        <div class="bg-slate-500 h-[1px] w-9/12"></div>
      </div>
    <div class="flex gap-8">
      
      <div class="space-y-2">
        <h3>Massimo Pegoraro @ Pino Pasticcio</h3>
        <div class="flex gap-2">
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-transparent" />
          <IconsStar class="w-4 h-4 text-transparent" />
        </div>
        
      </div>
    </div>
    <div class="flex gap-8">
      
      <div class="space-y-2">
        <h3>Antonello Sanna  @ Pino Pasticcio</h3>
        <div class="flex gap-2">
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-gray-500" />
          <IconsStar class="w-4 h-4 text-transparent" />
        </div>
        
      </div>
    </div>
  </div>
      </div>
      <div class="flex items-center justify-center">
        <p class="text-xl underline pb-4">Calendario incontri</p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="text-lg">Lunedi 11-01-2024</div>
        <CalendarCard>Antonello Sanna 12:00-13:00</CalendarCard>
        <CalendarCard>Massimo Pegoraro 15:00-16:00</CalendarCard>
        <div class="text-lg">Martedi 12-01-2024</div>
        <CalendarCard>Fabiana Fiorentino 12:00-13:00</CalendarCard>
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
