<template>
  <li class="user-list-item">
    <section class="user-list-item-container">
      <a v-if="endLoading" :href="'https://github.com/' + user.login">
        <img
          class="user-avatar"
          :src="user.avatar_url"
          :alt="user.login + ' avatar'"
        />
      </a>
      <LoadingItem v-else class="load-image-animation" role="loading image" />
      <div v-if="endLoading" class="user-info">
        <header class="user-info-header">
          <a :href="'https://github.com/' + user.login" class="user-name text-1"
            >{{ user.login }}
            <span v-if="user.name !== null">({{ user.name }})</span></a
          >
          <div class="text-2">{{ user.location }}</div>
        </header>
        <p class="text-2">Repositórios públicos: {{ user.public_repos }}</p>
        <p class="text-2">Seguidores {{ user.followers }}</p>
        <p class="text-2">Seguindo: {{ user.following }}</p>
      </div>
      <LoadingItem v-else class="load-info-animation" role="loading info" />
    </section>
    <div class="separator-line"></div>
  </li>
</template>

<script>
/* eslint-disable no-console */

export default {
  props: {
    userResult: {
      type: Object,
      required: true,
    },
  },
  // fetch user information asynchronous using github api url
  async fetch() {
    if (this.userResult) {
      this.user = await this.$axios.$get(this.userResult.url).catch((err) => {
        console.error(err)
      })
      console.log(this.user)
    }
  },
  data() {
    return {
      user: null,
    }
  },
  computed: {
    endLoading() {
      return this.user !== null
    },
  },
  mounted() {
    this.$axios.setHeader('Authorization', 'token ' + process.env.TOKEN_ACCESS)
  },
}
</script>

<style lang="scss" scoped>
.user-list-item {
  @include flex-center-col();
  .user-list-item-container {
    @include flex-center();
    align-items: flex-start;
    justify-content: left;
    width: 100%;
    .user-avatar {
      outline: 2px solid $black;
      width: 84px;
      height: 84px;
    }
    .user-info {
      @include flex-center-col();
      align-items: flex-start;
      justify-content: left;
      margin-left: 14px;
      width: 100%;
      height: 100%;
      .user-info-header {
        width: 100%;
        @include flex-center();
        justify-content: space-between;
        flex-grow: 1;
      }
      a:hover {
        text-decoration: underline;
      }
      .user-name {
        text-decoration: none;
      }
      .text-2 {
        text-align: left;
      }
    }
    .load-info-animation {
    }
  }
  .separator-line {
    margin: 17.5px 0 10px 0;
  }
}
</style>
