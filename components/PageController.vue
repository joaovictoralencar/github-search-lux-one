<template>
  <section v-if="totalItems > 30" class="pagination-numbers">
    <div
      v-if="index >= maxPages"
      class="page-number"
      :class="index === 1 ? 'selected' : ''"
      @click="selectPage(1)"
    >
      1
    </div>
    <div v-if="index >= maxPages" class="dividor">...</div>
    <div
      v-if="index != 1"
      class="page-number"
      :class="index === index - 1 ? 'selected' : ''"
      @click="selectPage(index - 1)"
    >
      {{ minIndex(index - 1) }}
    </div>
    <div
      class="page-number"
      :class="index === index ? 'selected' : ''"
      @click="selectPage(index)"
    >
      {{ index }}
    </div>
    <div
      v-if="index != totalPages"
      class="page-number"
      :class="index === index + 1 ? 'selected' : ''"
      @click="selectPage(index + 1)"
    >
      {{ maxIndex(index + 1) }}
    </div>
    <div v-if="index < totalPages - 1" class="dividor">...</div>
    <div
      v-if="index < totalPages - 1"
      class="page-number"
      :class="index === totalPages ? 'selected' : ''"
      @click="selectPage(totalPages)"
    >
      {{ totalPages }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    pagesType: {
      type: String,
      default: 'users',
    },
  },
  data() {
    return {
      index: 1,
      maxPages: 3,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / 30)
    },
  },
  methods: {
    selectPage(i) {
      this.index = i
      this.$emit(this.pagesType + 'Pages', this.index)
      // if (this.index === this.maxPages) this.maxPages++
    },
    minIndex(index) {
      return Math.max(1, index)
    },
    maxIndex(index) {
      return Math.min(index, this.totalItems)
    },
  },
}
</script>

<style lang="scss">
.pagination-numbers {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  .page-number {
    margin-left: 6px;
    padding: 5px 10px;
    &.selected {
      background-color: $black;
      color: $white;
    }
    &:hover {
      @include outline-box();
      cursor: pointer;
    }
  }
  .dividor {
    margin-left: 6px;
    padding: 5px 10px;
  }
}
</style>
