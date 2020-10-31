<template>
  <main class="container">
    <header>
      <h1 class="title big">
        Github <span class="title title-span-style">Search</span>
      </h1>
    </header>
    <SearchBar />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  min-width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
