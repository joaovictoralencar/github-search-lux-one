<template>
  <div class="container">
    <h1 class="title red">
      Github <span class="title title-span-style">Search</span>
    </h1>
    <section class="search-bar-wrap">
      <input type="text" />
      <Button class="search-icon-container" :hover-anim="true">
        <img src="~/assets/images/icons/search.png" alt="search bar icon" />
      </Button>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 84px;
  color: #000000;
  margin-bottom: 7px;
}
.title-span-style {
  font-style: italic;
  font-weight: normal;
}
.search-bar-wrap {
  width: 600px;
  height: 50px;
  @include flex-center();

  input[type='text'] {
    width: 100%;
    height: 100%;
    border: 2px solid $black;
    box-sizing: border-box;
    font-size: 24px;
    padding: 0 10px;
    color: $dark-grey;
  }
  .search-icon-container {
    width: 100px;
    height: 100%;
    @include flex-center();
    position: relative;
    right: 2px;
    background-color: $black;
  }
}
</style>
