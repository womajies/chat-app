<template>
  <div class="dialogs-list">
    <DialogsItem v-for="user in users" :key="user?.uid" :user="user" />
  </div>
</template>

<script>
import DialogsItem from './DialogsItem.vue'

export default {
  name: 'dialogsList',

  components: { DialogsItem },

  props: {
    users: {
      type: Array,
    }
  }
}
</script>

<style lang="scss" scoped>
.dialogs-list {
  display: flex;
  flex-direction: column;
  border-top: $border-width solid rgba($accent-color, 0.2);
  overflow-y: auto;
  height: calc(100% - 88px);

  @include on-breakpoint('md') {
    height: calc(100% - 79px);
  }

  @include on-breakpoint('xl') {
    height: calc(100% - 95px);
  }

  @include on-breakpoint('xxl') {
    height: calc(100% - 120px);
  }
}
</style>
