import { getHomeData } from '@/utils/api/app';

const homeStoreModule = {
  namespaced: true,
  state: () => ({
    homeData: {},
  }),
  mutations: {
    addHomeDataToStore: (state,data) => {
      state.homeData = data
    }
  },
  actions: {
    getHomeDataAction: ({commit}) => {
      getHomeData().then(homeDataRes => {
        commit('addHomeDataToStore', homeDataRes.data)
      })
    }
  }
}

export default homeStoreModule


