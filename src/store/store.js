import Vue from 'vue'
import Vuex from 'vuex'
import {ENDPOINT, API_KEY} from "../data/apiConfig";

const BASE_URL = ENDPOINT;
const httpOptions = {
  headers: { 'X-Mashape-Key': API_KEY },
  method: 'GET' 
};

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    numOfGuests: 1,
    menu: [],
    searchResults: [],
    dishInfo: {}
  },
  mutations: {
    changeNumOfGuests(state, guests) {
      if(guests >= 1)
        state.numOfGuests = guests
    },
    setSearchResults(state, results) {
      state.searchResults= results
    },
    setDishInfo(state, info ){
      state.dishInfo = info
    },
    // should menu contain complete dishInfo objects or only id:s?
    addToMenu(state, id) {

      if( state.menu.some((obj) => obj.id == id)) {  // OBS not typesafe
        return;
      }
      if(state.dishInfo.id != id)
        console.log('id is not coherent with this dish');
      state.menu.push(state.dishInfo); // FIX THIS CHEAP HACK?
    }
  },
  actions: {
    changeNumOfGuests(context, payload) {
      context.commit('changeNumOfGuests', payload)
    },
    search(context, {query, type}) {
      let url = `${BASE_URL}/recipes/search?number=15&query=${query}&type=${type}`
      return fetch(url,httpOptions)
        .then(result => result.json())
        .then(dishes => context.commit('setSearchResults', dishes.results))
        //.catch(error => console.log(error))
    },
    getDishInfo(context, id) {
      const url = `${BASE_URL}/recipes/${id}/information`
      return fetch(url, httpOptions)
        .then(res => res.json())
        .then(info => context.commit('setDishInfo', info))
    }
  },

  /* Notice how getters is an object. numOfGuests is a property of this object, which accepts the state as the parameter, and returns the numOfGuestes property of the state. */
  getters: {
    numOfGuests: state => state.numOfGuests,
    menuContainsId: (state) => (id) => {
      return state.menu.filter(obj => obj.id === id)
    }
  }

});

// function getAllDishes() {
//   console.log(BASE_URL);  
//   const url = `${BASE_URL}/recipes/search?query=''&type=''`;
//   return fetch(url, httpOptions).then(this.processResponse);
// }

// function processResponse(response) {
//   if (response.ok) {
//     return response.json();
//   }
//   throw response;
// }

