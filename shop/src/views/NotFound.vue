<template>
  <div class="container-not-found">
    <div class="image-container-not-found">
    </div>
    <p class="not-found-p">От як(</p>
    <div class="container-back-to-home" @click="$router.push('/')">
      <p>Сторінку не знайдено</p>
      <button>Back to Home Page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
}
</script>

<style lang="scss">

.container-not-found {
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a linear-gradient(180deg, #0a0a0a 0%, #1a0f2f 100%);
  color: #fff;

}
</style>