import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State } from '../../types';

const state: State = {
  user: {},
  access: []
};

/* const getters: GetterTree<State, any> = {
  authUser: state => state.user
};

const actions: ActionTree<State, any> = {
  async loadUser (context: any, instance: any) {
    try {
      if (!await this.$auth.isAuthenticated()) {
        await context.commit('setUser', false)
      } else if (!context.state.user) {
        const user = await instance.prototype.$auth.getUser();
        await context.commit('setUser', user)
      }
    } catch (e) {
      if (e.name !== 'AuthApiError') {
        throw e
      }
      await context.commit('setUser', false)
    }
  }
};

const mutations: MutationTree<State> = {
  setUser(state: State, user: any) {
    state.user = user;
    state.access = [];

    if (user && user.hasOwnProperty('access') && Array.isArray(user.access)) {
      state.access = user.access
    }
  }
}; */

export default {
  state,
  // getters,
  // actions,
  // mutations
}

/*class auth extends VuexModule {
  @Action async loadUser (context: any, instance: any) {
    try {
      if (!await instance.prototype.$auth.isAuthenticated()) {
        await context.commit('setUser', false)
      } else if (!context.state.user) {
        const user = await instance.prototype.$auth.getUser();
        await context.commit('setUser', user)
      }
    } catch (e) {
      if (e.name !== 'AuthApiError') {
        throw e
      }
      await context.commit('setUser', false)
    }
  }

  @Mutation setUser (user: any) {
    this.user = user;
    this.access = [];
    if (user && user.hasOwnProperty('access') && Array.isArray(user.access)) {
      this.access = user.access
    }
  }

  get authUser() {
    return this.user
  }

  /!* get hasAccess() {
    return access => this.access.includes(access)
  } *!/
}*/
