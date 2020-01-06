<template>
<div class="dish-details">
  <h3>{{dishInfo.title}} </h3> 
  <img class="pure-img" :src="dishInfo.image">
  <h3>Preparation</h3>
  <p>{{dishInfo.instructions}}</p>

</div>
  
</template>

<script>

export default {
  mounted() {
    this.getDishInfo();
  },

  props: ['model'],
  components: {
    
  },
  created() {
    this.model.addObserver(this);
  },
  beforeDestroy() {
    this.model.removeObserver(this);
  },
  
  data() {
    return {
      
    }
  },
  computed: {
    dishInfo() {
        return this.$store.state.dishInfo
      }
  },
  methods: {
    update() {

    },
    getDishInfo: function () {
      const id = this.$route.params.id 
      this.$store.dispatch('getDishInfo', id)
        .then( () => this.status = 'LOADED')
        .catch( () => this.status = 'ERROR');
    }
  }
};
</script>