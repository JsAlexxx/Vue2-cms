export default {
  namespaced: true,
  state: () => ({
    hasPrivateRoutes: null,
  }),
  mutations: {
    addPrivateRoutesToStore(state,routes) {
      state.hasPrivateRoutes = routes
    }
  }
}