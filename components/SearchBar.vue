<template>
  <form
    role="search"
    class="search-bar-wrap"
    :class="isBig ? 'big' : 'medium'"
    action="/"
    method="get"
    @submit.prevent="onSubmit"
  >
    <label for="search-user">
      <span class="visually-hidden">Search</span>
    </label>
    <input
      id="search-user"
      v-model="userSearch"
      type="text"
      placeholder="Github Username"
      :class="isBig ? 'big' : 'medium'"
    />
    <Button
      class="search-icon-container"
      :hover-anim="true"
      :submit-button="true"
    >
      <span class="visually-hidden">Submit Search</span>
      <img src="~/assets/images/icons/search.png" alt="search bar icon" />
    </Button>
  </form>
</template>

<script>
/* eslint-disable no-console */

export default {
  props: {
    isBig: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      userSearch: '',
      canSearch: true,
    }
  },
  mounted() {
    this.$axios.setHeader('Authorization', 'token ' + process.env.TOKEN_ACCESS)
    this.$on('search-user', (userSearch) => {
      this.userSearch = userSearch
      this.searchGithubUser()
    })
  },
  methods: {
    onSubmit() {
      this.searchGithubUser()
    },
    async searchGithubUser() {
      // make the axios requisiton
      this.canSearch = false // prevent multiple requests
      /* if already on searchResult page, get the new value from github */
      await this.$axios
        .$get(
          'https://api.github.com/search/users?q=' +
            this.userSearch +
            '+in:login'
        )
        .then((resp) => {
          const newUserSearch = {
            result: resp, // result from github api
            userSearch: this.userSearch, // string with the user typed
          }
          this.$store.commit('setUserSearch', newUserSearch) // save on store
          this.$cookies.set('user-search', newUserSearch.userSearch)
          if (this.$route.name === 'searchResult') {
            this.canSearch = true // can make a new search
          } else {
            this.$router.push('/searchResult') // go to search route
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-bar-wrap {
  &.big {
    max-width: 600px;
    width: 100%;
    min-width: 100px;
    height: 50px;
  }
  &.medium {
    width: 100%;
    min-width: 100px;
    height: 35px;
  }

  @include flex-center();
  .visually-hidden {
    display: none;
  }
  input[type='text'] {
    width: 100%;
    height: 100%;
    border: 2px solid $black;
    box-sizing: border-box;
    padding: 0 10px;
    color: $dark-grey;
    font-family: Roboto Mono;
    &.big {
      font-size: 1.5rem;
    }
    &.medium {
      font-size: 1rem;
    }
  }
  .search-icon-container {
    max-width: 100px;
    width: 100%;
    min-width: 100px;
    height: 100%;
    @include flex-center();
    position: relative;
    right: 2px;
    background-color: $black;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: Roboto Mono;
    opacity: 0.3; /* Firefox */
  }

  :-ms-input-placeholder {
    font-family: Roboto Mono;
    /* Internet Explorer 10-11 */
  }

  ::-ms-input-placeholder {
    font-family: Roboto Mono;
    /* Microsoft Edge */
  }
}
</style>
