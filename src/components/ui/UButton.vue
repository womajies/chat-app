<template>
  <component :is="to ? 'router-link' : href ? 'a' : 'button'" :class="classes" :disabled="disabled || loading"
    :style="styles" :to="!disabled ? to : null" :href="!disabled ? href : null" :target="href ? '_blank' : null"
    :type="type" @click="$emit('click', $event)">
    <slot name="loader">
      <!-- <ULoader v-if="loading" /> -->
    </slot>

    <div :class="{ invisible: loading }" class="relative center">
      <slot name="prepend">
        <UIcon v-if="icon" :class="[String(label) || $slots.default || iconPadding === true ? 'mr-2' : iconPadding]"
          :clickable="!disabled && !String(label)" :name="icon" :section="iconSection" :size="iconSize ? iconSize : null"
          :small="smallIcon" class="flex-shrink-0" />
      </slot>
      <div :class="{ 'mr-5': appendIcon || $slots.append }" class="center" style="line-height: normal;">
        <slot>
          {{ label }}
        </slot>
      </div>
      <slot name="append">
        <UIcon v-if="appendIcon" :clickable="!disabled && !String(label)" :name="appendIcon" :section="appendIconSection"
          :size="appendIconSize" class="flex-shrink-0 ml-auto" />
      </slot>
    </div>
  </component>
</template>
<script>
// import ULoader from "@/components/ui/ULoader";
import UIcon from "@/components/ui/UIcon";

export default {
  name: "UButton",

  components: { UIcon },

  props: {
    label: {
      type: [Number, String],
      default: "",
    },
    variant: {
      type: String,
      default: "default",
      validator: (v) => !v || ["default", "primary"].includes(v),
    },
    size: {
      type: String,
      default: '',
      validator: (v) => !v || ['sm'].includes(v),
    },
    padding: {
      type: String,
      default: null,
    },

    icon: {
      type: String,
      default: '',
    },
    iconSection: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
    },
    iconPadding: {
      type: [Boolean, String],
      default: null,
    },

    smallIcon: Boolean,

    appendIcon: {
      type: String,
      default: '',
    },
    appendIconSection: {
      type: String,
      default: '',
    },
    appendIconSize: {
      type: String,
      default: '',
    },

    to: {
      type: [String, Object],
      default: "",
    },

    href: {
      type: [String, Object],
      default: "",
    },

    disabled: Boolean,
    loading: Boolean,

    type: {
      type: String,
      default: "button",
      validator: (v) => ["button", "submit", "reset"].includes(v),
    },
  },

  computed: {
    classes() {
      return {
        btn: true,
        [`btn--${this.variant}`]: this.variant,
        [`btn--${this.size}`]: this.size,
        "btn-is-variant": this.variant !== "default",
        "btn--loading": this.loading,
        "btn--disabled": this.disabled,
        'btn--icon': (this.icon || this.$slots.prepend) && !this.label && !this.$slots.default,
      };
    },
    styles() {
      return {
        padding: this.padding,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: $border-radius-btn;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
  backdrop-filter: blur(5px);

  transition: color $transition-timing-function $transition-duration,
    border-color $transition-timing-function $transition-duration,
    background-color $transition-duration $transition-timing-function,
    background $transition-timing-function $transition-duration,
    opacity $transition-timing-function $transition-duration,
    transform $transition-timing-function $transition-duration;

  &:not(&[disabled]):focus-visible {
    outline: $border-width solid $btn-border-color;
  }

  &-icon {
    display: flex;
    flex-shrink: 0;
    fill: currentColor;
  }

  &[disabled] {
    .u-icon.u-icon--clickable {
      cursor: not-allowed;
    }
  }

  &--primary {
    padding: 15px 20px;
    border-radius: $border-radius-btn;
    border: $border-width solid rgba($btn-border-color, 0.80);
    backdrop-filter: blur(5px);
    font-size: 12px;
    line-height: normal;
    font-weight: 600;
    color: $white-color;

    @include on-breakpoint('md') {
      padding: 12px 15px;
      border-radius: 12px;
    }

    @include on-breakpoint('xl') {
      padding: 15px 20px;
      border-radius: $border-radius-btn;
    }

    @include on-breakpoint('xxl') {
      font-size: 14px;
    }

    &:hover {
      background-color: rgba($btn-border-color, 0.3);
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
