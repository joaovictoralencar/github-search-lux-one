<template>
  <main class="container">
    <header>
      <h2 class="title medium">
        Github <span class="title title-span-style">Search</span>
      </h2>
      <SearchBar :is-big="false" class="search-bar" />
      <section v-if="userSearch.result">
        <h3>Resultado da busca:</h3>
        <h4>
          {{ userSearch.result.total_count }} resultados para "{{
            userSearch.userSearch
          }}"
        </h4>
        <div role="separator" class="separator-line"></div>
      </section>
    </header>
    <section
      v-if="userSearch.result && userSearch.result.total_count > 0"
      class="content"
    >
      <nav>
        <ul class="users-list">
          <UserListItem
            v-for="user in userSearch.result.items"
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
  computed: {
    userSearch() {
      return this.$store.state.userSearch
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
