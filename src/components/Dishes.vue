<template>
  <div class="Dishes">
    <h3>FIND A DISH</h3>
    
    <ul>
       <!-- !! THIS COULD BE MADE REUSABLE FOR OTHER VIEWS-->
      <em v-if='status === "LOADING"'>Loading...</em>
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <li v-for="dish in dishes" :id="dish.id" :key="dish.id">
        {{ dish.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  // Alternative to passing the model as the component property,
  // we can import the model instance directly
  // ?? WHICH IS PREFERED ?
  // import modelInstance from "../data/DinnerModel";

  export default {
    // this methods is called by Vue lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
    mounted() {
      // when data is retrieved we update it's properties
      // this will cause the component to re-render
      this.$store.dispatch('searchDishes')
        .then( () => this.status = 'LOADED')
        .catch( () => this.status = 'ERROR');

    },
    data() {
      return {
        status: "LOADING"
        // , dishes: this.$state.searchResult
      }
    }
    , computed: {
      dishes() {
        return this.$store.state.searchResult
      }
    }
  }
</script>

<style scoped>
</style>