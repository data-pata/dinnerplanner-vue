<template>
  <div class="sidebar">
    <h3>This is the sidebar</h3>
    <p>
      People:
      <input
        class="pure-u-2-24"
        type="number"
        :value="numOfGuests"
        @input="onDidChangeNumOfGuests"
        @change="onDidChangeNumOfGuests"
        min="1"
      >
    </p>
    <table class="pure-table pure-table-striped">
    <thead>
        <tr>
            <th>ingredient</th>
            <th>price</th>
            <th>remove</th>
        </tr>
    </thead>
    <tbody>     
        <tr>
        <!-- see https://vuejs.org/v2/guide/list.html#Maintaining-State on v-bind:key attribute-->
        <tr class="" v-for="dish in menu" :key="dish.id">
            <td>{{dish.title}}</td>
            <td>{{dish.pricePerServing * numOfGuests}}</td>
            <td> X </td>
        </tr>
      </tbody>
      <p>Total price: [totalPrice]</p>
  </table>
  </div>
</template>

<script>
export default {

  props: ["model"],
  // this methods is called by React lifecycle when the
  // component is created that's a good place to setup model observer
  created() {
    this.model.addObserver(this);
  },

  // this is called when component is removed destroyed
  // good place to remove observer
  beforeDestroy() {
    this.model.removeObserver(this);
  },

  //we define and initalise the data we want to use and modify in the component
  // data() {
  //   return {
  //     numOfGuests: this.model.getNumberOfGuests()
  //   };
  // },
  computed: {
    numOfGuests() {
      return this.$store.state.numOfGuests
    },
    menu() {
      return this.$store.state.menu
    }
  },
  methods: {
    // in our update function we modify the the property of
    // the compoented which will cause the component to re-render
    // update() {
    //   this.numberOfGuests = this.model.getNumberOfGuests();
    // },

    // our handler for the input's on change event
    onDidChangeNumOfGuests(e) {
      this.$store.dispatch('changeNumOfGuests',+e.target.value);
    }
  }
};
</script>
