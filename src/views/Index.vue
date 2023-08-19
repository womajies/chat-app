<template>
  <div class="index-page container" :class="getActiveDialogUser ? 'index-page--chat' : 'index-page--dialogs'">
    <DialogsWrapper />
    <ChatWrapper />
  </div>
</template>

<script>
import DialogsWrapper from '@/components/dialogs/DialogsWrapper.vue'
import ChatWrapper from '@/components/chat/ChatWrapper.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',

  components: { DialogsWrapper, ChatWrapper },

  computed: {
    ...mapGetters(['getActiveDialogUser'])
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  max-height: 773px;

  @include on-breakpoint('md') {
    grid-template-columns: minmax(296px, 40%) 1fr;
    gap: 20px;
    padding: 40px;
    max-height: 732px;
  }

  @include on-breakpoint('xxl') {
    gap: 60px;
    max-height: 1186px;
  }

  &--chat {
    .dialogs {
      display: none;

      @include on-breakpoint('md') {
        display: initial;
      }
    }
  }

  &--dialogs {
    .chat {
      display: none;

      @include on-breakpoint('md') {
        display: flex;
      }
    }
  }
}
</style>
