<template>
  <section class="repos-view-container">
    <header class="repos-view-header">
      <span>
        <img
          class="repos-view-icon"
          src="~/assets/images/icons/book-icon.svg"
          alt="repository icon"
        />
      </span>
      <h3 class="text-1">{{ repository.name }}</h3>
      <span class="see-on-github-btn-container">
        <Button class="see-on-github-btn" :on-click="seeOnGit">
          <img src="~/assets/images/icons/github-icon.svg" alt="github icon" />
        </Button>
      </span>
    </header>
    <section class="repos-view-description">
      <p class="text-light">{{ repository.description }}</p>
    </section>
    <footer class="repos-view-footer">
      <span v-if="repository.language">
        <img
          src="~/assets/images/icons/language-icon.svg"
          alt="language icon"
        />
        <p class="text-2">
          {{ repository.language }}
        </p>
      </span>
      <span v-if="repository.stargazers_count">
        <img src="~/assets/images/icons/star-icon.svg" alt="language icon" />
        <p class="text-2">{{ repository.stargazers_count }}</p>
      </span>
      <span v-if="repository.forks_count">
        <img src="~/assets/images/icons/fork-icon.svg" alt="language icon" />
        <p class="text-2">{{ repository.forks_count }}</p>
      </span>
      <span v-if="repository.license">
        <img src="~/assets/images/icons/scale-icon.svg" alt="language icon" />
        <p class="text-2">{{ repository.license.name }}</p>
      </span>
      <span v-if="repository.updated_at">
        <p class="text-2 with-label">
          Útilma atualização: {{ convertDate(repository.updated_at) }}
        </p>
      </span>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertDate(date) {
      const y = date.substring(0, 4)
      const m = date.substring(5, 7)
      const d = date.substring(8, 10)
      return d + '/' + m + '/' + y
    },
    seeOnGit() {
      window.open(this.repository.html_url)
    },
  },
}
</script>

<style lang="scss" scoped>
.repos-view-container {
  @include outline-box();
  display: flex;
  flex-direction: column;
  padding: 12px 17px 0px 17px;
  margin-bottom: 16px;
  min-height: 140px;
  .repos-view-header {
    @include flex-center();
    justify-content: flex-start;
    margin-bottom: 6px;
    .text-1 {
      margin-left: 12px;
      width: 100%;
      display: flex;
    }
    .repos-view-icon {
      display: flex;
      align-self: flex-end;
    }
    .see-on-github-btn-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .see-on-github-btn {
        padding: 0;
        background-color: $white;
        img {
          width: 24px;
        }
      }
    }
  }
  .repos-view-description {
    height: 100%;
    display: flex;
    flex-grow: 1;
    p {
      font-size: 0.875rem !important;
    }
  }
  .repos-view-footer {
    margin: 8px 0;
    @include flex-center();
    justify-content: flex-start;
    span {
      margin-right: 10px;
      @include flex-center();
      p {
        margin-left: 6px;
        &.with-label {
          margin-left: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .repos-view-footer {
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
}
</style>
