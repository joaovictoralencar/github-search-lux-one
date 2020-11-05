<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: Roboto Mono !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
@media screen and (max-width: 600px) {
  .container {
    padding: 5vw;
  }
}
.title {
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  margin-bottom: 7px;
  &.big {
    font-size: 4rem;
  }
  &.medium {
    font-size: 2.5rem;
    text-align: left;
  }
}
.title-span-style {
  font-style: italic;
  font-weight: normal;
}
.separator-line {
  width: 100%;
  height: 2px;
  background-color: $dark-grey;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 1rem;
  font-weight: 300;
}
.text-1 {
  color: $black;
  font-size: 1rem;
  font-weight: bold;
}
.text-2 {
  color: $black;
  font-size: 0.75rem;
}
.text-3 {
  color: $black;
  font-size: 0.625rem;
}
.text-light {
  font-weight: 300;
}
.ellipsis-text-line {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
