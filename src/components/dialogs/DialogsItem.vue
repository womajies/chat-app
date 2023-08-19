<template>
  <button type="button" class="dialogs-item" :class="{ 'dialogs-item--active': isActive }"
    @click="$store.commit('SET_ACTIVE_DIALOG_USER', user)">
    <div class="dialogs-item__avatar">
      <img :src="getAvatar" alt="Аватар">
    </div>
    <div class="dialogs-item__content">
      <div class="dialogs-item__head">
        <h2 class="dialogs-item__name">{{ user?.username }}</h2>
        <span class="dialogs-item__time">{{ getLastMsgTime }}</span>
      </div>
      <p class="dialogs-item__text truncate-max-2-lines">{{ getLastMsgText }}</p>
    </div>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "dialogsItem",

  props: {
    user: {
      type: Object,
      default: () => { }
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapGetters(['getActiveDialogUser']),

    isActive() {
      return this.getActiveDialogUser?.uid === this.user?.uid
    },

    getLastMsgTime() {
      return this.user?.chat[this.user.chat.length - 1]?.time.toLocaleTimeString('en-US',
        {
          hour12: false,
          hour: "numeric",
          minute: "numeric"
        }
      )
    },

    getLastMsgText() {
      return this.user?.chat[this.user.chat.length - 1]?.text
    },

    getAvatar() {
      return require(`@/assets/img/${this.user?.avatar}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.dialogs-item {
  display: flex;
  align-items: center;
  padding: 10px 0 0 25px;
  text-align: left;
  background-color: transparent;
  transition: background-color $transition-duration $transition-timing-function;

  @include on-breakpoint('md') {
    padding: 10px 0 0 21px;
  }

  @include on-breakpoint('xl') {
    padding: 16px 0 0 20px;
  }

  @include on-breakpoint('xxl') {
    padding: 20px 0 0 31px;
  }

  &:hover:not(.dialogs-item--active) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus-visible:not(.dialogs-item--active) {
    background-color: rgba(255, 255, 255, 0.1);
    outline: $border-width solid rgba($accent-color, 0.8);
  }

  &:last-child {
    .dialogs-item__content {
      border-bottom: none;
    }
  }

  &--active {
    background-color: rgba(#5855ff, 0.2);

    .dialogs-item__text {
      color: $accent-color-two;
    }

    .dialogs-item__time {
      color: $accent-color-two;
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    padding-right: 25px;
    padding-bottom: 10px;
    border-bottom: $border-width solid rgba($accent-color, 0.2);

    @include on-breakpoint('md') {
      padding-right: 20px;
    }

    @include on-breakpoint('xl') {
      padding-right: 20px;
      padding-bottom: 16px;
    }

    @include on-breakpoint('xxl') {
      padding-right: 29px;
      padding-bottom: 20px;
    }
  }

  &__avatar {
    width: 55px;
    height: 55px;
    flex-shrink: 0;
    margin-right: 16px;
    margin-bottom: 10px;
    border-radius: $border-radius-btn;

    @include on-breakpoint('md') {
      margin-right: 15px;
    }

    @include on-breakpoint('xl') {
      width: 65px;
      height: 65px;
      margin-bottom: 16px;
    }

    @include on-breakpoint('xxl') {
      width: 75px;
      height: 75px;
      margin-right: 20px;
      margin-bottom: 20px;
    }

    img {
      height: 100%;
      border-radius: $border-radius-btn;
    }
  }

  &__head {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }

  &__name {
    font-size: 13px;
    line-height: normal;
    font-weight: 600;
    color: $white-color;
    @include text-truncate(80%, 1);

    @include on-breakpoint('md') {
      font-size: 14px;
      font-weight: 500;
    }

    @include on-breakpoint('xxl') {
      font-size: 18px;
    }
  }

  &__text {
    font-size: 12px;
    line-height: 20px;
    margin-top: 5px;
    color: $accent-color;
    transition: color $transition-duration $transition-timing-function;

    @include on-breakpoint('xxl') {
      font-size: 14px;
      line-height: 24px;
    }
  }

  &__time {
    font-size: 12px;
    line-height: 20px;
    color: $accent-color;
    transition: color $transition-duration $transition-timing-function;

    @include on-breakpoint('xxl') {
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
