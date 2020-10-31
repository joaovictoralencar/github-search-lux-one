<template>
  <button
    v-if="submitButton"
    class="btn"
    :class="hoverAnim ? 'animated' : ''"
    :type="submitButton ? 'submit' : 'button'"
  >
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
    submitButton: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default() {
        console.log('give-me a function')
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  border-style: none;
  outline: none;
  transition: transform 0.1s ease-in;
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
