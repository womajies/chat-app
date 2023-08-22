<template>
  <div class="chat-message" :class="classes">
    <div class="chat-message__avatar" v-if="isInboundMessage">
      <img :src="getAvatar" alt="Аватар">
    </div>
    <div class="chat-message__wrapper">
      <div class="chat-message__content">
        <h2 class="chat-message__title" v-if="isInboundMessage">{{ getActiveDialogUser?.username }}</h2>
        <p class="chat-message__text">{{ message.text }}</p>
      </div>
      <span class="chat-message__time">{{ getMsgTime }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "chatMessage",

  props: {
    message: {
      type: Object,
      default: () => { }
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapGetters(['getActiveDialogUser']),

    classes() {
      return {
        'chat-message--outbound': this.message.type === 'own',
        'chat-message--inbound': this.message.type === 'user'
      }
    },

    getAvatar() {
      return require(`@/assets/img/${this.getActiveDialogUser?.avatar}`);
    },

    isInboundMessage() {
      return this.message.type === 'user'
    },

    getMsgTime() {
      return this.message?.time?.toLocaleTimeString('en-US',
        {
          hour12: false,
          hour: "numeric",
          minute: "numeric"
        }
      )
    },
  }
}
</script>

<style lang="scss" scoped>
.chat-message {
  position: relative;
  max-width: 332px;
  padding: 10px 15px;
  margin-top: 5px;
  border-radius: 30px 30px 30px 2px;
  backdrop-filter: blur(5px);
  border: $border-width solid rgba(255, 255, 255, 0.05);
  color: $accent-color;
  background-color: #2C2731;

  @include on-breakpoint('md') {
    max-width: 326px;
  }

  @include on-breakpoint('xxl') {
    max-width: 600px;
  }

  &:not(:last-child) {
    .chat-message__avatar {
      display: none;
    }
  }

  &:not(:first-child) {
    .chat-message__title {
      display: none;
    }
  }

  &--inbound {
    margin-left: 58px;

    @include on-breakpoint('xxl') {
      margin-left: 68px;
    }
  }

  &--outbound {
    margin-left: auto;
    border-radius: 30px 30px 2px 30px;
    background-color: $accent-color-three;
    color: $accent-color-two;
  }

  &__avatar {
    display: none;
    position: absolute;
    bottom: 0;
    right: calc(100% + 10px);
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: $border-radius-btn;
    border: $border-width solid rgba(255, 255, 255, 0.05);

    @include on-breakpoint('md') {
      display: flex;
    }

    @include on-breakpoint('xxl') {
      right: calc(100% + 20px);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 5px;
    font-size: 13px;
    line-height: normal;
    font-weight: 600;
    color: $white-color;

    @include on-breakpoint('md') {
      font-size: 14px;
    }

    @include on-breakpoint('xxl') {
      font-size: 16px;
    }
  }

  &__text {
    margin-right: 10px;
    font-size: 13px;
    line-height: 22px;

    @include on-breakpoint('md') {
      margin-right: 15px;
      font-size: 14px;
      line-height: 24px;
    }

    @include on-breakpoint('xxl') {
      margin-right: 20px;
      font-size: 16px;
      line-height: 28px;
    }
  }

  &__time {
    font-size: 12px;
    line-height: 20px;

    @include on-breakpoint('md') {
      font-size: 14px;
      line-height: 24px;
    }

    @include on-breakpoint('xxl') {
      font-size: 16px;
      line-height: 28px;
    }
  }
}
</style>
