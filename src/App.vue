<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: -20px;
    width: 100%;
    height: 523px;
    background-image: url('@/assets/img/sparks-bg.png');
    background-repeat: no-repeat;

    @include on-breakpoint('md') {
      top: auto;
      bottom: -30px;
      max-width: 600px;
      height: 518px;
      background-repeat: no-repeat;
    }

    @include on-breakpoint('xl') {
      bottom: -100px;
    }

    @include on-breakpoint('xxl') {
      bottom: auto;
      left: auto;
      top: calc(50% - 560px);
      right: calc(100vw - 915px);
      max-width: 915px;
      height: 746px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -115px;
    width: 100%;
    height: 523px;
    background-image: url('@/assets/img/sparks-bg.png');
    transform: rotateY(180deg);
    background-repeat: no-repeat;

    @include on-breakpoint('md') {
      max-width: 600px;
      height: 518px;
      background-repeat: no-repeat;
    }

    @include on-breakpoint('xl') {
      bottom: -85px;
    }

    @include on-breakpoint('xxl') {
      right: auto;
      bottom: calc(50% - 560px);
      left: calc(100vw - 915px);
      max-width: 915px;
      height: 746px;
      background-repeat: no-repeat;
    }
  }
}
</style>
