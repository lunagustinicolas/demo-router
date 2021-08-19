import Vue from 'vue';
import Router from 'vue-router';
import PrimerPaso from './components/PrimerPaso.vue';
import SegundoPaso from './components/SegundoPaso.vue';
import UltimoPaso from './components/UltimoPaso.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'primerPaso',
            component: PrimerPaso
        },
        {
            path: '/segundo-paso',
            name: 'segundoPaso',
            component: SegundoPaso
        },
        {
            path: '/ultimo-paso',
            name: 'ultimoPaso',
            component: UltimoPaso
        },
    ],
});