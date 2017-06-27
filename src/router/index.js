import Vue from 'vue';
import Router from 'vue-router';
import seller from '../components/Route/seller.vue';
import goods from '../components/Route/goods.vue';
import ratings from '../components/Route/ratings.vue';
Vue.use(seller);
Vue.use(goods);
Vue.use(ratings);
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: seller
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'content3',
      component: ratings
    }
  ]
});
