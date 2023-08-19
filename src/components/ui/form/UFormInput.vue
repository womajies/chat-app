<template>
  <div class="input" :class="classes">
    <input ref="input" type="text" v-model="inputValue" @keypress.enter="handleSend" @focus="handleFocus"
      @blur="handleBlur" class="input__field" :placeholder="placeholder" />
    <UButton class="input__btn" @click="handleSend">
      <UIcon name="arrow-top" width="8" height="16" />
    </UButton>
  </div>
</template>

<script>
import UButton from '@/components/ui/UButton.vue'
import UIcon from '@/components/ui/UIcon.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "UFormSearch",

  components: { UButton, UIcon },

  props: {
    placeholder: {
      type: String,
      default: 'Напишите сообщение ...',
    },

    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      inputValue: '',
      isFocus: false,
    };
  },

  watch: {
    // inputValue(newValue) {
    //   this.$emit('input', newValue);
    // },
    value(newValue) {
      this.inputValue = newValue;
    },
    getActiveDialogUser() {
      this.setFocus()
    }
  },

  methods: {
    ...mapActions([
      'sendMessageToChat'
    ]),
    handleInput() {
      // this.$emit('input', this.inputValue);
    },
    handleSend() {
      if (this.inputValue.trim().length > 0) {
        // this.$emit('input', this.inputValue);
        this.$emit('send', this.inputValue);
        this.sendMessageToChat({
          id: this.getActiveDialogUser?.chat?.length + 1,
          time: new Date(),
          text: this.inputValue.trim(),
          type: 'own',
        })
  
        this.inputValue = ''
      }
    },
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      this.isFocus = false;
    },
    setFocus() {
      this.$refs.input.focus();
    }
  },

  computed: {
    ...mapGetters(['getActiveDialogUser']),

    classes() {
      return {
        'input--focus': this.isFocus,
      }
    },
  },

  mounted() {
    this.setFocus();
  },
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.input--focus {
    .input__field {
      border-color: $btn-border-color;
    }
  }

  &__field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 48px;
    padding: 6px 60px 6px 20px;
    cursor: pointer;
    font-size: 13px;
    line-height: normal;
    font-weight: 500;
    color: $white-color;
    border-radius: 15px;
    border: $border-width solid rgba(255, 255, 255, 0.15);
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    transition: border-color $transition-duration $transition-timing-function;

    @include on-breakpoint('md') {
      min-height: 49px;
      padding: 6px 44px 6px 20px;
      font-size: 12px;
      border-radius: 12px;
    }

    @include on-breakpoint('xl') {
      min-height: 55px;
      padding: 9px 64px 9px 20px;
      font-size: 14px;
      border-radius: $border-radius-input;
    }

    @include on-breakpoint('xxl') {
      min-height: 66px;
      padding: 10px 68px 10px 20px;
      font-size: 16px;
    }

    &:hover {
      border-color: $btn-border-color;
    }

    &::placeholder {
      font-size: 13px;
      line-height: normal;
      font-weight: 500;
      color: $accent-color;

      @include on-breakpoint('md') {
        font-size: 12px;
      }

      @include on-breakpoint('xl') {
        font-size: 14px;
      }

      @include on-breakpoint('xxl') {
        font-size: 16px;
      }
    }
  }

  &__btn {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: $accent-color-four;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    font-size: 14px;
    line-height: normal;
    font-weight: 500;

    @include on-breakpoint('md') {
      right: 9px;
      width: 37px;
      height: 37px;
    }

    @include on-breakpoint('xl') {
      border-radius: $border-radius-btn;
    }

    @include on-breakpoint('xxl') {
      right: 10px;
      width: 40px;
      height: 40px;
      font-size: 16px;
    }

    &:hover {
      color: $white-color;
      background-color: $accent-color-four;
    }
  }
}
</style>