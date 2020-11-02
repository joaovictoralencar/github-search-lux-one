<template>
  <main class="container">
    <header>
      <h2 class="title medium">
        Github <span class="title title-span-style">Search</span>
      </h2>
      <SearchBar :is-big="false" class="search-bar" @newSearch="newSearch" />
      <section v-if="result">
        <h3>Resultado da busca:</h3>
        <h4>{{ result.total_count }} resultados para "{{ userSearch }}"</h4>
        <div role="separator" class="separator-line"></div>
      </section>
    </header>
    <section v-if="result.total_count > 0" class="content">
      <nav>
        <ul class="users-list">
          <UserListItem
            v-for="user in users"
            :key="user.id"
            :user-result="user"
          ></UserListItem>
        </ul>
      </nav>
    </section>
    <section v-else>
      <p class="text-1">
        Infelizmente não encontramos nenhum usuário com esse nome.
      </p>
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
  methods: {
    newSearch(params) {
      this.result = params.result
      this.userSearch = params.userSearch
      if (this.result) this.users = this.result.items
    },
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
  justify-content: flex-start;
  align-items: left;
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
  .separator-line {
    margin: 9.5px 0 17.5px 0;
  }
  .users-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
