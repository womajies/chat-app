<template>
  <svg
    :class="classes"
    :style="styles"
    class="u-icon"
    v-bind="$attrs"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    v-on="$listeners"
  >
    <use :href="href" :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  name: 'UIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      default: '',
    },
    // size: {
    //   type: [Number, String],
    //   default: 20,
    // },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    strokeColor: {
      type: String,
      default: null,
    },
    clickable: Boolean,
    small: Boolean,
  },

  computed: {
    classes() {
      return {
        'u-icon--clickable': this.clickable,
        'u-icon--sm': this.small,
      }
    },

    styles() {
      return {
        width: this.width ? this.width : null,
        height: this.height ? this.height : null,
        color: this.color,
        stroke: this.strokeColor,
      }
    },

    // formattedSize() {
    //   if (!this.size) return '20px'

    //   if (String(this.size).includes('px')) return this.size
    //   else return `${this.size}px`
    // },

    computedSection() {
      return this.section ? 'icon_' + this.section : 'icon'
    },

    href() {
      return process.env.NODE_ENV === 'production' ? `/chat-app/img/icon/${this.computedSection}.svg#${this.name}` : `/img/icon/${this.computedSection}.svg#${this.name}`
    },
  },
}
</script>

<style lang="scss" scoped>
.u-icon {
  // transition: fill $transition-timing-function $transition-duration;
  fill: currentColor;
  flex-shrink: 0;
}
</style>
