<template>
  <div class="Dishes">
    <h3>fish a dish</h3>

    <form class="pure-form">

      <select id="type" class="pure-input-rounded" v-model="searchObj.type">
            <option v-for="type in dishTypes" :key="type.key" :value="type.value"> 
              {{type.key}} 
            </option>
      </select>

      <input type="text" class="pure-input-rounded" placeholder="searchtext" v-model="searchObj.query" @input="debouncedSearch"> 

      <button type="submit" class="pure-button" @click="search">Search</button>
    </form>

    <ul id="search-result">
       <!-- !! THIS COULD BE MADE REUSABLE FOR OTHER VIEWS-->
      <em v-if='status === "LOADING"'>Loading...</em>
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <li v-for="dish in dishes" :id="dish.id" :key="dish.id">
        
        <div class = "pure-u-1-4 pure-u-lg-1-8">
          <img class="pure-img" :src="'https://spoonacular.com/recipeImages/'+dish.image">
        </div>
        <router-link
         :to="{ name: 'details', params: { id: dish.id }}"> {{ dish.title }}
        </router-link>

      </li>
    </ul>

  </div>
</template>

<script>
  // import modelInstance from "../data/DinnerModel";
  export default {
    mounted() {
      this.search();
    },
    created() {
      this.debouncedSearch = this.debounce(this.search.bind(this), 1500);
    },
    data() {
      return {
        status: "LOADING",
        dishTypes: [{key:'All', value:''},
          {key:'Main Course', value:'main%20course'},
          {key:'Side Dish',value:'side%20dish'},
          {key:'Dessert', value:'dessert'},
          {key:'Appetizer', value:'appetizer'},
          {key:'Salad', value:'salad'},
          {key:'Bread', value:'bread'},
          {key:'Breakfast', value:'breakfast'},
          {key:'Soup', value:'soup'},
          {key:'Beverage', value:'beverage'},
          {key:'Sauce', value:'sauce'},
          {key:'Drink', value:'drink'}
        ],  
        searchObj: {query:'', type:''}        
      }
    }
    , computed: {
      dishes() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      // debouncedSearch: function () { 
      //   this.debounce(this.search.bind(this), 2000)
      // },
      search: function () {
        let context = this;
        context.status='LOADING';
        context.$store.dispatch('search', context.searchObj)
          .then( () => context.status = 'LOADED')
          .catch( () => context.status = 'ERROR');
      },
      // credit david walsh / underscore.js  
      debounce: function (func, wait, immediate) {
        var timeout;

        return function executedFunction() {
          var context = this;
          var args = arguments;
            
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };

        var callNow = immediate && !timeout;
    
        clearTimeout(timeout);

        timeout = setTimeout(later, wait);
    
        if (callNow) func.apply(context, args);
      }
      // ADD A CLEAR SEARCHRESULT METHOD ON SEARCH
    }
  }
}
</script>

<style scoped>
</style>