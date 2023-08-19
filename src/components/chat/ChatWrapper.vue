<template>
  <div v-if="getActiveDialogUser" class="chat">
    <ChatHead class="chat__head" />

    <div ref="chatBody" class="chat__body">
      <div class="chat__group" v-for="(group, index) in groupedMessages" :key="index">
        <template v-if="group.isDateGroup">
          <div class="chat__date">{{ formatDate(group.date) }}</div>
        </template>
        <ChatMessage v-for="msg in group.messages" :key="msg.id" :message="msg" />
      </div>
    </div>

    <div class="chat__foot">
      <UFormInput v-model="message" placeholder="Напишите сообщение ..." @send="scrollToBottomChat" />
    </div>
  </div>
  <div class="chat-empty" v-else>
    <img class="chat-empty__image" src="@/assets/img/chat-empty.svg" alt="">
    <h2 class="chat-empty__title">Чат не выбран</h2>
    <p class="chat-empty__text">Выберите чат, начните общение!</p>
  </div>
</template>

<script>
import ChatHead from '@/components/chat/ChatHead.vue'
import ChatMessage from '@/components/chat/ChatMessage.vue'
import UFormInput from '@/components/ui/form/UFormInput.vue'
import { mapGetters } from 'vuex';

export default {
  name: "chatWrapper",

  components: { ChatHead, ChatMessage, UFormInput },

  data() {
    return {
      message: null,
    }
  },

  computed: {
    ...mapGetters(['getActiveDialogUser']),

    groupedMessages() {
      let groups = [];

      this.getActiveDialogUser?.chat.reduce((acc, currValue) => {
        const currDate = new Date(currValue.time).toLocaleDateString();
        const accDate = new Date(acc.time).toLocaleDateString();

        if (acc.type && acc.type !== currValue.type) {
          if (accDate !== currDate) {
            groups.push({ isDateGroup: true, date: currValue.time, messages: [currValue] });
          } else {
            groups.push({ isDateGroup: false, messages: [currValue] });
          }
        } else if (accDate !== currDate) {
          groups.push({ isDateGroup: true, date: currValue.time, messages: [currValue] });
        } else {
          groups[groups.length - 1].messages.push(currValue);
        }

        return currValue;
      }, { type: null, text: null, time: null });

      return groups;
    },

  },

  methods: {
    scrollToBottomChat() {
      if (this.$refs.chatBody) {
        this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight;
      }
    },

    formatDate(date) {
      const options = { weekday: 'long' };
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const formattedDate = new Date(date).toLocaleDateString('ru-RU', options);

      if (new Date(date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }) === new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })) {
        return 'Сегодня';
      } else if (new Date(date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }) === yesterday.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })) {
        return 'Вчера';
      } else {
        return formattedDate;
      }
    },
  },

  mounted() {
    this.scrollToBottomChat();
  },

  updated() {
    this.scrollToBottomChat();
  }
}
</script>

<style lang="scss" scoped>
.chat {
  overflow: hidden;
  border: $border-width solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
  backdrop-filter: blur(5px);

  @include on-breakpoint('md') {
    border-radius: $border-radius-block;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 8px;
    border-bottom: $border-width solid rgba($accent-color, 0.2);

    @include on-breakpoint('sm') {
      padding: 16px 25px;
    }

    @include on-breakpoint('md') {
      padding: 20px;
    }

    @include on-breakpoint('xxl') {
      padding: 30px;
    }
  }

  &__body {
    height: calc(100% - 79px - 82px);
    padding: 10px 25px;
    overflow-y: auto;

    @include on-breakpoint('md') {
      height: calc(100% - 90px - 91px);
      padding: 20px;
    }

    @include on-breakpoint('xl') {
      height: calc(100% - 96px - 104px);
    }

    @include on-breakpoint('xxl') {
      height: calc(100% - 128px - 132px);
      padding: 30px;
    }
  }

  &__foot {
    padding: 15px 25px;
    border-top: $border-width solid rgba($accent-color, 0.2);

    @include on-breakpoint('md') {
      padding: 20px;
    }

    @include on-breakpoint('xxl') {
      padding: 30px;
    }
  }

  &__group {
    margin: 10px 0;

    @include on-breakpoint('xxl') {
      margin: 20px 0;
    }
  }

  &__date {
    width: fit-content;
    padding: 7px 10px;
    margin: 0 auto 10px;
    border-radius: $border-radius-block;
    border: $border-width solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    font-size: 12px;
    line-height: normal;
    color: $white-color;

    @include on-breakpoint('md') {
      padding: 7px 13px;
    }

    @include on-breakpoint('xxl') {
      padding: 10px 20px;
      margin: 0 auto 20px;
      font-size: 14px;
    }
  }

  &-empty {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: $border-width solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    text-align: center;

    @include on-breakpoint('md') {
      display: flex;
      border-radius: $border-radius-block;
    }

    &__image {
      @include on-breakpoint('xxl') {
        width: 120px;
        height: 91px;
      }
    }

    &__title {
      margin-top: 30px;
      font-size: 14px;
      line-height: 30px;
      font-weight: 700;

      @include on-breakpoint('xl') {
        font-size: 16px;
        line-height: normal;
      }

      @include on-breakpoint('xxl') {
        margin-top: 60px;
        font-size: 18px;
      }
    }

    &__text {
      margin-top: 5px;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      color: $accent-color;

      @include on-breakpoint('xl') {
        margin-top: 10px;
      }

      @include on-breakpoint('xxl') {
        margin-top: 15px;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
}
</style>
