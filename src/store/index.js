import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedList =localStorage.getItem("trello-lists");

const store = new Vuex.Store({
  state: {
    lists: savedList ? JSON.parse(savedList):[
      {
        title: "Backlog",
        cards: [
          { body: "English" },
          { body: "Mathematics" },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ]
  },
  mutations: {
    addlist(state,payload) {
      state.lists.push({ title:payload.title,cards:[]})
    },
  },
  actions: {
    addlist(context,payload) {
      context.commit("addlist",payload)
    }
  },
  getters: {
  }
})

store.subscribe((mutation,state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
