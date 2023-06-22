<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  width: 100%;
  max-width: 850px;
  height: 100vh;
  max-height: 660px;
  padding: 32px;
  display: grid;
  grid-template-columns: 236px 1fr;
  grid-template-rows: 1fr 72px;
  gap: 24px;
  background: #1d1d1d;
}

.container > *:nth-child(n + 3) {
  grid-column: 1 / span 2;
}
</style>
