import VueRouter from 'vue-router';

const Home = () => import('./components/Home');
const Examples = () => import('./components/Examples');
const Components = () => import('./components/Components');
const Cli = () => import('./components/Cli');
const Donate = () => import('./components/Donate');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/docs', beforeEnter(){ window.open('https://rete.readthedocs.io')} },
    { path: '/examples', component: Examples },
    { path: '/components', component: Components},
    { path: '/cli', component: Cli},
    { path: '/donate', component: Donate },
  ]
})

export default VueRouter;
export { router };
