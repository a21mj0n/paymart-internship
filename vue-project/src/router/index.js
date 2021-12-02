import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// initizialation of router 

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
