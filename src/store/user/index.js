const userStoreModule = {
  namespaced: true,
  state: () => ({
    hasUserInfo: null,
  }),
  mutations: {
    addUserInfo: (state, userInfo) => {
      state.hasUserInfo = userInfo
    }
  }
}

export default userStoreModule