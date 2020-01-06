<template>
<div class="printout-view">
  <app-header></app-header>
  <h3>PRINTOUT VIEW</h3>
    <!-- sub header -->
    <span>My Dinner: {{ numOfGuests }} people</span>
    <search-btn :text="buttonText"></search-btn> <!-- add btn component --> 
    <br>
    <div></div>
    <span>LIST OF DETAILED DISHES ON MENY</span>
  
</div>
</template>

<script>
import AppHeader from '@/components/sub/AppHeader'
import DishDetails from '@/components/sub/DishDetails'
import SearchBtn from '@/components/sub/SearchBtn'

export default {
  props: ['model'],
  components: {
    AppHeader,
    DishDetails,
    'search-btn': SearchBtn
  },
  
  created() {
    this.model.addObserver(this);
  },
  
  beforeDestroy() {
    this.model.removeObserver(this);
  },

  
  data() {
    return {
      numOfGuests: this.$store.state.numOfGuests,
      buttonText: 'Go back and edit dinner'
    };
  },


  methods: {
    update() {
      // check change details and change accordingly:
      this.numberOfGuests = this.model.getNumberOfGuests();
      this.dish = this.model.getDish(this.$route.params.id);
    }
  }
};
</script>

<style>

</style>