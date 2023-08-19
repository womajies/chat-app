<template>
  <div class="search" :class="classes">
    <input ref="searchInput" type="text" v-model="searchQuery" @focus="handleFocus"
      @blur="handleBlur" class="search__input" :placeholder="placeholder" />
    <UButton class="search__btn" @click="handleSearch">F</UButton>
  </div>
</template>

<script>
import UButton from '@/components/ui/UButton.vue'

export default {
  name: "UFormSearch",

  components: { UButton },

  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },

    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      searchQuery: '',
      isFocus: false,
    };
  },

  watch: {
    searchQuery(newValue) {
      this.$emit('input', newValue);
    },
  },

  methods: {
    handleInput() {
      this.$emit('input', this.searchQuery);
    },
    handleSearch() {
      this.$emit('input', this.searchQuery);
      this.$emit('search', this.searchQuery);
    },
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      this.isFocus = false
    },
    handleKeydown(evt) {
      if (evt.keyCode === 70 && (evt.ctrlKey || evt.metaKey)) {
        evt.preventDefault();
        this.$refs.searchInput.focus();
      }

      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.searchQuery = ''
        this.$refs.searchInput.blur();
        this.$emit('input', this.searchQuery);
        this.$emit('search', this.searchQuery);
      }
    },
  },

  computed: {
    classes() {
      return {
        'search--focus': this.isFocus,
      }
    },
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },

  beforeDestroyed() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.search--focus {
    .search__input {
      border-color: $btn-border-color;
    }
  }

  &__input {
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
      min-height: 39px;
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
      min-height: 60px;
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
      width: 27px;
      height: 27px;
    }

    @include on-breakpoint('xl') {
      width: 37px;
      height: 37px;
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