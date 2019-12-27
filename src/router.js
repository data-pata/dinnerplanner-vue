import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/views/Welcome";
import SelectDish from "@/views/SelectDish";
import modelInstance from "@/data/DinnerModel"; 
import Details from "@/views/DetailsView";
import PrintOut from "@/views/PrintOut";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/search",
      name: "selectdish",
      component: SelectDish,
      props: { model: modelInstance }
    },
    {
      path: '/details/:id', // start of dynamic route /:id
      name: 'details',
      component: Details,
      props: {model: modelInstance} 
    },
    {
      path: '/printout',
      name: 'printout',
      component: PrintOut,
      props: {model: modelInstance}
    }

  ]
});
