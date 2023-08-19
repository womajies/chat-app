<template>
  <div>
    <div class="chat-user">
      <button class="chat-user__back" @click="$store.commit('SET_ACTIVE_DIALOG_USER', null)">
        <UIcon name="arrow-left" width="12" height="20" />
      </button>
      <div class="chat-user__avatar">
        <img :src="getAvatar" alt="Аватар">
      </div>
      <div class="chat-user__info">
        <h2 class="chat-user__name truncate-max-1-line">{{ getActiveDialogUser?.username }}</h2>
        <p class="chat-user__status truncate-max-1-line">{{ getActiveDialogUser?.status }}</p>
      </div>
    </div>

    <UButton variant="primary" class="nowrap">
      <span class="desktop">Связаться с поддержкой</span>
      <span class="mob">Поддержка</span>
    </UButton>
  </div>
</template>

<script>
import UButton from '@/components/ui/UButton.vue'
import UIcon from '@/components/ui/UIcon.vue'
import { mapGetters } from 'vuex';

export default {
  name: "chatHead",

  components: { UButton, UIcon },

  computed: {
    ...mapGetters(['getActiveDialogUser']),

    getAvatar() {
      return require(`@/assets/img/${this.getActiveDialogUser?.avatar}`);
    }
  },
}
</script>

<style lang="scss" scoped>
.chat-user {
  display: flex;
  align-items: center;
  width: 100%;

  &__back {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    transition: color $transition-duration $transition-timing-function;

    @include on-breakpoint('sm') {
      margin-right: 24px;
    }

    @include on-breakpoint('md') {
      display: none;
    }

    &:hover {
      color: $accent-color-four;
    }

    &:focus-visible {
      outline: $border-width solid $btn-border-color;
    }
  }

  &__info {
    width: 100%;
    padding-right: 4px;

    @include on-breakpoint('sm') {
      padding-right: 16px;
    }
  }

  &__avatar {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    margin-right: 10px;
    border-radius: 10px;

    @include on-breakpoint('sm') {
      width: 49px;
      height: 49px;
      border-radius: $border-radius-btn;
    }

    @include on-breakpoint('md') {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    @include on-breakpoint('xl') {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    img {
      height: 100%;
      border-radius: 10px;

      @include on-breakpoint('sm') {
        border-radius: $border-radius-btn;
      }
    }
  }

  &__name {
    font-size: 13px;
    line-height: normal;
    font-weight: 600;
    color: $white-color;
    @include text-truncate(80%, 1);

    @include on-breakpoint('md') {
      font-size: 16px;
      font-weight: 500;
    }

    @include on-breakpoint('xxl') {
      font-size: 18px;
    }
  }

  &__status {
    font-size: 12px;
    line-height: normal;
    margin-top: 5px;
    color: $accent-color;
    transition: color $transition-duration $transition-timing-function;
  }
}

.mob {
  @include on-breakpoint('xl') {
    display: none;
  }
}

.desktop {
  display: none;

  @include on-breakpoint('xl') {
    display: inline-block;
  }
}

.nowrap {
  white-space: nowrap;
}
</style>
