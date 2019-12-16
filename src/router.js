import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import SelectDish from "@/components/SelectDish";
import modelInstance from "@/data/DinnerModel"; 
import Details from "@/components/Details";
import Printout from "@/components/Details";

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
      name: 'Printout',
      component: Printout,
      props: {model: modelInstance}
    }

  ]
});
