<template>
<div class="ingredients">
  <h3>Ingredients for {{numOfGuests}} people </h3>
  <table class="pure-table pure-table-striped">
    <thead>
        <tr>
            <th>ingredient</th>
            <th>amount</th>
            <th>unit</th>
        </tr>
    </thead>
    <tbody>     
        <tr>
        <!-- see https://vuejs.org/v2/guide/list.html#Maintaining-State on v-bind:key attribute-->
        <tr class="" v-for="ingred in dishInfo.extendedIngredients" :key="ingred.id">
            <td>{{ingred.name}}</td>
            <td>{{ingred.amount}}</td>
            <td>{{ingred.unit}}</td>
        </tr>
      </tbody>
  </table>
  <p></p>
</div>

</template>

<script>
export default {
  props: ['model'],
  
  created() {
    this.model.addObserver(this);
  },
  
  beforeDestroy() {
    this.model.removeObserver(this);
  },

  // where get state?? ie which dish? in lab3: controller;
  data() {
    return {
      numberOfGuests: this.model.getNumberOfGuests(),
      dish: {}
    };
  },
  computed: {
    numOfGuests() {
      return this.$store.state.numOfGuests
    },
    dishInfo() {
      return this.$store.state.dishInfo
    }
  },
  methods: {
    update() {
      // check change details and change accordingly:
      this.dish = this.model.getDish(this.$route.params.id);
    }
  }
};
</script>