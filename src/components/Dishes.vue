<template>
  <div class="Dishes">
    <h3>fish a dish</h3>

    <form class="pure-form">
      <input type="text" class="pure-input-rounded" placeholder="searchtext"
      v-model="searchObj.query">
        
        <select id="type" class="pure-input-rounded" v-model="searchObj.type">
              <option v-for="type in dishTypes" :key="type.key" :value="type.value"> 
                {{type.key}} 
              </option>
        </select>
      <button type="submit" class="pure-button" @click="search">Search</button>
    </form>
    <ul>
       <!-- !! THIS COULD BE MADE REUSABLE FOR OTHER VIEWS-->
      <em v-if='status === "LOADING"'>Loading...</em>
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <li v-for="dish in dishes" :id="dish.id" :key="dish.id">
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
    // this methods is called by Vue lifecycle when the component is actually 
    //shown to the user (mounted to DOM) that's a good place to call the API and
    // get the data.
    mounted() {
      // when data is retrieved we update it's properties
      // this will cause the component to re-render
      this.search();

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
      search: function () {
        this.status='LOADING';
        this.$store.dispatch('search', this.searchObj)
          .then( () => this.status = 'LOADED')
          .catch( () => this.status = 'ERROR');
      }
      // ADD A CLEAR SEARCHRESULT METHOD ON SEARCH
      }
    }
</script>

<style scoped>
</style>