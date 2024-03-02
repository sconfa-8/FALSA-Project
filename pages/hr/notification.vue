<script setup></script>

<template>
  <div class="space-y-6 pb-5">
    <p class="text-2xl">Notifiche</p>

    <p class="uppercase bg-gray-500 rounded-lg text-white w-full px-4 py-1">
      Da leggere
    </p>

    <!-- Cards -->
    <div class="space-y-2">
      <p>@Federico Rossi</p>
      <div class="border border-gray-400 rounded-2xl p-4">
        <p>
          Ha eseguito l'accesso.
        </p>
      </div>
      <div class="w-full flex justify-end px-4">
        <button class="text-gray-500 underline">Letta</button>
      </div>
    </div>

    <div class="space-y-2">
      <p>@Massimo Pegoraro</p>
      <div class="border border-gray-400 rounded-2xl p-4">
        <p>
          Ha votato 5 stelle a @FedericoRossi
        </p>
      </div>
      <div class="w-full flex justify-end px-4">
        <button class="text-gray-500 underline">Letta</button>
      </div>
    </div>

    <p class="uppercase bg-gray-500 text-white w-full px-4 py-1 rounded-lg">
      Lette
    </p>

    <div class="space-y-2">
      <p>@Maria Bianchi</p>
      <div class="border border-gray-400 rounded-2xl p-4">
        <p>
          Ha eseguito l'accesso.
        </p>
      </div>
      <div class="w-full flex justify-end px-4">
        <button class="text-gray-500 underline">Elimina</button>
      </div>
    </div>

    <div class="space-y-2">
      <p>@Federico Rossi</p>
      <div class="border border-gray-400 rounded-2xl p-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="w-full flex justify-end px-4">
        <button class="text-gray-500 underline">Elimina</button>
      </div>
    </div>
  </div>
</template>
