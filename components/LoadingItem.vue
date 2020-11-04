<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.loader {
  border: 8px solid $light-grey;
  border-radius: 50%;
  border-top: 8px solid $black;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
