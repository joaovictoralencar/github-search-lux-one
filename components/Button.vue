<template>
  <button class="btn" :class="hoverAnim ? 'animated' : ''">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    hoverAnim: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  border-style: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &.animated {
    transition: transform 0.1s ease-in;
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
}
</style>
