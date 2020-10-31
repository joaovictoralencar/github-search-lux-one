<template>
  <main class="container">
    <header>
      <h2 class="title medium">
        Github <span class="title title-span-style">Search</span>
      </h2>
      <SearchBar :is-big="false" class="search-bar" />
      <section></section>
    </header>
    <ol>
      <li v-for="user in users" :key="user.id">{{ user.login }}</li>
    </ol>
  </main>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      users: [],
    }
  },
  mounted() {
    // get the result from previous page
    this.result = this.$route.params.result
    // only define users if the search
    if (this.result) this.users = this.result.items
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 720px;
  width: 100%;
  min-width: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  header {
    width: 100%;
  }
  .search-bar {
    margin-bottom: 7px;
  }
}
</style>
