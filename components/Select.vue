<template>
    <div class="relative z-0">
      <input
      type="text"
      id="floating_standard"
      class="block p-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-retex appearance-none "
      placeholder=" "
    />
    <label
      for="floating_standard"
      class="absolute text-sm text-gray-500 duration-300 transform pl-3 top-3 -z-10 origin-[0] "
      ><slot
    /></label>
      <div class="absolute right-0 top-1/2 -translate-y-1/2"><IconsChevronDown class="w-4 h-4"/></div>
    </div>
  </template>