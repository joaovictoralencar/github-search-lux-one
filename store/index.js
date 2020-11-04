export const state = () => ({
  userSearch: '',
  userDetail: {},
})

export const mutations = {
  setUserSearch(state, userSearch) {
    state.userSearch = userSearch
  },
  setUserDetail(state, user) {
    state.userDetail = user
  },
  setRepositories(state, repositories) {
    state.userDetail = repositories
  },
}
