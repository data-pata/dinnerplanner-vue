<template>
  <div class="details-view">
    <app-header></app-header>
    <h2>This is the Dish details view</h2>
    <!-- We pass the model as property to the view component -->
    <!-- ?? How does theese work? pass to dish to0? -->
    <sidebar :model="this.model" />
    <dish-details :model="this.model"/>
    <search-btn :text="buttonText"></search-btn>
    <a class="pure-button" @click="addToMenu" >add to menu</a>
    <ingredients :model="this.model" />

  </div>
</template>

<script>
  // ?? bra blandning av props och import
  import Sidebar from '@/components/Sidebar'
  import DishDetails from '@/components/sub/DishDetails'
  import Ingredients from '@/components/sub/Ingredients'
  import AppHeader from '@/components/sub/AppHeader' 
  import SearchBtn from '@/components/sub/SearchBtn'

  export default {
    props: ['model'],
    components: {
      'sidebar': Sidebar,
      'dish-details': DishDetails,
      'ingredients': Ingredients,
      'app-header': AppHeader,
      'search-btn': SearchBtn
    },
    data() {
      return {
        buttonText: 'back to search'
      }
    },
    methods: {
      addToMenu: function () {
        const id = this.$route.params.id;
        console.log('id to commit: ' + id);
        this.$store.commit('addToMenu',id);
      }
    }
    
    
  }
</script>
