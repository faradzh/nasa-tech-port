<template>
  <div class="w-auto">
    <header class="w-auto h-36 bg-red-400 p-8">
      <div class="w-24 h-24">
        <img src="/assets/images/NasaLogo.svg" alt="nasa logo" />
      </div>
    </header>
    <div class="w-auto h-screen bg-slate-50">
      <div class="w-4/5 m-auto pt-10 pb-10 h-screen font-mono">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import NasaLogo from "assets/images/NasaLogo.svg";
</script>
