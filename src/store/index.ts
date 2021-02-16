import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface GlobalState {
  count: number
}

export const StateKey: InjectionKey<Store<GlobalState>> = Symbol()

export const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    double(state: { count: number }) {
      return state.count * 2
    }
  },
  mutations: {
    increment(state: { count: number }) {
      state.count++
    },
    decrement(state: { count: number }) {
      state.count--
    }
  },
  actions: {
    asyncIncrement(context) {
      context.commit('increment')
    }
  }
})

// useStore を呼び出す度、 StateKey で型を定義するのを避けるために、ここであらかじめ定義する
export function useStore() {
  return baseUseStore(StateKey)
}
