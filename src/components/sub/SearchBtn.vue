<template>
<div class="search-btn">
  <router-link to="/search">
  <a class="pure-button"> {{ text }} </a>
  </router-link>
</div>

</template>

<script>
export default {
  name: 'SearchBtn',
  props: {
    text: String
  }
}

</script>


<style>
.btn {
  color: var(--main-light);
  background: rgb(103, 136, 197);
  padding: 8px;
  font-size: 18px;
  border-bottom: 5px solid rgb(103, 248, 224);
  box-shadow: 3px 3px rgb(51, 70, 66);
}
.btn:hover {
  cursor: pointer; /* link styling */
  background: rosybrown;
}
</style>