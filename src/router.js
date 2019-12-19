import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/views/Welcome";
import SelectDish from "@/views/SelectDish";
import modelInstance from "@/data/DinnerModel"; 
import Details from "@/views/Details";
import PrintOut from "@/views/PrintOut";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/search",
      name: "SelectDish",
      component: SelectDish,
      props: { model: modelInstance }
    },
    {
      path: '/details', // start of dynamic route /:id
      name: 'Details',
      component: Details,
      props: {model: modelInstance} 
    },
    {
      path: '/printout',
      name: 'PrintOut',
      component: PrintOut,
      props: {model: modelInstance}
    }

  ]
});
