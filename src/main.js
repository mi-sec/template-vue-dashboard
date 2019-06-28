import Vue from 'vue';

import '@/plugins';

import App      from './App.vue';
import store    from '@/store';
import router   from '@/router';
import { sync } from 'vuex-router-sync';

sync( store, router );

Vue.config.productionTip = false;

new Vue( {
	router,
	store,
	render: h => h( App )
} ).$mount( '#app' );
