<template>
  <div class="select-dish">
    <h2>This is the Select Dish screen</h2>
    <!-- We pass the model as property to the Sidebar component
      ??ok but not to Dishes component or other model reliant comps? --> 
    <sidebar :model="this.model"/>
    <dishes />
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Dishes from '@/components/Dishes'

  export default {
    props: ['model'],
    components: {
      'sidebar': Sidebar,
      'dishes': Dishes
    }
  }
</script>
