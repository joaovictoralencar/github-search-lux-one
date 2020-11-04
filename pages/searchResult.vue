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
    <div v-if="userSearch.result">
      <section v-if="userSearch.result.total_count > 0" class="content">
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userTextSearch: null,
    }
  },
  computed: {
    userSearch() {
      return this.$store.state.userSearch
    },
  },
  mounted() {
    // if there no userSearch
    if (!this.userSearch) {
      this.userTextSearch = this.$cookies.get('user-search')
      this.searchGithubUser()
    }
  },
  methods: {
    async searchGithubUser() {
      // make the axios requisiton
      this.canSearch = false // prevent multiple requests
      /* if already on searchResult page, get the new value from github */
      await this.$axios
        .$get(
          'https://api.github.com/search/users?q=' +
            this.userTextSearch +
            '+in:login'
        )
        .then((resp) => {
          const newUserSearch = {
            result: resp, // result from github api
            userSearch: this.userTextSearch, // string with the user typed
          }
          this.$store.commit('setUserSearch', newUserSearch) // save on store
        })
        .catch((err) => {
          console.error(err)
        })
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
