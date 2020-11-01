<template>
  <main class="container">
    <header>
      <h2 class="title medium">
        Github <span class="title title-span-style">Search</span>
      </h2>
      <SearchBar :is-big="false" class="search-bar" />
      <section>
        <h3>Resultado da busca:</h3>
        <h4>{{ result.total_count }} resultados para "{{ userSearch }}"</h4>
      </section>
    </header>
    <section class="content">
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.login }}</li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      users: [],
      userSearch: '',
    }
  },
  mounted() {
    // get the result from previous page
    this.result = this.$route.params.result
    // get the user search value from previous page
    this.userSearch = this.$route.params.userSearch
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
  text-align: left;
  flex-direction: column;
  header {
    width: 100%;
  }
  .search-bar {
    margin-bottom: 7px;
  }
  .content {
    width: 100%;
  }
}
</style>
