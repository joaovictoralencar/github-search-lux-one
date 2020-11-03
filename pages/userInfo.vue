<template>
  <main class="container">
    <section class="user-detail-container">
      <Button
        v-if="endLoading"
        class="see-on-git-btn"
        :hover-anim="true"
        :on-click="seeOnGit"
      >
        <div class="text-3">Ver no GitHub</div>
        <img src="~/assets/images/icons/github-icon.svg" alt="github icon" />
      </Button>
      <section
        class="user-detail-personal"
        :class="!endLoading ? 'loading' : ''"
      >
        <img
          v-if="endLoading"
          class="user-avatar"
          :src="user.avatar_url"
          :alt="user.login + ' avatar'"
        />
        <LoadingItem v-else class="load-image-animation" role="loading image" />
        <div v-if="endLoading" class="user-info">
          <header class="user-info-header">
            <h2 class="user-name">{{ user.login }}</h2>
            <h3 v-if="user.name !== null" class="text-light">
              {{ user.name }}
            </h3>
          </header>
          <section class="user-info-body">
            <p class="detail-text">{{ user.bio }}</p>
            <div class="separator-line" role="separator"></div>
            <div class="user-info-item">
              <div class="social-numbers">
                <img
                  src="~/assets/images/icons/community-icon.svg"
                  alt="ícone de comunidade"
                />
                <p class="detail-text social-item">
                  {{ user.followers }} Seguidores
                </p>
                <p class="detail-text social-item">
                  {{ user.following }} Seguindo
                </p>
              </div>
            </div>
            <div v-if="user.company != null" class="user-info-item">
              <img
                src="~/assets/images/icons/company-icon.svg"
                alt="ícone de empresa"
                class="social-item company"
              />
              <p class="detail-text">{{ user.company }}</p>
            </div>
            <div v-if="user.location != null" class="user-info-item">
              <img
                src="~/assets/images/icons/location-icon.svg"
                alt="ícone de localização"
                class="social-item location"
              />
              <p class="detail-text">{{ user.location }}</p>
            </div>
            <div v-if="user.email != null" class="user-info-item">
              <img
                src="~/assets/images/icons/email-icon.svg"
                alt="ícone de email"
                class="social-item"
              />
              <p class="detail-text">{{ user.email }}</p>
            </div>
          </section>
        </div>
        <LoadingItem v-else class="load-info-animation" role="loading info" />
      </section>
      <div class="separator-line big" role="separator"></div>
      <section class="user-detail-repositories">
        <h3>Reposiórios Públicos 40</h3>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userChoosen: null,
    }
  },
  computed: {
    user() {
      return this.userChoosen
    },
    endLoading() {
      return this.user !== null
    },
  },
  mounted() {
    this.$store.commit('setUserDetail', this.$route.params.userDetail)
    this.userChoosen = this.$store.state.userDetail
  },
  methods: {
    seeOnGit() {
      window.open(this.user.html_url)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  min-width: 260px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-direction: column;
  .user-detail-container {
    width: 100%;
    height: 100vh;
    max-width: 860px;
    @include flex-center-col();
    padding: 30px 20px 0 20px;
    justify-content: flex-start;
    .user-detail-personal {
      width: 100%;
      @include flex-center();
      justify-content: flex-start;
      .user-avatar {
        outline: 2px solid $black;
        width: 240px;
        height: 240px;
      }
      .user-info {
        width: 100%;
        height: 100%;
        max-height: 244px;
        margin-left: 10px;
        text-align: left;
        .user-info-header {
          margin-bottom: 5px;
          .user-name {
            font-size: 1.625rem;
          }
        }
        .user-info-body {
          .separator-line {
            margin-top: 4px;
            margin-bottom: 5px;
          }
          .user-info-item {
            @include flex-center();
            justify-content: flex-start;
            width: 100%;
            margin-bottom: 4px;
            img {
              margin-right: 10px;
              &.company {
                margin-left: 3px;
              }
              &.location {
                margin-left: 4px;
              }
            }
            .social-numbers {
              @include flex-center();
              justify-content: flex-start;
              width: 100%;
              .social-item {
                margin-right: 10px;
              }
            }
          }
        }
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
  .separator-line.big {
    margin: 20px 0;
  }
  .detail-text {
    font-size: 0.875rem;
    font-weight: 300;
  }
  .see-on-git-btn {
    width: 100%;
    max-width: 128px;
    padding: 0;
    position: relative;
    top: 36px;
    @include flex-center();
    align-self: flex-end;
    outline: 2px solid $black;
    background-color: $white;
    .text-3 {
      font-family: Roboto Mono;
      font-style: normal;
      font-weight: bold;
      margin-left: 8px;
    }
    img {
      width: 24px;
      height: 24px;
      margin: 5px 8px;
    }
  }
}
</style>
