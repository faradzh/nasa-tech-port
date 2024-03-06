<template>
  <div class="w-auto">
    <header class="w-auto h-36 bg-red-400 p-8 text-center">
      <div class="w-24 h-24 inline-block">
        <img src="/assets/images/NasaLogo.svg" alt="nasa logo" />
      </div>
    </header>
    <div class="w-auto h-full bg-slate-50">
      <div class="w-4/5 m-auto pt-10 pb-10 h-full font-mono">
        <slot />
      </div>
    </div>
  </div>
</template>
