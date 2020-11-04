<template>
  <li class="user-list-item">
    <section
      class="user-list-item-container"
      :class="!endLoading ? 'loading' : ''"
    >
      <nuxt-link
        v-if="endLoading"
        :to="{ name: 'userInfo', params: { userDetail: user } }"
      >
        <img
          class="user-avatar"
          :src="user.avatar_url"
          :alt="user.login + ' avatar'"
        />
      </nuxt-link>
      <LoadingItem v-else class="load-image-animation" role="loading image" />
      <div v-if="endLoading" class="user-info">
        <header class="user-info-header">
          <nuxt-link
            :to="{ name: 'userInfo', params: { userDetail: user } }"
            class="user-name text-1"
            >{{ user.login }}
            <span v-if="user.name !== null">({{ user.name }})</span></nuxt-link
          >
          <div class="text-2">{{ user.location }}</div>
        </header>
        <p class="text-2">Repositórios públicos: {{ user.public_repos }}</p>
        <p class="text-2">Seguidores: {{ user.followers }}</p>
        <p class="text-2">Seguindo: {{ user.following }}</p>
      </div>
      <LoadingItem v-else class="load-info-animation" role="loading info" />
    </section>
    <div class="separator-line" role="separator"></div>
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
    console.log(this.userResult)
    if (this.userResult) {
      await this.$axios
        .$get(this.userResult.url)
        .then((resp) => {
          this.user = resp
          console.log(this.user)
        })
        .catch((err) => {
          console.error(err)
        })
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
  created() {
    this.$axios.setHeader('Authorization', 'token ' + process.env.TOKEN_ACCESS)
  },
  mounted() {},
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
    .load-image-animation {
      @include flex-center();
      outline: 2px solid $black;
      width: 95.1px;
      height: 84px;
    }
    .load-info-animation {
      @include flex-center();
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    &.loading {
      align-items: center;
    }
  }
  .separator-line {
    margin: 17.5px 0 10px 0;
  }
}
</style>
