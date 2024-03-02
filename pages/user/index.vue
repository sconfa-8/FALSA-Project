<script setup>
import usersData from '../data/dataUsers.json'

const tourTeamProps = {
  teamLeader: {
    fullName: 'Dmakwndna',
    email: 'example@test.com',
  },
  teamBuddy: {
    fullName: 'dawdkajw',
    email: 'example@test.com',
  },
}
</script>

<template>
  <div class="h-full space-y-6 pb-8">
    <div>
      <h3 class="font-bold">Benvenuto in Retex, Federico!</h3>
      <p>
        Cerchiamo di offrirti la migliore esperienza di onboarding possibile
        tramite questa applicazione, qui puoi trovare le risposte a tutti i tuoi
        dubbi riguardo alla nostra azienda!
      </p>
    </div>
    <div class="flex justify-center">
      <p class="text-2xl">Dati utente:</p>
    </div>
    <div class="w-full flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-1/2">
        Nome:
        <p class="text-sm">Federico</p>
      </div>
      <div class="w-full md:w-1/2">
        Cognome:
        <p class="text-sm">Rossi</p>
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
        <p class="text-sm">federico.rossi@atoms.retexspa.com</p>
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
      <p class="text-2xl ">Team:</p>
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
  </div>
</template>
